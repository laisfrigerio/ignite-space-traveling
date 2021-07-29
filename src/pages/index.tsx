import { GetStaticProps } from 'next'
import { FiCalendar, FiUser } from 'react-icons/fi'
import { format } from 'date-fns'
import { getPrismicClient } from '../services/prismic'
import Link from 'next/link'
import ptBR from 'date-fns/locale/pt-BR';
import Prismic from '@prismicio/client'
import Header from '../components/Header'
import commonStyles from '../styles/common.module.scss'
import styles from './home.module.scss';
import { useState } from 'react';

interface Post {
  uid?: string;
  first_publication_date: string | null;
  data: {
    title: string;
    subtitle: string;
    author: string;
  };
}

interface PostPagination {
  next_page: string;
  results: Post[];
}

interface HomeProps {
  postsPagination: PostPagination;
}

export default function Home({ postsPagination }: HomeProps) {
  const [data, setData] = useState<PostPagination>(postsPagination)

  function handleNextPage () {
    fetch(data.next_page)
      .then(response => response.json())
      .then(responseData => setData({
        next_page: responseData.next_page,
        results: [
          ...data.results,
          ...responseData?.results.map(post => {
            return {
              uid: post.uid,
              data: {
                title: post.data.title,
                subtitle: post.data.subtitle,
                author: post.data.author
              },
              first_publication_date: post.first_publication_date
            }
          })
        ]
      }))
      .catch(err => console.log(err.message))
  }

  return (
    <>
      <Header />
      <main className={commonStyles.contentContainer}>
        <ul>
          {data.results.map(post => (
            <li key={post.uid} className={styles.post}>
              <Link href={`/post/${post.uid}`}>
                <a>
                  <h2>{post.data.title}</h2>
                  <h3>{post.data.subtitle}</h3>
                  <footer className={commonStyles.dateAuthorReading}>
                    <span>
                      <FiCalendar />
                      {format(new Date(post.first_publication_date), 'dd MMM yyyy', { locale: ptBR })}
                    </span>
                    <span>
                      <FiUser />
                      {post.data.author}
                    </span>
                  </footer>
                </a>
              </Link>
            </li>
          ))}
          </ul>
        {data.next_page && <button onClick={handleNextPage} className={styles.loadMorePosts} type="button">Carregar mais posts</button>}
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()
  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'posts')
  ], {
    fetch: [
      'posts.title',
      'posts.subtitle',
      'posts.author'
    ],
    pageSize: 1
  })

  let posts: Post[] = []

  if (response?.results) {
    posts = response.results.map(post => {
      return {
        uid: post.uid,
        data: {
          title: post.data.title,
          subtitle: post.data.subtitle,
          author: post.data.author
        },
        first_publication_date: post.first_publication_date
      }
    })
  }

  return {
    props: {
      postsPagination: {
        next_page: response?.next_page ?? null,
        results: posts
      }
    }
  }
}

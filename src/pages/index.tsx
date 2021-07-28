import { GetStaticProps } from 'next'
import { FiCalendar, FiUser } from 'react-icons/fi'
import Header from '../components/Header'

import { getPrismicClient } from '../services/prismic';

import commonStyles from '../styles/common.module.scss';
import styles from './home.module.scss';

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

export default function Home() {
  return (
    <>
      <Header />
      <main className={commonStyles.contentContainer}>
        <ul>
          <li className={styles.post}>
            <a href="#">
              <h2>Como utilizar Hooks</h2>
              <h3>Pensando em sincronização em vez de ciclos de vida.</h3>
              <footer>
                <span>
                  <FiCalendar />
                  15 Mar 2021
                </span>
                <span>
                  <FiUser />
                  Joseph Oliveira
                </span>
              </footer>
            </a>
          </li>

          <li className={styles.post}>
            <a href="#">
              <h2>Criando um app CRA do zero</h2>
              <h3>Tudo sobre como criar a sua primeira aplicação utilizando Create React App</h3>
              <footer>
                <span>
                  <FiCalendar />
                  19 Abr 2021
                </span>
                <span>
                  <FiUser />
                  Danilo Vieira
                </span>
              </footer>
            </a>
          </li>

          <li className={styles.post}>
            <a href="#">
              <h2>Como utilizar Hooks</h2>
              <h3>Pensando em sincronização em vez de ciclos de vida.</h3>
              <footer>
                <span>
                  <FiCalendar />
                  15 Mar 2021
                </span>
                <span>
                  <FiUser />
                  Joseph Oliveira
                </span>
              </footer>
            </a>
          </li>

          <li className={styles.post}>
            <a href="#">
              <h2>Criando um app CRA do zero</h2>
              <h3>Tudo sobre como criar a sua primeira aplicação utilizando Create React App</h3>
              <footer>
                <span>
                  <FiCalendar />
                  19 Abr 2021
                </span>
                <span>
                  <FiUser />
                  Danilo Vieira
                </span>
              </footer>
            </a>
          </li>

          <li className={styles.post}>
            <a href="#">
              <h2>Como utilizar Hooks</h2>
              <h3>Pensando em sincronização em vez de ciclos de vida.</h3>
              <footer>
                <span>
                  <FiCalendar />
                  15 Mar 2021
                </span>
                <span>
                  <FiUser />
                  Joseph Oliveira
                </span>
              </footer>
            </a>
          </li>

          <li className={styles.post}>
            <a href="#">
              <h2>Criando um app CRA do zero</h2>
              <h3>Tudo sobre como criar a sua primeira aplicação utilizando Create React App</h3>
              <footer>
                <span>
                  <FiCalendar />
                  19 Abr 2021
                </span>
                <span>
                  <FiUser />
                  Danilo Vieira
                </span>
              </footer>
            </a>
          </li>
        </ul>

        <button className={styles.loadMorePosts} type="button">Carregar mais posts</button>
      </main>
    </>
  )
}

// export const getStaticProps = async () => {
//   // const prismic = getPrismicClient();
//   // const postsResponse = await prismic.query(TODO);

//   // TODO
// };

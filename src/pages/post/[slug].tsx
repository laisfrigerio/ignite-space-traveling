import { GetStaticPaths, GetStaticProps } from 'next'
import { getPrismicClient } from '../../services/prismic'
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi'
import Header from '../../components/Header'
import commonStyles from '../../styles/common.module.scss'
import styles from './post.module.scss'

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post() {
  return (
    <>
      <Header />
      <main>
        <img className={styles.postImage} src="/cover-picture.png" alt="Imagem de capa do post" />
        <article className={`${commonStyles.contentContainer} ${styles.postContent}`}>
          <header className={styles.postHeader}>
            <h1>Criando um app CRA do zero</h1>
          </header>
          <footer className={commonStyles.dateAuthorReading }>
            <span>
              <FiCalendar />
              20 Mar 2021
            </span>
            <span>
              <FiUser />
              Lais Frigério
            </span>
            <span>
              <FiClock />
              4 min
            </span>
          </footer>
          <div className={styles.postBody}>
            <h2>Proin et varius</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dolor sapien, vulputate eu diam at, condimentum hendrerit tellus. Nam facilisis sodales felis, pharetra pharetra lectus auctor sed. </p>
            <h2>Nullam dolor sapien</h2>
            <p>Ut venenatis mauris vel libero pretium, et pretium ligula faucibus. Morbi nibh felis, elementum Ut venenatis mauris vel libero pretium, et pretium ligula faucibus. Morbi nibh felis, elementum Ut venenatis mauris vel libero pretium, et pretium ligula faucibus. Morbi nibh felis, elementum Ut venenatis mauris vel libero pretium, et pretium ligula faucibus. Morbi nibh felis, elementum </p>
          </div>
        </article>
      </main>
    </>
  )
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };

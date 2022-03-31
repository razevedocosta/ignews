import styles from './styles.module.scss';
import Head from 'next/head';

import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { getPrismicClient } from '../../services/prismic';

export default function Posts() {
    return(
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>

            <main className={styles.container}>
                <div className={styles.posts}>
                    <a>
                        <time>12 de Março de 2022</time>
                        <strong>Lorem ipsum name absulahi</strong>
                        <p>In this guide, afternoon today I don't feel like do it anything</p>
                    </a>

                    <a>
                        <time>12 de Março de 2022</time>
                        <strong>Lorem ipsum name absulahi</strong>
                        <p>In this guide, afternoon today I don't feel like do it anything</p>
                    </a>

                    <a>
                        <time>12 de Março de 2022</time>
                        <strong>Lorem ipsum name absulahi</strong>
                        <p>In this guide, afternoon today I don't feel like do it anything</p>
                    </a>
                </div>
            </main>
        </>
    );
}

export const getStaticProps: GetStaticProps = async() => {
    const prismic = getPrismicClient()

    const response = await prismic.query([
        Prismic.predicates.at('document.type', 'publication')
    ], {
        fetch: ['publication.title', 'publication.content'],
        pageSize: 100,
    })

    return {
        props: {

        }
    }
}
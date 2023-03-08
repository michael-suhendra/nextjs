import Link from 'next/link';
// all images are under public/images
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';
import styles from '../../styles/Home.module.css';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>Hello there!</title>
                <meta property="og:title" content="Hello there!" key="first-post-title" />
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() =>
                        console.log(`script loaded correctly, window.FB has been populated`)
                    }
                />
            </Head>
            <h1 className="text-3xl font-bold underline">
                Blog entry 1
            </h1>
            <h2>
                <Link href="/"><p className="text-3xl font-bold underline">Back to home</p></Link>
            </h2>
        </Layout>
    );
}
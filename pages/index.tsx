import { useContext } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import { context } from './../utils/context';
import { Card } from './../components/Card';
import { TProductInterface } from '../utils/util';

const Home: NextPage = () => {
  const { products } = useContext(context);
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome to Shopper store</title>
        <meta
          name="description"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
        <div className="flex flex-wrap gap-12 w-full m-auto justify-center lg:justify-start">
          {products.map((item: TProductInterface) => (
            <Card product={item} key={item.name} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;

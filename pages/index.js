import Head from 'next/head';
// import Image from 'next/image';
// import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import TailwindPagination from '@/component/TailwindPagination';
import TailwindPagination2 from '@/component/TailwindPagination2';
import TailwindPaginationWithAPI from '@/component/TailwindPaginationWithAPI';
import axios from 'axios';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<p className="text-5xl">Tailwind</p>
				{/* <TailwindPagination /> */}
				<TailwindPagination2 />
				<TailwindPaginationWithAPI />
			</main>
		</>
	);
}
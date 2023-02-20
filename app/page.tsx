import Image from "next/image";
import {Inter} from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
	return (
		<main className={styles.main}>
			<a href="/popular-movies" className="text-xl text-white">
				Popular Movies
			</a>
		</main>
	);
}

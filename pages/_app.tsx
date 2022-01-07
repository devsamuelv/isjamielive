import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<script async src="https://cdn.splitbee.io/sb.js"></script>
			</Head>

			<Component {...pageProps} />
		</>
	);
}

export default MyApp;

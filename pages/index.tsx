import axios from "axios";
import type { NextPage } from "next";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import styles from "../styles/Home.module.css";
import { VOD } from "../types/vod.type";
import { Stream } from "../types/steam.type";

export const getServerSideProps = async () => {
	const stream = await axios.get("https://isjamie.live/api/get_stream");
	const vods = await axios.get("https://isjamie.live/api/get_vods");

	return {
		props: {
			stream: stream.data,
			vods: vods.data,
		},
	};
};

type Props = {
	vods: VOD;
	stream: Stream;
};

const Home: NextPage<Props> = ({ stream, vods }) => {
	const { push } = useRouter();

	return (
		<div className={styles.container}>
			<Head>
				<title>Is Jamie Live</title>
				<meta name="description" content="is jamie live" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<span className="absolute top-5 right-5 rounded-md shadow-sm">
				<button
					onClick={() => push("https://github.com/devsamuelv")}
					type="button"
					className="inline-flex items-center px-4 py-4 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition ease-in-out duration-150"
				>
					<FaGithub className="mr-2" size={24} />
					My Github
				</button>
			</span>

			<main className={styles.main}>
				<div className="bg-twitch-grey text-white p-6 rounded-lg shadow-md border-1 border-gray-400">
					<div className="flex flex-row">
						{stream.data[0] == null ? (
							<div>
								<h2 className="text-3xl">Jamie is offline 😞</h2>
							</div>
						) : (
							<div className="ml-3 flex flex-col mt-2">
								<img
									className="rounded-full w-24"
									src="https://static-cdn.jtvnw.net/jtv_user_pictures/bbb1b59c-e112-4d42-b666-8749c1ed297b-profile_image-70x70.png"
									alt={"logo"}
								/>

								<h2>{stream.data[0].title}</h2>
								<h2>Streaming: {stream.data[0].game_name}</h2>
								<h3>Viewers: {stream.data[0].viewer_count}</h3>
							</div>
						)}
					</div>

					{stream.data[0] == null ? (
						<span className="rounded-md shadow-sm">
							<button
								onClick={() => push(vods.data[0].url)}
								type="button"
								className="mt-5 w-full px-3 py-4 border border-transparent text-xl leading-4 font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
							>
								Watch Latest Vod {vods.data[0].title}
							</button>
						</span>
					) : (
						<span className="rounded-md shadow-sm">
							<button
								onClick={() => push("https://www.twitch.tv/jamiepinelive")}
								type="button"
								className="mt-5 w-full px-3 py-4 border border-transparent text-xl leading-4 font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
							>
								View Stream
							</button>
						</span>
					)}
				</div>
			</main>
		</div>
	);
};

export default Home;

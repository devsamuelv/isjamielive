// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
	name: string;
};

// jamies user id 48234453
// lana lux 112375357

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { data, status } = await axios.get(
		"https://api.twitch.tv/helix/streams/?user_id=48234453",
		{
			headers: {
				"Client-ID": "gjmrqd4mdfympmti3ss1ah8r34mmc2",
				Authorization: `Bearer ${process.env.TOKEN}`,
			},
		}
	);

	res.send({
		...data,
	});
}

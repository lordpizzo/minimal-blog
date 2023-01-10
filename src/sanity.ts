import { createClient } from "next-sanity";

const cliente = createClient({
	projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
	dataset: process.env.NEXT_PUBLIC_DATASET,
	apiVersion: process.env.NEXT_PUBLIC_API_VERSION,
	useCdn: false
})

export default cliente

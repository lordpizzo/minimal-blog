import { Flex, Image, Text } from "@chakra-ui/react";
import { useNextSanityImage } from "next-sanity-image";
import Author from "src/Components/Author/Author";
import { IPost } from "src/IPost";
import cliente from "src/sanity";
import PortableText from 'react-portable-text'
import { ReactNode } from "react";
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface Props {
	post: IPost
}

export default function Post({ post }: Props) {
	const imageMain: SanityImageSource = useNextSanityImage(cliente, post.mainImage)
	type ButtonProps = {
		children: ReactNode;

	}
	return (
		<Flex direction="column" align="center" fontFamily="Josefin Sans">
			<Flex direction="column" align="center">
				<Text fontSize="xxx-large" as="b" align="center">{post.title}</Text>
				<Text >{post.subtitle}</Text>
				<Author post={post} />
			</Flex>
			<Flex as="article" direction="column">
				{imageMain &&
					<Image src={imageMain.url} />
				}
			</Flex>
			<Flex p={50}>
				<PortableText
					content={post.body}
					projectId={process.env.NEXT_PUBLIC_PROJECT_ID}
					dataset={process.env.NEXT_PUBLIC_DATASET}

					serializers={{
						h1: ({ children }: ButtonProps) => <Text fontSize="xxx-large" m={2}>{children}</Text>,
						h2: ({ children }: ButtonProps) => <Text fontSize="xx-large" m={5} p={10} align="center">{children}</Text>,
						h3: ({ children }: ButtonProps) => <Text fontSize="xx-large">{children}</Text>,
						p: ({ children }: ButtonProps) => <Text fontSize="xx-large">{children}</Text>,
					}} />
			</Flex>
		</Flex>
	)
}

// export const getStaticPaths = async () => {
// 	const query = `*[_type == "post" && defined(slug.current)[]].slug.current`
// 	const slugPaths = await cliente.fetch(query)
// 	return {
// 		paths: slugPaths.map((slug) => ({ params: { slug: slug } })),
// 		fallback: true
// 	}
// }

export async function getStaticPaths() {
	const posts = await cliente.fetch(`*[_type == "post"]{
		_id,
		title,
		author-> {
			name,
			image	
		},
		subtitle,
		short_text,
		mainImage,
		slug,
		body,
		_createdAt
	}`)

	const paths = posts.map((post: IPost) => ({
		params: { slug: post.slug.current },
	}));
	return {
		paths,
		fallback: false,
	};
}

export const getStaticProps = async (context: { params: { slug?: "" | undefined; }; }) => {
	const { slug = "" } = context.params

	const query = `*[_type == "post" && slug.current == "${slug}"][0]{
		_id,
		title,
		author-> {
			name,
			image	
		},
		subtitle,
		short_text,
		mainImage,
		slug,
		body,
		_createdAt
	}`
	const post = await cliente.fetch(query)
	return {
		props: {
			post
		}
	}
}

import { Card, Container, Flex, Image, Text, Box } from "@chakra-ui/react";
import Link from "next/link";
import Author from "../Author/Author";
import { IPost } from "src/IPost";
import { useNextSanityImage } from "next-sanity-image";
import cliente from "src/sanity";
interface Props {
	post: IPost
}
export default function CardPost({ post }: Props) {
	const imagePost = useNextSanityImage(cliente, post.mainImage)
	const slug = `/post/${post.slug.current}`
	return (
		<Flex mt={10} w="100%" display='block'>
			<Card borderRadius={18} p={3} w="100%">
				<Flex w="100%" direction={["column", "column", "row"]} align="center">
					<Image w={[200,400,300]} h={[200,400,300]} border="1px solid black" src={imagePost.src} borderRadius={18} />
					<Flex direction="column" ml={10} h={{md: 300}}>
						<Text fontSize="x-large" fontFamily="Josefin Sans">{post.title}</Text>
						 <Text fontSize="medium"  fontFamily="Josefin Sans">{post.short_text}</Text> 
						<Flex direction="column" h={{md: 300}} >
							<Author post={post} />
							<Link href={slug}>Continuar Lendo &rarr;</Link>
						</Flex>
					</Flex>
				</Flex>
			</Card>
		</Flex>
	)
}

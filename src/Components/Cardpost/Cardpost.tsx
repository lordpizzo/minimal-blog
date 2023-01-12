import { Card, Flex, Image, Text } from "@chakra-ui/react";
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
		<Link href={slug}>

			<Flex mt={10} w="100%" display='block'>
				<Card borderRadius={18} p={2} w="100%">
					<Flex w="100%" direction={["column", "column", "row"]} align="center" pt={3}>
						<Image w={[325, 400, 300]} h={[200, 400, 300]} src={imagePost.src} borderRadius={18} />
						<Flex direction="column" h={{ md: 300 }} w="100%">
							<Text fontSize="x-large" fontFamily="Josefin Sans" align="center" mt={2}>{post.title}</Text>
							<Text fontSize="medium" fontFamily="Josefin Sans" align="center">{post.short_text}</Text>
							<Flex direction="column" h={[120, 300, 200]} align="center" >
								<Author post={post} />
								<Flex align="flex-start" mt={3}>

									<Text>Continuar Lendo &rarr;</Text>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
				</Card>
			</Flex>
		</Link>
	)
}

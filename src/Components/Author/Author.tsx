import { Avatar, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { useNextSanityImage } from "next-sanity-image";
import { IPost } from "src/IPost";
import cliente from "src/sanity";

interface Props {
	post: IPost
}

export default function Author({ post }: Props) {
	const imageAuthor = useNextSanityImage(cliente, post.author.image)
	const newDate = new Date(post._createdAt)
	const formattedDate = new Intl.DateTimeFormat('pt-BR', {
		day: 'numeric',
		month: "long",
		year: "numeric"
	}).format(newDate)
	return (
		<Flex direction="column" ml={3}>

			<Flex direction="row" h='100%' pt={10} align="center">

				<Stack direction='row'>
					<Avatar name={post.author.name} src={imageAuthor.src} />
				</Stack>
				<Flex direction="column" ml={[3, 6, 6]}>
					<Text fontSize="medium" fontFamily="Josefin Sans">{post.author.name}</Text>
				</Flex>
			</Flex>
			<Text fontSize="medium" fontFamily="Josefin Sans">{formattedDate}</Text>

		</Flex>
	)
}

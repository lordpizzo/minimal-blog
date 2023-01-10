import { Flex, Image, Text, Container } from "@chakra-ui/react";
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
		<Flex direction="row" h='100%' pt={10}>
			<Image src={imageAuthor.src} borderRadius='full'
				boxSize={[25,50,50]} alt="Author"></Image>
			<Flex direction="column" ml={[3,6,6]}>
				<Text fontSize="medium"  fontFamily="Josefin Sans">{post.author.name}</Text>
				<Text fontSize="medium" fontFamily="Josefin Sans">{formattedDate}</Text>
			</Flex>
		</Flex>
	)
}

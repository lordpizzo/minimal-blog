import { Flex, Text } from '@chakra-ui/react'

interface props {
	bgcolor: string
}

export default function Bar({ bgcolor }: props) {
	return (
		<Flex bg={bgcolor} h="5vh" w="95%" align="center" textAlign="center" alignItems="center" alignContent="center">
			<Text w={["100vh", "100vh", "200vh"]} fontSize="x-large" fontFamily="Josefin Sans">Novos artigos todas as teças!</Text>
		</Flex>
	)
}

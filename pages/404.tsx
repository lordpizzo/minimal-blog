import { Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Custom404() {
	return (
		<Flex direction="column" align="center">
			<Text  fontSize="xx-large" p={10}>Oops!!! Error 404</Text>
			<Flex align="center" alignItems="center" alignContent="center">
				<Text >A página que você está tentando acessar não existe.</Text>
			</Flex>
			<Link href="/" >
				<Button>Voltar para Artigos</Button>
			</Link>
		</Flex>
	)
}

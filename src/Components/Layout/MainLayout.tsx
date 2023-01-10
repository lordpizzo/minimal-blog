import { Flex, useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import Bar from "../Bar/Bar";
import { BsSun, BsFillMoonStarsFill } from 'react-icons/bs'
import Heading from "../Heading/Heading";
import Footer from "../Footer/Footer";

interface props {
	children: JSX.Element
}

export default function ({ children }: props) {
	const { colorMode, toggleColorMode } = useColorMode()
	const formBackground = useColorModeValue("gray.100", "gray.700")
	return (
		<Flex direction="column" h="100%">
			<header>
				<Flex align="center" direction="row" w="100%" h="100%">
					<IconButton h="5vh" w="5%" aria-label={""} icon={colorMode == 'light' ? <BsFillMoonStarsFill /> : <BsSun />} onClick={toggleColorMode} />
					<Bar bgcolor={formBackground} />


				</Flex>
				<Flex direction="column" w="100%">
					<Heading />
				</Flex>
			</header>
			<main>
				{children}
			</main>
			<Footer bgcolor={formBackground} />
		</Flex>
	)
}

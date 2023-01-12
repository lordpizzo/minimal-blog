import { Flex, Text, Link } from "@chakra-ui/react";
import Logo from "../Logo/Logo";
import { AiFillInstagram } from 'react-icons/ai';
import { IoLogoWhatsapp } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { BsTelegram } from 'react-icons/bs';

interface props {
	bgcolor: string
}

const social = [
	{ component: <AiFillInstagram />, url: '#' },
	{ component: <IoLogoWhatsapp />, url: '#' },
	{ component: <MdEmail />, url: '#' },
	{ component: <BsTelegram />, url: '#' },
];

export default function Footer({ bgcolor }: props) {
	const renderSocial = social.map((elemento, indice) => (
		<Link href={elemento.url} key={indice} p={3} >
			{elemento.component}
		</Link>
	));
	return (
		<Flex direction="column" bg={bgcolor} mt={20} fontFamily="Josefin Sans" >
			<Flex direction="column" h={[300, 200, 300]} pl={[10, 50, 100]} mt={20}>
				<Flex direction="column" >
					<Logo />
					<Text as="p" w={[250, 200, 250]} >Compartilhando conhecimento sobre o mundo de tecnologia.</Text>
					<Flex >
						{renderSocial}
					</Flex>
				</Flex>

			</Flex>
			<Text pl={0} align="center">Minimal Blog - Totos os direitos reservados</Text>
		</Flex>
	)
}

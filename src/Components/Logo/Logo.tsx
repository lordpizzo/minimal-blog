import { Image, Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function Logo() {
	return (
		<Flex w="100%" >
			<Link href="/">
				<Image src="/logo.svg" alt="Minimal Log" w={[409, 309, 309]} h={48} />
			</Link>
		</Flex>
	)
}

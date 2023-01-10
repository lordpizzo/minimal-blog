import { Button, Flex, Input } from "@chakra-ui/react";
import { BiSearchAlt } from 'react-icons/bi'
import Logo from "../Logo/Logo";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { searchState } from '../../state/atom'

export default function Heading() {
	const router = useRouter()
	const [search, setSearchState] = useRecoilState(searchState)
	const submitHandler = (evento: { preventDefault: () => void; }) => {
		evento.preventDefault()
		router.push(`/`)
	}
	return (
		<form onSubmit={submitHandler}>
			<Flex w="100%" direction="row" align="flex-start" alignContent="center" alignItems="center" pl={[10,50,100]} pr={[10,50,100]} >
				<Logo />
				<Flex w="100%" align="flex-end" direction="row">
					<Input alignItems="flex-end" variant="unstyled" type="text" name="search" id="search" placeholder="Buscar artigos" value={search} size="lg" fontSize="4xl" fontFamily="Josefin Sans" onChange={evento => setSearchState(evento.target.value)}></Input>
					<Button size="lg" variant="ghost" onClick={submitHandler} >
						<BiSearchAlt size="4xl" />
					</Button>
				</Flex>
			</Flex>
		</form>
	)
}

import { Alert, AlertIcon, Button, Flex, Text } from "@chakra-ui/react";
import CardPost from "src/Components/Cardpost/Cardpost";
import { IPost } from "src/IPost";
import cliente from "src/sanity";
import { useRouter } from "next/router";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons"
import { useRecoilValue } from "recoil";
import { getSearchState } from '../src/state/atom'
import '@fontsource/josefin-sans/700.css'

interface Props {
	posts: [IPost]
}

export default function Home(props: Props) {

	const router = useRouter()
	const searchFor = useRecoilValue(getSearchState)
	//Filter Posts
	const foundPosts = props.posts.filter(post => post.title.toLowerCase().includes(searchFor)) || []

	//Pagination
	const numberOfPosts = searchFor === '' ? props.posts.length : foundPosts.length
	const postsPerPage = 4
	const lastPage = Math.ceil(numberOfPosts / postsPerPage)

	let currentPage = Number(router.query.page) || 1

	if (currentPage < 1) currentPage = 1
	if (currentPage > lastPage) currentPage = lastPage

	const inicialIndex = postsPerPage * (currentPage - 1)
	const finalIndex = postsPerPage * currentPage

	const disableLeftButton = currentPage <= 1
	const disableRightButton = currentPage >= lastPage
	const disablePagination = numberOfPosts <= postsPerPage

	const currentPostList = searchFor === '' ? props.posts : foundPosts

	const renderPost = currentPostList
		.sort((a, b) => new Date(b._createdAt).valueOf() - new Date(a._createdAt).valueOf())
		.slice(inicialIndex, finalIndex)
		.map(post =>
			<CardPost key={post._id} post={post} />
		)
	return (
		<Flex w="100%" h="100%" direction="column" align="center">
			<Flex w="100%" direction="column" paddingRight={5} paddingLeft={5}>
				<Text as="h2" textAlign="center" fontSize="xx-large" fontFamily="Josefin Sans">Ultimos artigos do Minimal Blog</Text>
				{renderPost}

				{searchFor !== '' && foundPosts.length === 0 && (
					<Alert status='error' >
						<AlertIcon />
						Oops! Nenhum post encontrado
					</Alert>
				)}

			</Flex>
			<Flex align="center" pt={10} display={disablePagination ? 'none' : 'display'}>
				<Flex w="100%" h="100%" direction="row" >
					<Button
						disabled={disableLeftButton}
						onClick={() => router.push(`?page=${currentPage - 1}`)}
						size="lg"
						variant='solid'
						leftIcon={<ArrowBackIcon />}>
					</Button>
					<Text m="0 1rem" fontSize="5xl">{currentPage} / {lastPage}</Text>
					<Button
						disabled={disableRightButton}
						onClick={() => router.push(`?page=${currentPage + 1}`)}
						size="lg"
						variant='solid'
						rightIcon={<ArrowForwardIcon />}>
					</Button>
				</Flex>
			</Flex>
		</Flex>
	)
}

export const getStaticProps = async () => {
	const posts = await cliente.fetch(`*[_type == "post"]{
		_id,
		title,
		author-> {
			name,
			image	
		},
		subtitle,
		short_text,
		mainImage,
		slug,
		body,
		_createdAt
	}`)
	return {
		props: {
			posts
		}
	}
}

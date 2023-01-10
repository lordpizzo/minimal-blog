import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

import { extendTheme } from '@chakra-ui/react'
import MainLayout from 'src/Components/Layout/MainLayout'
import { RecoilRoot } from 'recoil'
import { Inter } from '@next/font/google'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import '@fontsource/josefin-sans/700.css'
import Fonts from 'src/Components/Layout/Fonts'


// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

const colors = {
	brand: {
		900: '#1a365d',
		800: '#153e75',
		700: '#2a69ac',
	},
	fonts: {
		heading: 'Montserrat',
		body: 'Inter',
	  },
	
}

const theme = extendTheme({ colors })

export default function App({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<ChakraProvider theme={theme}>
				<Fonts/>
				<MainLayout>
					<Component {...pageProps} />
				</MainLayout>
			</ChakraProvider>
		</RecoilRoot>
	)
}

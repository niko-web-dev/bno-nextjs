import { AppProps } from 'next/app'
import { motion } from 'framer-motion'
import { MenuProvider } from '../context/contextMenu'
import Menu from '../components/menu'

import { animation } from '../animation/animation'
import '../public/styles/globals.css'

import Header from '../components/header'
import Footer from '../components/footer'

function MyApp({ Component, pageProps, router }: AppProps) {
	return (
		<motion.div
			key={router.route}
			initial="pageInitial"
			animate="pageAnimate"
			variants={animation.page}
		>
			<MenuProvider>
				<Menu/>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</MenuProvider>
		</motion.div>
	)
}

export default MyApp

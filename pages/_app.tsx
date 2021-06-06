import { AppProps } from 'next/app'
import '../public/styles/globals.css'
import { MenuProvider } from '../context/contextMenu'
import { motion } from 'framer-motion'
import { animation } from '../animation/animation'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={animation.page}
    >
      {/*<MenuProvider>*/}
        <Component {...pageProps} />
      {/*</MenuProvider>*/}
    </motion.div>
  )
}

export default MyApp

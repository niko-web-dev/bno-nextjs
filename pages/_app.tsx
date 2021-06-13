import { AppProps } from 'next/app'
import { motion } from 'framer-motion'
import { MenuProvider } from '../context/contextMenu'

import { animation } from '../animation/animation'
import '../public/styles/globals.css'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={animation.page}
    >
      <MenuProvider>
        <Component {...pageProps} />
      </MenuProvider>
    </motion.div>
  )
}

export default MyApp

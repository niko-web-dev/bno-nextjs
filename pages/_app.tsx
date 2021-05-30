import { AppProps } from 'next/app'
import '../public/styles/globals.css'
import { AppProvider } from '../context/contextApp'
import { motion } from 'framer-motion'
import { pageAnimation } from '../animation/animation'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={pageAnimation}
    >
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </motion.div>
  )
}

export default MyApp

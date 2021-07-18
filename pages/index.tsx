import Head from 'next/head'
import StartWindow from '../components/startWindow'
import { NextPage } from 'next'
import GallerySlider from '../components/gallerySlider'
import Details from '../components/details'
import { TProducts } from '../types'

const Home: NextPage<TProducts> = ({ products }) => {
	return (
		<>
			<Head>
				<title>B.N.O</title>
				<link rel="icon" href="/logo.ico" />
			</Head>
			<StartWindow />
			<GallerySlider products={products} />
			<Details />
		</>
	)
}

export async function getServerSideProps() {
	const res = await fetch(`http://wp.brandneworder.ru/wp-json/wp/v2/products/`)
	const products = await res.json()

	return { props: { products } }
}

export default Home

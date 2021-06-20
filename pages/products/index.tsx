import Image from 'next/image'
import Link from 'next/link'
import { TProducts } from '../../types'
import { FC } from 'react'
import s from './products.module.scss'
const Products: FC<TProducts> = ({ products }) => {

	return (
		<div className={s.gallery}>
			{products?.map((product, index) => {
				return (
					<Link href={`/products/${product.id}`} key={index}>
						<a>
							<h2>{product.title}</h2>
							<Image
								src={product.main_image.src}
								width={500}
								height={500}
								alt="brand"
							/>
						</a>
					</Link>
				)
			})}
		</div>
	)
}

// http://wp.iqwik.ru/wp-json/wp/v2/products
export async function getServerSideProps() {
	const res = await fetch(`http://wp.iqwik.ru/wp-json/wp/v2/products/`)
	const products = await res.json()

	return { props: { products } }
}

export default Products

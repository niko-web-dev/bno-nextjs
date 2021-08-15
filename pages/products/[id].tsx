import Header from '../../components/header'
import Index from '../../components/Tags'

import s from './product-page.module.scss'
import { SliderMotion } from '../../components/cardSlider/sliderMotion'
import { FC } from 'react'
import { TProduct } from '../../types'
import ProductInfo from '../../components/productInfo'
import CardSlider from '../../components/cardSlider/cardSlider'

export type TSingleProduct = {
	product: TProduct
}
const ProductPage: FC<TSingleProduct> = ({ product }) => {
	return (
		<div>
			<Header />

			<div className={s.card__wrap}>
				<div className="container" style={{ display: 'flex' }}>
					<div className={s.card__content}>
						<Index
							brand={'STONE ISLAND'}
							types={['Верхняя одежда', 'Куртки']}
						/>
						<CardSlider images={product.gallery} />
					</div>

					<ProductInfo product={product} />
				</div>
			</div>
		</div>
	)
}

export async function getServerSideProps(ctx) {
	const { id } = ctx.query
	const res = await fetch(
		`http://wp.brandneworder.ru/wp-json/wp/v2/products/${id}`
	)
	const product = await res.json()

	return { props: { product } }
}

export default ProductPage

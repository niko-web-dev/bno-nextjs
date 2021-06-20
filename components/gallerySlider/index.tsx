import { FC, Fragment } from 'react'
import s from './gallery.module.scss'

import { TProducts } from '../../types'
import ProductCard from '../../pages/products/productCard'

const GallerySlider: FC<TProducts> = ({ products }) => {
	return (
		<div className={s.__slider}>
			<div className="container">
				<h2 className={s.gallery__title}>новинки</h2>
				<div className={s.gallery__inner}>
					{products.map((product) => {
						return (
							<Fragment key={product.id}>
								<ProductCard {...product} />
							</Fragment>
						)
					})}
				</div>
				/
			</div>
			<style jsx>{`
				.gallery__slider {
				}
			`}</style>
		</div>
	)
}

export default GallerySlider

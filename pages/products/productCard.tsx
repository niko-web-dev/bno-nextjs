import Link from 'next/link'
import s from './product-card.module.scss'
import Image from 'next/image'
import { TProduct } from '../../types'
import { FC } from 'react'

const ProductCard: FC<TProduct> = (product) => {
	return (
		<Link href={`/products/${product.id}`} shallow={true}>
			<a>
				<div
					className={s.product__card}
					style={{
						backgroundImage: 'url(' + `${product.main_image.src}` + ')',
					}}
				>
					{/*<div className={s.product__card_brandImg}>*/}
					{/*  <Image src={prod.prod.scrBrand} alt="brand" width={45} height={45} />*/}
					{/*</div>*/}
					<h3 className={s.product__card_title}>
						<span>{product.code}</span>
						{product.title}
					</h3>
					<div className={s.product__card_price}>
						{product.price}
						<span>
							<Image
								src={'/static/images/gallery/r.png'}
								alt="image"
								width={7}
								height={12}
							/>
						</span>
					</div>
				</div>
			</a>
		</Link>
	)
}

export default ProductCard

import Link from 'next/link'
import s from './product-card.module.scss'
import Image from 'next/image'


const ProductCard = ({id, main_image, code, title, price}) => {
	return (
		<Link href={`/products/${id}`} shallow={true}>
			<a>
				<div
					className={s.product__card}
					style={{
						backgroundImage: 'url(' + `${main_image?.src}` + ')',
					}}
				>
					{/*<div className={s.product__card_brandImg}>*/}
					{/*  <Image src={prod.prod.scrBrand} alt="brand" width={45} height={45} />*/}
					{/*</div>*/}
					<h3 className={s.product__card_title}>
						<span>{code}</span>
						{title}
					</h3>
					<div className={s.product__card_price}>
						{price}
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

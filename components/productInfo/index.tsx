import { FC, useEffect, useState } from 'react'
import { TSingleProduct } from '../../pages/products/[id]'
import s from '../../pages/products/product-page.module.scss'
import Link from 'next/link'

const ProductInfo: FC<TSingleProduct> = ({ product }) => {
	const [colors, setColors] = useState([])
	const [size, setSize] = useState('')

	useEffect(() => {
		let allColors = []
		{
			let activeColor = {
				id: product.id,
				color: product.color
			}
			allColors.push(activeColor)
			for (let item in product.related_posts) {
				let newColor = {
					id: product.related_posts[item].id,
					color: product.related_posts[item].color
				}
				allColors.push(newColor)
			}
		}
		allColors.sort((a, b) => a.id > b.id ? 1 : -1)
		setColors(allColors)
	}, [])
	const handleSizes = (event) => {
		event.preventDefault()
		setSize(event.target.value)
	}

	function addToCard(event) {
		event.preventDefault()
		let myProduct = {
			brands: product.brands,
			title: product.title,
			code: product.code,
			id: product.id,
			image: product.main_image.src,
			size: size,
			price: product.price
		}
		if (localStorage.getItem('product') != null){
			let products = JSON.parse(localStorage.getItem('product'))
			products.push(myProduct)
			localStorage.setItem('product', JSON.stringify(products))
		} else {
			let products = [];
			products.push(myProduct)
			localStorage.setItem('product', JSON.stringify(products))
		}
	}


	return (
		<form className={s.card__info}>
			<h1 className={s.card__title}>
				{product.code} <b>{product.title}</b>
			</h1>
			<p className={s.card__description}>
				{product.description}
			</p>
			<div className={s.card__popupslink}>
				<button>Материалы и уход</button>
				<button>Руководство по размерам</button>
			</div>
			<h2 className={s.card__colorTitle}>
				Доступные цвета
			</h2>
			<div className={s.card__colors}>
				{
					colors.length > 0 ?
						colors.map(item => {
							return (
								<Link href={`/products/${item.id}`} key={item.id}>
									<a
										className={[s.card__colorsLink, item.id === product.id ? s.card__colorsLinkActive : null].join(' ')}
										style={{
											background: item.color
										}}
									></a>
								</Link>
							)
						})
						: 'one color'
				}
			</div>
			<h2 className={s.card__sizesTitle}>
				Доступные размеры
			</h2>
			<div className={s.card__sizes}>
				{
					product.sizes.length > 0 ?
						product.sizes.map((item, index) => {
							return (
								<label className={[s.card__sizesLabel, size === item ? s.card__sizesLabelActive : null].join(' ')}
											 key={index}>
									{item}
									<input className={s.card__sizesRadio} onClick={handleSizes} type="radio" name="sizes" value={item}/>
								</label>
							)
						})
						: 'One size'
				}
			</div>
			<h2 className={s.card__price}>
				<b>{product.price.toLocaleString()}</b> ₽
			</h2>
			<button className={s.card__button} onClick={addToCard}>
				КУПИТЬ
			</button>
		</form>
	)
}

export default ProductInfo
import { FC, Fragment, useEffect, useState } from 'react'
import CardItem from './components/cardItem'
import style from './cardLeft.module.scss'
import { TCartProduct, TProduct } from '../../types'

// @ts-ignore
const CardLeft: FC = ({ updateStatus }) => {
	const [products, setProducts] = useState<TCartProduct[]>([])

	useEffect(() => {
		const data = localStorage.getItem('product')
		if (data) {
			setProducts(JSON.parse(data))
		}
	}, [])

	function deleteItem(value: number) {
		products.splice(value, 1)
		localStorage.setItem('product', JSON.stringify(products))
		let newProducts = JSON.parse(localStorage.getItem('product'))
		setProducts(newProducts)
		updateStatus(1)
	}

	return (
		<section className={style.cardProduct}>
			<div className={style.cardProduct}>
				{products.length > 0 ? (
					products.map((product, index) => {
						product['index'] = index
						return (
							<Fragment key={product.id}>
								<CardItem {...product} deleteItem={deleteItem} />
							</Fragment>
						)
					})
				) : (
					<p>tovarov net</p>
				)}
			</div>
			<div className={style.cardProduct__total}>
				<p>Сумма заказа</p>
				<h3>
					<b>
						{products.length > 0
							? products.reduce((sum, n) => sum + +n.price, 0).toLocaleString()
							: null}
					</b>{' '}
					₽
				</h3>
			</div>
		</section>
	)
}

export default CardLeft

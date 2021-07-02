import { FC, Fragment } from 'react'
import CardItem from './components/cardItem'
import style from './cardLeft.module.scss'
import { TProducts } from '../../types'

const CardLeft: FC<TProducts> = ({ products }) => {
	return (
		<section className={style.cardProduct}>
			{products.map((product) => {
				return (
					<Fragment key={product.id}>
						<CardItem {...product} />
					</Fragment>
				)
			})}
			<div className={style.cardProduct__total}>
				<p>Сумма заказа</p>
				<h3>
					<b>
						{products.reduce((sum, n) => sum + +n.price, 0).toLocaleString()}
					</b>{' '}
					₽
				</h3>
			</div>
		</section>
	)
}

export default CardLeft

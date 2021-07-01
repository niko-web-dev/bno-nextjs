import { FC } from 'react'
import CardLeft from '../components/cardLeft'
import CardForm from '../components/cardForm'


const Card: FC<{}> = ({ products }) => {
	return (
		<>
			<main className="card">
				<div className="container">
					<div className="card__wrapper">
						<CardLeft products={products}> </CardLeft>
						<CardForm />
					</div>
				</div>
			</main>
		</>
	)
}

export async function getServerSideProps() {
	const res = await fetch(`http://wp.iqwik.ru/wp-json/wp/v2/products/`)
	const products = await res.json()

	return { props: { products } }
}

export default Card

import { FC, useEffect, useState } from 'react'
import CardLeft from '../components/cardLeft'
import CardForm from '../components/cardForm'


const Card: FC<{}> = ({}) => {
	const [status, setStatus] = useState(0);
	let content;
	useEffect(()=>{
		const data = JSON.parse(localStorage.getItem('product'))
		if(data.length > 0){
			setStatus(1)
		}
	},[])
	function updateStatus(value) {
		console.log(value)
		if (value === 1){
			const data = JSON.parse(localStorage.getItem('product'))
			if(data.length > 0){
				setStatus(1)
			} else  {
				setStatus(0)
			}
		} else {
			setStatus(2)
		}

	}
	return (
		<>
			<main className="card">
				<div className="container">
					<div className="card__wrapper">
						{status === 1 ? (
							<>
							<CardLeft updateStatus={updateStatus} />
							<CardForm updateStatus={updateStatus} />
							</>
						): status === 2 ?
							(<div>Спасибо за заказ</div>)
							: (<p>Корзина пуста</p>)}
					</div>
				</div>
			</main>
		</>
	)
}

export default Card

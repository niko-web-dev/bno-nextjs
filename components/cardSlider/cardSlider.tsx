import Pagination from '../pagination'
import { FC, useState } from 'react'
import s from './card-slider.module.scss'
import Image from 'next/image'

const CardSlider = ({ images }) => {
	const [slide, setSlide] = useState(1)

	return (
		<div className={s.card__slider}>
			<Pagination
				slide={slide}
				setSlide={setSlide}
				withCount={false}
				position="left"
			/>
			{images.map((img, index) => {
				return (
					<div key={index} className={s.card__slide}>
						<Image src={img.src} height={600} width={362} />
					</div>
				)
			})}
		</div>
	)
}

export default CardSlider

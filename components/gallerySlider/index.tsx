import { FC, Fragment, useRef } from 'react'
import s from './gallery.module.scss'
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Autoplay, Navigation]);

import { TProducts } from '../../types'
import ProductCard from '../../pages/products/productCard'
import Image from 'next/image'

const GallerySlider: FC<TProducts> = ({ products }) => {

	const navigationPrevRef = useRef(null)
	const navigationNextRef = useRef(null)

	return (
		<div className={s.__slider}>
			<div className="container">
				<h2 className={s.gallery__title}>новинки</h2>
				<div className={s.gallery__inner}>
					<Swiper
						navigation={{
							prevEl: navigationPrevRef.current,
							nextEl: navigationNextRef.current,
						}}
						onInit={(swiper) => {
							swiper.params.navigation.prevEl = navigationPrevRef.current;
							swiper.params.navigation.nextEl = navigationNextRef.current;
							swiper.navigation.init();
							swiper.navigation.update();
						}}
						slidesPerView={1}
						breakpoints={{
							640: {
								slidesPerView: 2,
							},
							1100: {
								slidesPerView: 3,
							},
						}}
						loopedSlides={3}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false
						}}
						loop={true}
						initialSlide={1}
					>
					{products.map((product) => {
						return (
							<SwiperSlide  key={product.id}>
								<ProductCard {...product} />
							</SwiperSlide>
						)
					})}
				</Swiper>
					<button ref={navigationPrevRef} className={s.gallery__pagination__prev}>
						<Image
							src="/static/images/slider/slide-arr.png"
							alt="brand"
							width={50}
							height={50}
						/>
					</button>
					<button ref={navigationNextRef} className={s.gallery__pagination__next}>
						<Image
							src="/static/images/slider/slide-arr.png"
							alt="brand"
							width={50}
							height={50}
						/>
					</button>
			</div>
				/
			</div>
		</div>
	)
}

export default GallerySlider

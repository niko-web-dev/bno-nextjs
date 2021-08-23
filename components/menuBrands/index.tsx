import { FC, useEffect, useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import s from './menuBrands.module.scss'

const MenuBrands: FC = (brand) => {
	const [brands, setBrands] = useState([])

	async function getMenuApi(endpoint) {
		const res = await fetch(
			`http://wp.brandneworder.ru/wp-json/wp/v2/${endpoint}/`
		)
		const result = await res.json()
		return result
	}

	getMenuApi('brands').then((res) => {
		setBrands(res)
	})

	return (
		<>
			<div className={s.wrapper}>
				{brands?.map((item) => {
					return (
						<Link href={{ pathname: '/products', query: { brand: item.slug }}} key={item.id} shallow={true}>
							<a className={s.wrapper__item}>
								<Image
									width={300}
									height={400}
									src={item?.logo_image?.src}
									alt={item.description}
									className={s.wrapper__image}
								/>
								<h2 >
										{item.title}
								</h2>
							</a>
						</Link>
					)
				})}
			</div>
		</>
	)
}

export default MenuBrands

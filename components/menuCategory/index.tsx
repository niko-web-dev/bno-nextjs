import { FC, useEffect, useState } from 'react'

import s from './menuCategory.module.scss'
import Link from 'next/link'



const MenuCategory: FC = (brand) => {
	const [categories, setCategories] = useState()

	async function getMenuApi(endpoint){
		const res = await fetch(`http://wp.brandneworder.ru/wp-json/wp/v2/${endpoint}/`)
		const result = await res.json();
		return result
	}

	useEffect(() => {
		getMenuApi('categories').then((res) => {
			let topCategory = [];
			let lowCategory = [];

			for (let item in res) {
				let newItem;
				newItem = res[item];

				if (newItem.parent_id === 0) {
					let myItem = {
						'id': newItem.id,
						'name': newItem.title,
						'subcategories': []
					}
					topCategory.push(myItem)
				} else {
					let myItem = {
						'id': newItem.id,
						'name': newItem.title,
						'parent_id': newItem.parent_id
					}
					lowCategory.push(myItem)
				}
			}

			lowCategory.map(item => {
				topCategory.map(itemTop => {
					if (item.parent_id === itemTop.id) {
						itemTop.subcategories.push(item)
					}
				})
			})

			// @ts-ignore
			setCategories(topCategory);
		})
	}, [])


	return (
		<>
			<div className={s.wrapper}>
				{
					categories?.map(item => {
						return (
							<div className={s.wrapper__item} key={item.id}>
								<h2 className={s.wrapper__title}>{item.name}</h2>
								<ul className={s.wrapper__list}>
									{
										item?.subcategories.map(item => {
											return (
												<li key={item.id} className={s.wrapper__item}>{item.name}</li>
											)
										})
									}
								</ul>
							</div>

						)
					})
				}
			</div>
		</>
	)
}

export default MenuCategory

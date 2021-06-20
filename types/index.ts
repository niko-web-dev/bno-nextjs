// @ts-ignore
import { ReactNode } from 'react'

export type TBtnProps = {
	setSlideAnim?: (boolean) => void
	title: string
	color: string
	link: string
}

export type IPropsIcons = {
	dir: 'row' | 'column'
	children: ReactNode
}

export type TCategories = {
	id: number
	name: string
	slug: string
	type: string
}
export type TGallery = {
	alt: string
	id: number
	src: string
}
export type TBrands = {
	id: number
	name: string
	slug: string
	type: string
}
export type TProduct = {
	brands: TBrands[]
	id: number
	categories: TCategories[]
	code: string
	color: string
	description: string
	gallery: TGallery[]
	main_image: TGallery
	price: string
	slug: string
	related_posts: []
	title: string
}

export type TProducts = {
	products: TProduct[]
}

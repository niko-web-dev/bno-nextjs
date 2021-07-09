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
	related_posts?: TRelatedProd[]
	title: string
	sizes?: string[]
}
export type TRelatedProd = {
	id: string
	title: string
	color: string
	slug: string
}
export type TProducts = {
	products: TProduct[]
}

export type TCartProduct = {
	brands: TBrands[]
	code: string
	id: number
	image: string
	index: number
	price: string
	size: string
	title: string
	deleteItem: (number) => void
}

export type TUpdate = {
	updateStatus: (number) => void
}

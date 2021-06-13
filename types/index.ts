import {ReactNode} from "react"

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
  name: string
  slug: string
}
export type TGallery = {
  id: number
  alt: string
  src: string
}
export type TProduct = {
  id: number 
  slug: string 
  categories: TCategories
  brand: TCategories
  main_image: TGallery
  code: string
  price: string
  color: string
  gallery: TGallery
  description: string
  related_posts: []
  title: string 
}

export type TProducts = {
  products: TProduct[]
}


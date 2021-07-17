import Image from 'next/image'
import Link from 'next/link'
import { TProducts } from '../../types'
import { FC, useState } from 'react'
import s from './products.module.scss'
import CategoryFilter from '../../components/categoryFilter'
const Products: FC<TProducts> = ({ products }) => {
	products.map(item => {
		if (!item.brands[0]){
			item.brands[0] = {
				'slug': 'no-brand'
			}
		}
	})
	const [actualProduct, setActualProduct] = useState(products)
	const [filterActive, setFilterActive] = useState(false)

	function closeAside(check) {
		setFilterActive(check)
	}

	function updateFilter(filter: object) {
		setActualProduct(products)
		let newItems = [];
		let newItemsBrand = [];
		let newItemsType = [];
		let newItemsColor = [];
		let newItemsSize = [];
		let filteredObject = [];

		if (filter.brands.length > 0){
			for (let brand of filter.brands){
				products.map(item => {
					if (item.brands[0].slug === brand){
						console.log(brand)
						newItemsBrand.push(item)
					}
				})
				console.log(newItemsBrand)
			}

			filteredObject.push(newItemsBrand)
		}
		if (filter.type.length > 0){
			for (let type of filter.type){
				products.map(item => {
					if (item.categories[0].slug === type){
						newItemsType.push(item)
					}
				})
			}
			filteredObject.push(newItemsType)
		}
		if (filter.color.length > 0){
			for (let col of filter.color){
				products.map(item => {
					if (item.color === col){
						newItemsColor.push(item)
					}
				})
			}
			filteredObject.push(newItemsColor)
		}
		if (filter.size.length > 0){
			for (let sz of filter.size){
				products.map(item => {
					if (item.sizes.indexOf(sz) > -1){
						newItemsSize.push(item)
					}
				})
			}
			newItemsSize = [...new Set(newItemsSize)]
			filteredObject.push(newItemsSize)
		}

		if (filteredObject.flat(2).length < 1){
			setActualProduct(products)
		} else{
			newItems = filteredObject[0].filter(objFromFirstArr => filteredObject.every(arr => arr.some(obj => obj.id == objFromFirstArr.id)))
			setActualProduct(newItems.length > 0 ? newItems : null)
		}
	}


	return (
		<div className="container">
			<div className={s.gallery}>
				<button className={[s.gallery__button, filterActive ? s.gallery__buttonActive : null].join(' ')} onClick={(e) => {e.preventDefault(); setFilterActive(!filterActive)}}>
					<div className={s.gallery__buttonIcon}>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<g id="Icon/Outline/funnel">
								<path id="Mask" fillRule="evenodd" clipRule="evenodd" d="M10.877 17.457L12.903 18.99V14.437C12.903 14.271 12.945 14.108 13.023 13.962L17.323 6H6.64301L10.765 13.978C10.839 14.12 10.877 14.278 10.877 14.437V17.457ZM13.903 22C13.69 22 13.477 21.932 13.3 21.797L9.27401 18.752C9.02401 18.563 8.87702 18.268 8.87702 17.955V14.681L4.11201 5.459C3.95101 5.149 3.96401 4.778 4.14601 4.48C4.32701 4.182 4.65101 4 5.00001 4H19C19.352 4 19.678 4.185 19.859 4.488C20.039 4.79 20.047 5.165 19.88 5.475L14.903 14.69V21C14.903 21.379 14.689 21.726 14.349 21.895C14.208 21.965 14.055 22 13.903 22Z" fill="#231F20"/>
								<mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="4" width="17" height="18">
									<path id="Mask_2" fillRule="evenodd" clipRule="evenodd" d="M10.877 17.457L12.903 18.99V14.437C12.903 14.271 12.945 14.108 13.023 13.962L17.323 6H6.64301L10.765 13.978C10.839 14.12 10.877 14.278 10.877 14.437V17.457ZM13.903 22C13.69 22 13.477 21.932 13.3 21.797L9.27401 18.752C9.02401 18.563 8.87702 18.268 8.87702 17.955V14.681L4.11201 5.459C3.95101 5.149 3.96401 4.778 4.14601 4.48C4.32701 4.182 4.65101 4 5.00001 4H19C19.352 4 19.678 4.185 19.859 4.488C20.039 4.79 20.047 5.165 19.88 5.475L14.903 14.69V21C14.903 21.379 14.689 21.726 14.349 21.895C14.208 21.965 14.055 22 13.903 22Z" fill="white"/>
								</mask>
								<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="4" width="17" height="18">
									<path fillRule="evenodd" clipRule="evenodd" d="M13.9034 22C13.6894 22 13.4774 21.932 13.3004 21.797L9.27438 18.752C9.02438 18.563 8.87738 18.268 8.87738 17.955V14.681L4.11138 5.459C3.95138 5.149 3.96438 4.778 4.14638 4.48C4.32738 4.182 4.65138 4 5.00038 4H19.0004C19.3524 4 19.6784 4.185 19.8594 4.488C20.0394 4.79 20.0474 5.166 19.8804 5.475L14.9034 14.69V21C14.9034 21.379 14.6884 21.726 14.3484 21.896C14.2074 21.965 14.0554 22 13.9034 22Z" fill="white"/>
								</mask>
								<g mask={[filterActive ? 'url(#mask0)' : 'url(#mask1)'].join('')}>
									<g id="&#240;&#159;&#142;&#168; Color">
										<rect id="Base" width="24" height="24" fill="#0D1C2E"/>
									</g>
								</g>
							</g>
						</svg>
					</div>
					<h2 className={s.gallery__buttonText}>
						фильтр
					</h2>
				</button>
				<div className={s.gallery__wrapper}>
				{actualProduct !== null ? actualProduct?.map((product, index) => {
					return (
						<Link href={`/products/${product.id}`} key={index}>
							<a className={s.gallery__item}>
								<h2 className={s.gallery__itemTitle}>{product.code} <b>{product.title}</b></h2>
								<div className={s.gallery__itemInfo}>
									<Image
										className={s.gallery__itemImage}
										src={product.main_image.src}
										width={500}
										height={500}
										alt={product.title}
									/>
									<p className={s.gallery__itemPrice}><b>{Number(product.price).toLocaleString()}</b>{' '} ₽</p>
								</div>
								<div className={s.gallery__itemHelp}>
									<div className={s.gallery__itemSizes}>
										{
											product.sizes.map((item, index) => {
												return (
													<p key={index}>{item}</p>
												)
											})
										}
									</div>
									<div className={s.gallery__itemColor} style={{background: product.color}}></div>
								</div>
							</a>
						</Link>
					)
				}) : (<h2>Товары не найдены</h2>)}
				</div>
				<CategoryFilter products={products} closeAside={closeAside} updateFilter={updateFilter} filterActive={filterActive}/>
			</div>
		</div>
	)
}

// http://wp.brandneworder.ru/wp-json/wp/v2/products
export async function getServerSideProps() {
	const res = await fetch(`http://wp.brandneworder.ru/wp-json/wp/v2/products/`)
	const products = await res.json()

	return { props: { products } }
}

export default Products

import { FC, useState } from 'react'
import style from './categoryFilter.module.scss'
import { TProducts } from '../../types'

const CategoryFilter: FC = ( props ) => {
	let products = props.products
	const [brandOpen, setBrandOpen] = useState(false)
	const [typeOpen, setTypeOpen] = useState(false)
	const [colorOpen, setColorOpen] = useState(false)
	const [sizeOpen, setSizeOpen] = useState(false)
	const [filters, setFilters] = useState(
		{
			brands: [],
			color: [],
			size: [],
			type: []
		}
	)
	let brands = [],
		type = [],
		color = [],
		checkColor = [],
		size = [];

	let isMenuCategoryOpen = {
		brands: false,
		type: false,
		color: false,
		size: false
	}

	function hexToHSL(H) {
		// Convert hex to RGB first
		let r = 0, g = 0, b = 0;
		if (H.length == 4) {
			r = "0x" + H[1] + H[1];
			g = "0x" + H[2] + H[2];
			b = "0x" + H[3] + H[3];
		} else if (H.length == 7) {
			r = "0x" + H[1] + H[2];
			g = "0x" + H[3] + H[4];
			b = "0x" + H[5] + H[6];
		}
		// Then to HSL
		r /= 255;
		g /= 255;
		b /= 255;
		let cmin = Math.min(r,g,b),
			cmax = Math.max(r,g,b),
			delta = cmax - cmin,
			h = 0,
			s = 0,
			l = 0;

		if (delta == 0)
			h = 0;
		else if (cmax == r)
			h = ((g - b) / delta) % 6;
		else if (cmax == g)
			h = (b - r) / delta + 2;
		else
			h = (r - g) / delta + 4;

		h = Math.round(h * 60);

		if (h < 0)
			h += 360;

		l = (cmax + cmin) / 2;
		s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
		s = +(s * 100).toFixed(1);
		l = +(l * 100).toFixed(1);

		return {h:h, s:s, l:l}
	}
	function colorName(hsl) {
		var l = Math.floor(hsl.l), s = Math.floor(hsl.s), h = Math.floor(hsl.h);
		if (s <= 10 && l >= 90) {
			return ("Белый")
		} else if ((s <= 10 && l <= 70) || s === 0) {
			return ("Серый")
		} else if (l <= 15) {
			return ("Черный")
		} else if ((h >= 0 && h <= 15) || h >= 346) {
			return ("Красный");
		} else if (h >= 16 && h <= 35) {
			if (s < 90) {
				return ("Коричневый");
			} else {
				return ("Оранжевый");
			}
		} else if (h >= 36 && h <= 54) {
			if (s < 90) {
				return ("коричневый");
			} else {
				return ("Желтый");
			}
		} else if (h >= 55 && h <= 165) {
			return ("Зеленый");
		} else if (h >= 166 && h <= 260) {
			return ("Синий")
		} else if (h >= 261 && h <= 290) {
			return ("Фиолетовый")
		} else if (h >= 291 && h <= 345) {
			return ("Розовый")
		}
	}
	products?.map((product) => {
		checkColor.push(product.color);
		brands.push({
			'name': product?.brands[0]?.name ? product?.brands[0]?.name : 'no brand',
			'slug': product?.brands[0]?.slug ? product?.brands[0]?.slug : 'no-brand'
		})
		type.push({
			'name': product.categories[0].name,
			'slug': product.categories[0].slug
		})
		product.sizes.map(item => {
			size.push(
				{
					'name': item,
					'slug': item
				}
			)
		})
	})
	checkColor = [...new Set(checkColor)]
	checkColor.map(item => {
		let hsl = hexToHSL(item);
		let name = colorName(hsl);

		color.push({
			'name': name,
			'slug': item
		})
	})
	size = size.filter((v,i,a)=>a.findIndex(t=>(t.slug === v.slug && t.name===v.name))===i);
	type = type.filter((v,i,a)=>a.findIndex(t=>(t.slug === v.slug && t.name===v.name))===i);
	brands = brands.filter((v,i,a)=>a.findIndex(t=>(t.slug === v.slug && t.name===v.name))===i);

	function addFilter(name, categ) {
		let prevArray = filters[categ];
		if(prevArray.indexOf(name) > -1){
			prevArray.splice(prevArray.indexOf(name), 1)
			setFilters({
				...filters,
				[categ]: prevArray
			})
		} else {
			prevArray.push(name)
			setFilters({
				...filters,
				[categ]: prevArray
			})
		}
		props.updateFilter(filters)
	}

	function closeMenu(e) {
		e.preventDefault()
		props.closeAside(false)
	}



	return (
		<aside className={[style.filter, props.filterActive ? style.filterActive : null ].join(' ')}>
			<button className={style.filter__close} onClick={closeMenu}>
				<div className={style.filter__closeIcon}>
					<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M25.1187 1.39811L1.39678 25.1201C0.627801 25.889 0.302179 26.8185 0.671288 27.1876L0.743413 27.2598C1.11252 27.6289 2.04201 27.3033 2.81099 26.5343L26.533 2.81232C27.3019 2.04334 27.629 1.11238 27.2599 0.743267L27.1878 0.671142C26.8187 0.302032 25.8877 0.629128 25.1187 1.39811Z" fill="#231F20"/>
						<path fill-rule="evenodd" clip-rule="evenodd" d="M26.5328 25.1185L2.81084 1.39654C2.04186 0.627557 1.11237 0.301935 0.743262 0.671044L0.671137 0.743169C0.302028 1.11228 0.62765 2.04177 1.39663 2.81075L25.1186 26.5327C25.8876 27.3017 26.8185 27.6288 27.1876 27.2597L27.2598 27.1875C27.6289 26.8184 27.3018 25.8875 26.5328 25.1185Z" fill="#231F20"/>
					</svg>
				</div>
				<p className={style.filter__closeText}>
					закрыть
				</p>
			</button>
			<div className={style.filter__wrapper}>
				<div className={[style.filter__block, brandOpen ? style.filter__blockActive : null].join(' ')}>
					<button className={style.filter__blockButton} onClick={(e) => {e.preventDefault(); setBrandOpen(!brandOpen)}}>
						<div className={style.filter__blockButtonCheck}>
							+
						</div>
						<h2>
							БРЕНД
						</h2>
					</button>
					<div className={style.filter__blockItems}>
						{
							brands?.map((item, index) => {
								return (
									<button key={index} onClick={() => addFilter(item.slug, 'brands')} className={[style.filter__blockItem, filters?.brands?.indexOf(item.slug) > -1 ? style.filter__blockItemActive : null].join(' ')}>
										<div className={style.filter__blockItemCheck}>
											<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" clipRule="evenodd" d="M5.86338 11.9999C5.58738 11.9999 5.32338 11.8859 5.13438 11.6849L0.271382 6.50587C-0.107618 6.10387 -0.086618 5.47087 0.315382 5.09287C0.718382 4.71487 1.35138 4.73487 1.72838 5.13687L5.85338 9.52787L14.2614 0.325869C14.6354 -0.0831314 15.2674 -0.110131 15.6754 0.261869C16.0824 0.633869 16.1104 1.26687 15.7384 1.67387L6.60138 11.6739C6.41438 11.8799 6.14838 11.9979 5.87038 11.9999H5.86338Z" fill="#231F20"/>
											</svg>
										</div>
										<h2>
											{item.name}
										</h2>
									</button>
								)
							})
						}
					</div>
				</div>
				<div className={[style.filter__block, typeOpen ? style.filter__blockActive : null].join(' ')}>
					<button className={style.filter__blockButton} onClick={(e) => {e.preventDefault(); setTypeOpen(!typeOpen)}}>
						<div className={style.filter__blockButtonCheck}>
							+
						</div>
						<h2>
							ТИП ОДЕЖДЫ
						</h2>
					</button>
					<div className={style.filter__blockItems}>
						{
							type?.map((item, index) => {
								return (
									<button key={index} onClick={() => addFilter(item.slug, 'type')} className={[style.filter__blockItem, filters?.type?.indexOf(item.slug) > -1 ? style.filter__blockItemActive : null].join(' ')}>
										<div className={style.filter__blockItemCheck}>
											<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" clipRule="evenodd" d="M5.86338 11.9999C5.58738 11.9999 5.32338 11.8859 5.13438 11.6849L0.271382 6.50587C-0.107618 6.10387 -0.086618 5.47087 0.315382 5.09287C0.718382 4.71487 1.35138 4.73487 1.72838 5.13687L5.85338 9.52787L14.2614 0.325869C14.6354 -0.0831314 15.2674 -0.110131 15.6754 0.261869C16.0824 0.633869 16.1104 1.26687 15.7384 1.67387L6.60138 11.6739C6.41438 11.8799 6.14838 11.9979 5.87038 11.9999H5.86338Z" fill="#231F20"/>
											</svg>
										</div>
										<h2>
											{item.name}
										</h2>
									</button>
								)
							})
						}
					</div>
				</div>
				<div className={[style.filter__block, colorOpen ? style.filter__blockActive : null].join(' ')}>
					<button className={style.filter__blockButton} onClick={(e) => {e.preventDefault(); setColorOpen(!colorOpen)}}>
						<div className={style.filter__blockButtonCheck}>
							+
						</div>
						<h2>
							ЦВЕТ
						</h2>
					</button>
					<div className={style.filter__blockItems}>
						{
							color?.map((item, index) => {
								return (
									<button key={index} onClick={() => addFilter(item.slug, 'color')} className={[style.filter__blockItem, filters?.color?.indexOf(item.slug) > -1 ? style.filter__blockItemActive : null].join(' ')}>
										<div className={style.filter__blockItemCheck}>
											<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" clipRule="evenodd" d="M5.86338 11.9999C5.58738 11.9999 5.32338 11.8859 5.13438 11.6849L0.271382 6.50587C-0.107618 6.10387 -0.086618 5.47087 0.315382 5.09287C0.718382 4.71487 1.35138 4.73487 1.72838 5.13687L5.85338 9.52787L14.2614 0.325869C14.6354 -0.0831314 15.2674 -0.110131 15.6754 0.261869C16.0824 0.633869 16.1104 1.26687 15.7384 1.67387L6.60138 11.6739C6.41438 11.8799 6.14838 11.9979 5.87038 11.9999H5.86338Z" fill="#231F20"/>
											</svg>
										</div>
										<h2>
											{item.name}
										</h2>
									</button>
								)
							})
						}
					</div>
				</div>
				<div className={[style.filter__block, sizeOpen ? style.filter__blockActive : null].join(' ')}>
					<button className={style.filter__blockButton} onClick={(e) => {e.preventDefault(); setSizeOpen(!sizeOpen)}}>
						<div className={style.filter__blockButtonCheck}>
							+
						</div>
						<h2>
							РАЗМЕР
						</h2>
					</button>
					<div className={style.filter__blockItems}>
						{
							size?.map((item, index) => {
								return (
									<button key={index} onClick={() => addFilter(item.slug, 'size')} className={[style.filter__blockItem, filters?.size?.indexOf(item.slug) > -1 ? style.filter__blockItemActive : null].join(' ')}>
										<div className={style.filter__blockItemCheck}>
											<svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path fillRule="evenodd" clipRule="evenodd" d="M5.86338 11.9999C5.58738 11.9999 5.32338 11.8859 5.13438 11.6849L0.271382 6.50587C-0.107618 6.10387 -0.086618 5.47087 0.315382 5.09287C0.718382 4.71487 1.35138 4.73487 1.72838 5.13687L5.85338 9.52787L14.2614 0.325869C14.6354 -0.0831314 15.2674 -0.110131 15.6754 0.261869C16.0824 0.633869 16.1104 1.26687 15.7384 1.67387L6.60138 11.6739C6.41438 11.8799 6.14838 11.9979 5.87038 11.9999H5.86338Z" fill="#231F20"/>
											</svg>
										</div>
										<h2>
											{item.name}
										</h2>
									</button>
								)
							})
						}
					</div>
				</div>
			</div>
		</aside>
	)
}

export default CategoryFilter

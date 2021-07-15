import Image from 'next/image'
import Link from 'next/link'
import { TProducts } from '../../types'
import { FC } from 'react'
import s from './products.module.scss'
const Products: FC<TProducts> = ({ products }) => {
	let brands = [],
			type = [],
			color = [],
			checkColor = [],
			size = [];

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
		console.log(product)
		checkColor.push(product.color);
		brands.push({
			'name': product.brands[0].name,
			'slug': product.brands[0].slug
		})
		type.push({
			'name': product.categories[0].name,
			'slug': product.categories[0].slug
		})
		product.sizes.map(item => {
			size.push(item)
		})
	})

	checkColor = [...new Set(checkColor)]
	checkColor.map(item => {
		let hsl = hexToHSL(item);
		let name = colorName(hsl);

		color.push({
			'name': name,
			'color': item
		})
	})
	console.log(color)
	size = [...new Set(size)];
	console.log(size)
	console.log(type)
	type = type.filter((v,i,a)=>a.findIndex(t=>(t.slug === v.slug && t.name===v.name))===i);
	console.log(type)
	console.log(brands)
	brands = brands.filter((v,i,a)=>a.findIndex(t=>(t.slug === v.slug && t.name===v.name))===i);
	console.log(brands)


	return (
		<div className={s.gallery}>
			{products?.map((product, index) => {
				return (
					<Link href={`/products/${product.id}`} key={index}>
						<a>
							<h2>{product.title}</h2>
							<Image
								src={product.main_image.src}
								width={500}
								height={500}
								alt="brand"
							/>
						</a>
					</Link>
				)
			})}
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

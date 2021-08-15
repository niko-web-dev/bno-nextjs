import Link from 'next/link'
import s from './products.module.scss'
import Image from 'next/image'


const ProductCard = ({id, main_image, code, title, price, color, sizes, index}) => {
	return (
		<Link href={`/products/${id}`} key={index}>
									<a className={s.gallery__item}>
										<h2 className={s.gallery__itemTitle}>
											{code} <b>{title}</b>
										</h2>
										<div className={s.gallery__itemInfo}>
											<Image
												className={s.gallery__itemImage}
												src={main_image.src}
												width={500}
												height={500}
												alt={title}
											/>
											<p className={s.gallery__itemPrice}>
												<b>{Number(price).toLocaleString()}</b> ₽
											</p>
										</div>
										<div className={s.gallery__itemHelp}>
											<div className={s.gallery__itemSizes}>
												{sizes.map((item, index) => {
													return <p key={index}>{item}</p>
												})}
											</div>
											<div
												className={s.gallery__itemColor}
												style={{ background: color }}
											></div>
										</div>
									</a>
								</Link>
	)
}

export default ProductCard

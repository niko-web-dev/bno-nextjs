// import { FC, useContext, useState } from 'react'
// import Link from 'next/link'

import s from './popup.module.scss'


// import { motion } from 'framer-motion'
// import { contextMenu } from '../../context/contextMenu'
// import { animation } from '../../animation/animation'
// import MenuBrands from '../menuBrands'
// import MenuCategory from '../menuCategory'
// import CartIcon from '../icons/CardIcon'

const Popup = ({active, hidePopUp}) => {
	let products = JSON.parse(localStorage.getItem('product'))
	console.log(products.brands)
	return (

			<div className={s.popup + ' ' + `${active ? `${s.active}` : ''}`} >
				{
					products.map(({image, ...brands}, index) => <div className={s.productItem}>

						<div className={s.wrapImg}>
							<img src={image} alt=""/>
						</div>
						<div className={s.wrapText}>
							<h3>{brands.name}</h3>
						</div>
					</div>)
				}

				{
					active ? hidePopUp() : ''
				}
			</div>
	)
}
export default Popup;

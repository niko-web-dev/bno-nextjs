import { FC } from 'react'

import s from './breadcrumbs.module.scss'

interface ITags {
	brand: string
	types: string[]
}
const Index: FC<ITags> = ({ brand, types }) => {
	return (
		<div className={s.breadcrumbs}>
			<h3>{brand}</h3>
			<ul>
				{types.map((type, index) => {
					return <li key={index}>{type}</li>
				})}
			</ul>
		</div>
	)
}

export default Index

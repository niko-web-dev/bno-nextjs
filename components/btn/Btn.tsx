import { FC } from 'react'
import s from './btn.module.scss'
import { TBtnProps } from '../../types'
import { useRouter } from 'next/router'

const Btn: FC<TBtnProps> = ({ setSlideAnim, color, title, link }) => {
	const router = useRouter()

	return (
		<button
			className={s.btn}
			style={{
				border: color === 'black' ? '2px solid black' : '2px solid white',
			}}
			onMouseOver={() => {
				setSlideAnim && setSlideAnim(true)
			}}
			onMouseOut={() => {
				setSlideAnim && setSlideAnim(false)
			}}
			onClick={() => router.push(link)}
		>
			<h3 style={{ color: color === 'black' ? 'black' : 'white' }}>{title}</h3>
		</button>
	)
}

export default Btn

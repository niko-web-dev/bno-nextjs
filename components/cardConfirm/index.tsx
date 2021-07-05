import { FC } from 'react'
import style from './cardConfirm.module.scss'
import Link from 'next/link'

const CardConfirm: FC<{}> = ({}) => {
	return (
		<>
			<main className={style.cardConfirm}>
				<div className={style.cardConfirm__image}>
					<svg
						width="94"
						height="94"
						viewBox="0 0 94 94"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g id="Icon/Outline/all-done">
							<path
								id="Mask"
								fillRule="evenodd"
								clipRule="evenodd"
								d="M65.0806 24.3338C63.3808 22.9943 60.9211 23.2998 59.5855 25.0036L31.9535 60.2849L18.719 43.8466C17.356 42.1664 14.8964 41.8922 13.2122 43.2513C11.5241 44.6104 11.2617 47.0779 12.613 48.7581L28.9415 69.0387C29.6896 69.963 30.8098 70.4996 31.9965 70.4996H32.024C33.2146 70.4917 34.3426 69.9395 35.079 68.9956L65.7504 29.8289C67.086 28.1291 66.7883 25.6655 65.0806 24.3338ZM84.6634 24.3338C82.9596 22.9943 80.5039 23.2998 79.1683 25.0036L51.5362 60.2849L49.1705 57.3513L44.216 63.6846L48.5243 69.0387C49.2724 69.963 50.3925 70.4996 51.5793 70.4996H51.6067C52.7974 70.4917 53.9254 69.9395 54.6617 68.9956L85.3331 29.8289C86.6687 28.1291 86.371 25.6655 84.6634 24.3338ZM39.0886 44.8236L34.1262 51.1529L32.1992 48.7598C30.844 47.0757 31.1064 44.6082 32.7945 43.2491C34.4826 41.8939 36.9462 42.1642 38.3013 43.8483L39.0886 44.8236Z"
								fill="#231F20"
							/>
							<mask
								id="mask0"
								mask-type="alpha"
								maskUnits="userSpaceOnUse"
								x="11"
								y="23"
								width="76"
								height="48"
							>
								<path
									id="Mask_2"
									fillRule="evenodd"
									clipRule="evenodd"
									d="M65.0806 24.3338C63.3808 22.9943 60.9211 23.2998 59.5855 25.0036L31.9535 60.2849L18.719 43.8466C17.356 42.1664 14.8964 41.8922 13.2122 43.2513C11.5241 44.6104 11.2617 47.0779 12.613 48.7581L28.9415 69.0387C29.6896 69.963 30.8098 70.4996 31.9965 70.4996H32.024C33.2146 70.4917 34.3426 69.9395 35.079 68.9956L65.7504 29.8289C67.086 28.1291 66.7883 25.6655 65.0806 24.3338ZM84.6634 24.3338C82.9596 22.9943 80.5039 23.2998 79.1683 25.0036L51.5362 60.2849L49.1705 57.3513L44.216 63.6846L48.5243 69.0387C49.2724 69.963 50.3925 70.4996 51.5793 70.4996H51.6067C52.7974 70.4917 53.9254 69.9395 54.6617 68.9956L85.3331 29.8289C86.6687 28.1291 86.371 25.6655 84.6634 24.3338ZM39.0886 44.8236L34.1262 51.1529L32.1992 48.7598C30.844 47.0757 31.1064 44.6082 32.7945 43.2491C34.4826 41.8939 36.9462 42.1642 38.3013 43.8483L39.0886 44.8236Z"
									fill="white"
								/>
							</mask>
							<g mask="url(#mask0)">
								<g id="&#240;&#159;&#142;&#168; Color">
									<rect id="Base" width="94" height="94" fill="#231F20" />
								</g>
							</g>
						</g>
					</svg>
				</div>
				<h2 className={style.cardConfirm__title}>ВАШ ЗАКАЗ принят</h2>
				<p className={style.cardConfirm__text}>THANK YOU FOR YOUR ORDER</p>
			</main>
		</>
	)
}

export default CardConfirm

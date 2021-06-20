import { FC } from 'react'
import Image from 'next/image'

const CartIcon: FC = () => {
	return (
		<div className="header__card">
			<Image
				src="/static/images/shopping-cart.png"
				alt="brand"
				width={22}
				height={22}
			/>

			<style jsx>
				{`
					.header__card {
						margin-left: 35px;
						padding-right: 45px;
					}
				`}
			</style>
		</div>
	)
}

export default CartIcon

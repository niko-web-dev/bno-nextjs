import { FC, useContext } from 'react'
import { contextMenu } from '../../context/contextMenu'
import Image from 'next/image'

const MenuBtn: FC = () => {
	const [toggleMenu, setToggleMenu] = useContext(contextMenu)
	console.log(toggleMenu);

	function handleMenu() {
		setToggleMenu(!toggleMenu)
	}

	return (
		<>
			<Image
				width={50}
				height={50}
				className="menu_img"
				src="/static/images/menu.png"
				alt="menu"
				onClick={handleMenu}
			/>

			<style jsx>{`
				.menu_img {
					cursor: pointer;
				}
			`}</style>
		</>
	)
}

export default MenuBtn

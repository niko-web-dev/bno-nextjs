import s from './header.module.scss'

import MenuBtn from '../menuBtn'
import Logo from '../logo/logo'
import Icons from '../icons'
import SearchIcon from '../icons/searchIcon'
import CardIcon from '../icons/CardIcon'

const Header = () => {
	return (
		<div className={s.header}>
			<div className="container">
				<div className={s.header__menu}>
					<MenuBtn />
					<Logo color="black" />
					<Icons dir="row">
						<SearchIcon />
						<CardIcon />
					</Icons>
				</div>
			</div>
		</div>
	)
}

export default Header

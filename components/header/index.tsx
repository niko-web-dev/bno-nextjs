import {FC, useState} from 'react'

import s from './header.module.scss'

import MenuBtn from '../menuBtn'
import Logo from '../logo/logo'
import Icons from '../icons'
import SearchIcon from '../icons/searchIcon'
import CartIcon from '../icons/cartIcon'

import {variantMenu} from "../../types"

const Header: FC<variantMenu> = (variantMenu) => {

  const [variantsMenu] = useState<variantMenu>(variantMenu)
  return (
    <header className={s.header}>
      <div className="container">
        <div className={s.header__menu}>
          <MenuBtn />
          <Logo color="black"/>
          {variantMenu.variantMenu === "main"
            && <Icons dir="row">
                  <SearchIcon />
                  <CartIcon />
             </Icons>
          }
        </div>
      </div>
    </header>
  )
}

export default Header

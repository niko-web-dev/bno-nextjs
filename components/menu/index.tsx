import { FC, useContext } from 'react'
import Link from 'next/link'

import s from './menu.module.scss'

import { motion } from 'framer-motion'
import { contextMenu } from '../../context/contextMenu'
import {animation} from "../../animation/animation"

const Menu: FC = () => {
  const [toggleMenu, setToggleMenu] = useContext(contextMenu)

  return (
    <>
      <motion.div
        className={s.menu__wrap}
        initial="hidden"
        animate={toggleMenu ? 'visible' : ''}
        variants={animation.animationMenu}
        transition={{ duration: 0.4 }}
      >
        <div className={s.menu} onClick={() => setToggleMenu(!toggleMenu)}>
          menu menu
          <Link href="/Card">
            <a>карзина</a>
          </Link>
        </div>
      </motion.div>

      <style jsx>{``}</style>
    </>
  )
}

export default Menu

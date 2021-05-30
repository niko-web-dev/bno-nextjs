import { FC, useContext } from 'react';
import { motion } from 'framer-motion';
import { contextApp } from '../../context/contextApp';
import Link from 'next/link';
// import Auth from '../auth'

import s from './menu.module.scss';

const animationMenu = {
  visible: { y: '0' },
  hidden: { y: '-100%' },
};

const Menu: FC = () => {
  const [toggleMenu, setToggleMenu] = useContext(contextApp);

  return (
    <>
      <motion.div
        className={s.menu__wrap}
        initial="hidden"
        animate={toggleMenu ? 'visible' : ''}
        variants={animationMenu}
        transition={{ duration: 0.4 }}
      >
        <div className={s.menu} onClick={() => setToggleMenu((prevState) => !prevState)}>
          menu menu
          <Link href="/Card">
            <a>карзина</a>
          </Link>
        </div>
        {/* <Auth />*/}
      </motion.div>

      <style jsx>{``}</style>
    </>
  );
};

export default Menu;

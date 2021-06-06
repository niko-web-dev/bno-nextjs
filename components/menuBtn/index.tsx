import{ FC, useContext } from 'react'
import { contextMenu } from '../../context/contextMenu'

const MenuBtn: FC = () => {
  const [toggleMenu, setToggleMenu] = useContext(contextMenu)

  function handleMenu() {
    setToggleMenu(!toggleMenu)
  }

  return (
    <>
      <img className="menu_img" src="/static/images/menu.png" alt="menu" onClick={handleMenu} />

      <style jsx>{`
        .menu_img {
          cursor: pointer
        }
      `}</style>
    </>
  )
}

export default MenuBtn

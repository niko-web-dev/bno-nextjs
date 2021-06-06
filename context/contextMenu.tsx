import { createContext, FC, useState } from 'react'

export const contextMenu = createContext([])

const { Provider } = contextMenu;
export const MenuProvider: FC = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return <Provider value={[toggleMenu, setToggleMenu]}>{children}</Provider>
}

import { createContext, FC, useState } from 'react';

export const contextApp = createContext([]);

const { Provider } = contextApp;
export const AppProvider: FC = ({ children }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return <Provider value={[toggleMenu, setToggleMenu]}>{children}</Provider>;
};

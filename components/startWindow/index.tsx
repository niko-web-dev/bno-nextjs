import { FC } from 'react'

import MainSlider from '../mainSlider'
import Menu from '../menu'
import Header from '../header'

const StartWindow: FC = () => {
  return (
    <>
      <Menu />
      <Header variantMenu={"main"}/>
      <MainSlider />
    </>
  )
}

export default StartWindow

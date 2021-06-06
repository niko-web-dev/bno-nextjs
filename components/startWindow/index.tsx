import {FC} from 'react'

import MainSlider from '../mainSlider'
import Menu from '../menu'
import Header from '../header'
import {MenuProvider} from "../../context/contextMenu"
import {AnimationProvider} from "../../context/contextAnimation"

const StartWindow: FC = () => {
    return (
        <AnimationProvider>
            <MenuProvider>
              <Menu/>
              <Header variantMenu="main"/>
              <MainSlider/>
            </MenuProvider>
      </AnimationProvider>
    )
}

export default StartWindow

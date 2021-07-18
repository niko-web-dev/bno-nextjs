import { FC } from 'react'

import MainSlider from '../mainSlider'
import Header from '../header'
import { MenuProvider } from '../../context/contextMenu'
import { AnimationProvider } from '../../context/contextAnimation'

const StartWindow: FC = () => {
	return (
		<AnimationProvider>
			<Header />
			<MainSlider />
		</AnimationProvider>
	)
}

export default StartWindow

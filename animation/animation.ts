export const animation = {
	page: {
		pageInitial: {
			opacity: 0,
		},
		pageAnimate: {
			opacity: 1,
			// transition: {
			// 	delay: 0.1,
			// },
		},
	},

	opacityAnim: {
		show: {
			opacity: 1,
		},
		hidden: {
			opacity: 0,
		},
	},

	scaleAnim: {
		scale: {
			scale: 2.5,
		},
		norm: {
			scale: 1,
		},
	},

	displayNoneAnim: {
		show: {
			opacity: 1,
			display: 'flex',
		},
		hidden: {
			opacity: 0,
			display: 'none',
		},
	},

	animationMenu: {
		visible: { y: '0' },
		hidden: { y: '-100%' },
	},

	cardSlideAnim: {
		enter: (direction: number) => {
			return {
				x: direction > 0 ? 1000 : -1000,
				opacity: 0,
			}
		},
		center: {
			zIndex: 1,
			x: 0,
			opacity: 1,
		},
		exit: (direction: number) => {
			return {
				zIndex: 0,
				x: direction < 0 ? 1000 : -1000,
				opacity: 0,
			}
		},
	},
}

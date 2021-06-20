// interface TchangeSlideCount {
//     slide: number
//     comand: string
//     slideCount: number
// }

export default function changeSlideCount(
	slide: number,
	comand: string,
	slideCount: number
) {
	if (comand === 'next') {
		if (slide < slideCount) return slide + 1
		if (slide === slideCount) return 1
	}
	if (comand === 'prev') {
		if (slide > 1) return slide - 1
		if (slide === 1) return slideCount
	}
}

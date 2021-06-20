import { FC } from 'react'
import Image from 'next/image'

const SearchIcon: FC = () => {
	return (
		<>
			<Image
				src="/static/images/search.png"
				alt="brand"
				width={22}
				height={22}
				className="search__icon"
			/>

			<style jsx>
				{`
					.search__icon {
						margin-right: 35px;
						padding-right: 45px;
					}
				`}
			</style>
		</>
	)
}

export default SearchIcon

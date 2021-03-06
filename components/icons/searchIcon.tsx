import { FC, useState } from 'react'
import Image from 'next/image'
import s from '../cardForm/cardForm.module.scss'

const SearchIcon: FC = () => {
	const [searchInput, setSearchInput] = useState('')
	const [viewInput, setvIewInput] = useState(false)

	const changeSearchInput = function (event) {
		setSearchInput(event.target.value)
	}

	const searchSubmit =  (e) => {
		event.preventDefault()
		fetch(`http://wp.brandneworder.ru/wp-json/wp/v2/products?search=${searchInput}`)
			.then(function (response) {
			console.log('response', response)
		})
	}

	const inputDisplay= viewInput === false ? '0' :  "1"

	return (
		<div >
			<Image
				src="/static/images/search.png"
				alt="brand"
				width={22}
				height={22}
				className="search__icon"
				onClick={() => setvIewInput(!viewInput)}
			/>
			<input
				style={{opacity: inputDisplay}}
				className={s.cardForm__input +  ' ' + s.cardForm__input_search}
				id="searchInput"
				onChange={changeSearchInput}
				value={searchInput}
				required={true}
				type="text"

			/>
			<button type='submit' onClick={e => searchSubmit(e)}> go </button>
			<style jsx>
				{`
					.search__icon {
						margin-right: 35px;
						padding-right: 45px;
					}
}
				`}
			</style>
		</div>
	)
}

export default SearchIcon

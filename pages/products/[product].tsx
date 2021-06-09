import {useRouter} from 'next/router'
import Menu from "../../components/menu"
import Header from "../../components/header"
import Index from "../../components/Tags"
import CardSlider from "../../components/cardSlider/cardSlider"

import s from './product-page.module.scss'

const ProductPage = ({data}) => {
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault()
        router.back()
    }
// console.log("product", data.gallery)
    return (
        <div>
            <Menu/>
            <Header/>

                <div className={s.card__wrap}>

                    <div className="container" style={{display: 'flex'}}>
                        <div className={s.card__content}>

                            <Index brand={'STONE ISLAND'} types={['Верхняя одежда', 'Куртки']}/>
                            <CardSlider images={data.gallery}/>
                         </div>

                    <div className={s.card__info}>
                        dsad
                    </div>
                    </div>


              </div>



        </div>
    )
}

export async function getServerSideProps(id) {
    // Fetch data from external API
    const res = await fetch(`http://wp.iqwik.ru/wp-json/wp/v2/products/89`)
    const data = await res.json()
console.log(data)
    return { props: { data } }
}



export default ProductPage

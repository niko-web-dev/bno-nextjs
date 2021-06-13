import {useRouter} from 'next/router'
import Menu from "../../components/menu"
import Header from "../../components/header"
import Index from "../../components/Tags"
import CardSlider from "../../components/cardSlider/cardSlider"

import s from './product-page.module.scss'

const ProductPage = ({product}) => {

    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault()
        router.back()
    }

    return (
        <div>
            <Menu/>
            <Header/>

                <div className={s.card__wrap}>
                    <div className="container" style={{display: 'flex'}}>
                        <div className={s.card__content}>

                            <Index brand={'STONE ISLAND'} types={['Верхняя одежда', 'Куртки']}/>
                            <CardSlider images={product.gallery}/>
                         </div>

                    <div className={s.card__info}>
                        Инфо
                    </div>
                    </div>
              </div>
        </div>
    )
}

export async function getServerSideProps(ctx) {

    const {id} = ctx.query
    const res = await fetch(`http://wp.iqwik.ru/wp-json/wp/v2/products/${id}`)
    const product = await res.json()

    return { props: { product } }
}

export default ProductPage

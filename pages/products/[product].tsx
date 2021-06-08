import {useRouter} from 'next/router'
import Menu from "../../components/menu"
import Header from "../../components/header"
import Index from "../../components/Tags"
import CardSlider from "../../components/cardSlider/cardSlider"

import s from './product-page.module.scss'

const ProductPage = () => {
    const router = useRouter();
    const handleClick = (e) => {
        e.preventDefault()
        router.back()
    }
    const images =
        ['/static/images/gallery/1.png',
            '/static/images/gallery/2.png']

    return (
        <div>
            <Menu/>
            <Header/>


                <div className={s.card__wrap}>




                    <div className="container" style={{display: 'flex'}}>
                        <div className={s.card__content}>

                            <Index brand={'STONE ISLAND'} types={['Верхняя одежда', 'Куртки']}/>
                            <CardSlider images={images}/>
                         </div>


                    <div className={s.card__info}>
                        dsad
                    </div>
                    </div>


              </div>



        </div>
    )
}

export default ProductPage

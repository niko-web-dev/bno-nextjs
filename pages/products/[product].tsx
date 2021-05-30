import { useRouter } from 'next/router'
import Menu from "../../components/menu"
import Header from "../../components/header"
import Tags from "../../components/Tags/tags"
import CardSlider from "../../components/cardSlider/cardSlider";

const Product = () => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault()
    router.back()
  }

  return (
    <div>
      <Menu/>
        <Header variantMenu={"card"}/>
        <Tags brand={'STONE ISLAND'} types={['Верхняя одежда', 'Куртки']}/>
     <CardSlider images={
       ['public/static/images/gallery/1.png',
         'public/static/images/gallery/2.png',
         'public/static/images/gallery/3.png']
     }/>



    </div>
  )
}

export default Product

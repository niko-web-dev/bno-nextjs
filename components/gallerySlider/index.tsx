import { FC } from 'react'
import s from './gallery.module.scss'

import { TProduct } from '../../types'
import ProductCard from "../../pages/products/productCard"

const products: TProduct[] = [
  {
    id: 1,
    article: 'N02A3',
    title: 'EXTENDABLE  HAND GAITER',
    src: '/static/images/gallery/1.png',
    scrBrand: '/static/images/gallery/brand.png',
    price: '14 899',
    favorites: true,
  },
  {
    id: 2,
    article: '453S6',
    title: 'PLATED REFLECTIVE WITH MUSSOLA GOMMATA BLACK',
    src: '/static/images/gallery/2.png',
    scrBrand: '/static/images/gallery/brand.png',
    price: '14 899',
    favorites: true,
  },
  {
    id: 3,
    article: '453S6',
    title: 'PLATED REFLECTIVE WITH MUSSOLA GOMMATA BLACK ',
    src: '/static/images/gallery/3.png',
    scrBrand: '/static/images/gallery/brand.png',
    price: '179 000',
    favorites: true,
  },
];

const GallerySlider: FC = () => {
  return (
    <div className={s.__slider}>
      <div className="container">
        <h2 className={s.gallery__title}>новинки</h2>
        <div className={s.gallery__inner}>
          {products.map((prod, index) => {
            return (
                <ProductCard prod={prod} key={index}/>
            );
          })}
        </div>/
      </div>
      <style jsx>{`
        .gallery__slider {
        }
      `}</style>
    </div>
  );
};

export default GallerySlider;

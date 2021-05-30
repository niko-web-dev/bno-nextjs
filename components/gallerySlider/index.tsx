import { FC } from 'react';
import { TProduct } from '../../types';
// @ts-ignore
import s from './gallery.module.scss';
import Image from 'next/image';
import Link from 'next/link';

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
          {products.map((prod) => {
            return (
              <Link
                  key={prod.id}
                  href={`products/${prod.article}`}
              >
                <a>
                  <div
                    className={s.gallery__card}
                    style={{
                      backgroundImage: 'url(' + `${prod.src}` + ')',
                    }}
                  >
                    <div className={s.gallery__card_brandImg}>
                      <Image src={prod.scrBrand} alt="brand" width={45} height={45} />
                    </div>
                    <h3 className={s.gallery__card_title}>
                      <span>{prod.article}</span>
                      {prod.title}
                    </h3>
                    <div className={s.gallery__card_price}>
                      {prod.price}
                      <span>
                        <Image
                          src={'/static/images/gallery/r.png'}
                          alt="image"
                          width={7}
                          height={12}
                        />
                      </span>
                    </div>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        .gallery__slider {
        }
      `}</style>
    </div>
  );
};

export default GallerySlider;

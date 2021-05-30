import s from "./details.module.scss"
import { TDetailsCadrs } from '../../types'
import Image from "next/image"

const detailsCadrs: TDetailsCadrs[] = [
  {
    img: '/static/images/shield.png',
    title: 'гарантия',
    text: 'ВСЕ ТОВАРЫ НАШЕГО МАГАЗИНА ГАРАНТИРОВАННО ЯВЛЯЮТСЯ ОРИГИНАЛЬНОЙ ПРОДУКЦИЕЙ',
  },
  {
    img: '/static/images/shopping-cart.png',
    title: 'доставка',
    text: 'Ответственно доставляем ваши заказы ПО РОССИИ И СТРАНАМ БЛИЖНЕГО ЗАРУБЕЖЬЯ',
  },
  {
    img: '/static/images/sync.png',
    title: 'возврат',
    text: 'Мы оперативно реагируем на вопросы. Никаких шаблонных ответов и чат-ботов.',
  },
];

const Details = () => {
  return (
      <div className="container">
        <div className={s.details}>
            {detailsCadrs.map((detailsCadr, index) => {
              return (
                  <div className={s.details__card} key={index}>
                    <img className={s.details__card__icon} src={detailsCadr.img} alt={'shield'} />
                    <h2>{detailsCadr.title}</h2>
                    <p>{detailsCadr.text}</p>
                  </div>
              );
            })}

        </div>
        <div className={s.details__img}>
          <Image
              src={'/static/images/details-text.png'}
              alt="brand"
              width={1641}
              height={688} />
        </div>

    </div>
  );
};

export default Details;

import Link from "next/link";
import s from "./product-card.module.scss"
import Image from "next/image"

const ProductCard = (prod) => {

    return (

        <Link
                key={prod.prod.id}
                href={`products/${prod.prod.article}`}
            >
                <a>
                  <div
                      className={s.product__card}
                      style={{
                          backgroundImage: 'url(' + `${prod.prod.src}` + ')',
                      }}
                  >
                    <div className={s.product__card_brandImg}>
                      <Image src={prod.prod.scrBrand} alt="brand" width={45} height={45} />
                    </div>
                    <h3 className={s.product__card_title}>
                      <span>{prod.prod.article}</span>
                        {prod.prod.title}
                    </h3>
                    <div className={s.product__card_price}>
                      {prod.prod.price}
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
}

export default ProductCard

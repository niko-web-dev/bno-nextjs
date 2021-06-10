import Image from 'next/image'
import Link from 'next/link'

const Products = ({data}) => {
    return (
        <div>
            {data?.map((product, index) => {
                return (
                    <Link href={`/products/${product.id}`}  key={index}>
                      <a>
                          <h2>{product.title}</h2>
                          {/*<img src={product.main_image.src}/>*/}
                        <Image
                            src={product.main_image.src} width={500} height={500}
                            alt="brand"
                        />
                    </a>
                </Link>
                )
            })}
        </div>
    )
}

// http://wp.iqwik.ru/wp-json/wp/v2/products
export async function getServerSideProps() {
    const res = await fetch(`http://wp.iqwik.ru/wp-json/wp/v2/products/`)
    const data = await res.json()

    return { props: { data } }
}

export default Products

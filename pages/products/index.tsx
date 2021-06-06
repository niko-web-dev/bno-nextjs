import Image from 'next/image'
import Link from 'next/link'

const Products = ({data}) => {
    
    console.log("data", data)
    return (
        <div>
            hello

            {/*{data?.map((product, item) => {*/}

            {/*    <Link href='/hoodie-green' key={item.id}>*/}
            {/*          <a>*/}
            {/*              hello*/}
            {/*              <h2>{product.title}</h2>*/}
            {/*            <Image*/}
            {/*                src={product.main_image} width={500} height={500}*/}
            {/*                alt="brand"*/}
            {/*            />*/}
            {/*        </a>*/}
            {/*    </Link>*/}
            {/*})}*/}
        </div>
    )
}

// http://wp.iqwik.ru/wp-json/wp/v2/products
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(`http://wp.iqwik.ru/wp-json/wp/v2/products`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}

export default Products

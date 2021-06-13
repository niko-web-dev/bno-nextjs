import {FC} from 'react'
import Link from 'next/link'
import Image from 'next/image'

type TLogoProps = {
    color: string
}
const Logo: FC<TLogoProps> = ({color}) => {
    return (
        <>
          <Link href="/">
            <a>
              <Image className="header__logo"
                src={color === "black"
                ? "/static/images/logo.png"
                : "/static/images/white-logo.png"}
                alt="logo"
                width={100}
                height={100}
              />
            </a>
          </Link>
    </>
    )
}

export default Logo

import { FC } from 'react'
import Link from 'next/link'
import {TLogoProps} from "../../types"

const Logo: FC<TLogoProps> = ({color}) => {
  return (
    <>
      <Link href="/">
        <a>
          <img className="header__logo" src={color === "black"
              ? "/static/images/logo.png"
              : "/static/images/white-logo.png"}
               alt="logo" />
        </a>
      </Link>

      <style jsx>{`
        .logo {
          width: 100px;
          height: 100px;
        }
      `}</style>
    </>
  )
}

export default Logo

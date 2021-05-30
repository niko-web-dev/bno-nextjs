import {ReactNode} from "react";

export type TsetSlideAnim = {
  setSlideAnim: (boolean) => void;
};

export type TBtnProps = {
  setSlideAnim?: (boolean) => void
  title: string
  color: string
  link: string
}
export type TLogoProps = {
  color: string
}

export type IPropsIcons = {
  dir: 'row' | 'column';
  children: ReactNode;
}

export type TProduct = {
  id: number;
  article: string;
  title: string;
  // description: string
  src: string;
  scrBrand: string;
  price: string;
  size?: string[];
  favorites: boolean;
};

export type TDetailsCadrs = {
  img: string;
  title: string;
  text: string;
};


export type variantMenu = {
  variantMenu: "main" | "card"
}
// export interface IProducts {
//     product: IProduct
// }

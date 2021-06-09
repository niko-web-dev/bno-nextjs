import Pagination from "../pagination";
import {FC, useState} from "react";
import s from "./card-slider.module.scss"


const CardSlider = ({images}) => {
    const [slide, setSlide] = useState(1)
    // console.log("images", images)
    return (
        <div className={s.card__slider}>
            <Pagination slide={slide} setSlide={setSlide} withCount={false} position="left"/>
            {images.map((img, index) => {
console.log("img", img)
                return (
                    <div key={index} className={s.card__slide}>
                        <img src={img.src}/>
                         <h2>название</h2>
                        </div>
                    )
            })}


        </div>
    );
};

export default CardSlider

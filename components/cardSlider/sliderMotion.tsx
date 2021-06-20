import {FC, useEffect, useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {wrap} from 'popmotion'
import {animation} from '../../animation/animation'

const image = []

import s from './card-slider.module.scss'
import {TGallery} from "../../types";

const swipeConfidenceThreshold = 10000
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
}
export type TSinglePageGallery = {
    gallery:TGallery[]
}
export const SliderMotion:FC<TSinglePageGallery> = ({gallery}) => {
    const [[page, direction], setPage] = useState([0, 0])
    const [slideSrc, setSlideSrc] = useState([])
    useEffect(() => {

        const images = Object.values(gallery);
        images.forEach(img => {
            image.push(img.src)
            setSlideSrc(image)
        });

    }, [])

    const imageIndex = wrap(0, slideSrc.length, page)
    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection])
    }
    return (
        <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
            className={s.slide__image}
            key={page}
            src={slideSrc[imageIndex]}
            custom={direction}
            variants={animation.cardSlideAnim}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
                x: {type: 'spring', stiffness: 300, damping: 30},
                opacity: {duration: 0.2},
            }}
            drag="x"
            dragConstraints={{left: 0, right: 0}}
            dragElastic={1}
            onDragEnd={(e, {offset, velocity}) => {
                const swipe = swipePower(offset.x, velocity.x)

                if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                }
            }}
        >
        </motion.img>
      </AnimatePresence>
      {/*<div className="next" onClick={() => paginate(1)}>*/}
      {/*  {'‣'}*/}
      {/*</div>*/}
      {/*<div className="prev" onClick={() => paginate(-1)}>*/}
      {/*  {'‣'}*/}
      {/*</div>*/}
    </>
    )
}

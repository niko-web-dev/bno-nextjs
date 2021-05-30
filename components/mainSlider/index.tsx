import { FC, useState } from 'react'
import Image from 'next/image'

import s from './mainSlider.module.scss'
import { motion } from 'framer-motion'
import cn from 'classnames'
import Icons from '../icons'
import InstaIcon from '../icons/instagram'
import ShareIcon from '../icons/share'
import Btn from "../btn/Btn"

import {pageAnimation} from "../../animation/animation";
import changeSlideCount from "../../utils/utils"

const MainSlider: FC = () => {
  const [slide, setSlide] = useState(1)
  const [slideAnim, setSlideAnim] = useState(false)

  const slideCount = 2; // заменить на arr.length??

  return (
    <div className={s.mainSlider}>
      <div className="container">
        <div className={s.slider}>
          <motion.div
            // transition={{ ease: [0.17, 0.67, 0.53, 0.37] }}
            animate={slide === 1 ? 'show' : 'hidden'}
            variants={pageAnimation.displayNoneAnim}
            className={s.slide}
          >
            <div className={s.slide__info}>
              <Image
                src="/static/images/slider/one/brand-logo.png"
                alt="brand"
                width={100}
                height={100}
              />
              <h2>Stone island</h2>

              <p className={s.slide__text}>
                знаменитая на весь мир итальянская дизайн лаборатория, создающая премиум одежду с
                ипользованием хай-тек и милитари технологий с 1982.
              </p>
              <Btn setSlideAnim={setSlideAnim} title='каталог' color='black' link={'products'}/>
            </div>
            <div className={s.slide__img}>
              <div className={slideAnim ? `${s.slide__man} ${s.slide__man__anim}` : s.slide__man}>
                <Image src="/static/images/slider/one/man.png" width={302} height={762} />
              </div>
              <div
                className={
                  slideAnim
                    ? `${s.slide__text__imgL} ${s.slide__text__imgL__anim}`
                    : s.slide__text__imgL
                }
              >
                <span>stone</span>
              </div>
              <div
                className={
                  slideAnim
                    ? `${s.slide__text__imgR} ${s.slide__text__imgR__anim}`
                    : s.slide__text__imgR
                }
              >
                <span>i sland</span>
              </div>
              <div
                className={slideAnim ? `${s.slide__mash} ${s.slide__mash__anim}` : s.slide__mash}
              >
                <Image src="/static/images/slider/one/mash-1.jpg" width={1089} height={895} />
              </div>
            </div>
          </motion.div>

          <motion.div
            transition={{ ease: [0.17, 0.67, 0.53, 0.37] }}
            animate={slide === 2 ? 'show' : 'hidden'}
            variants={pageAnimation.displayNoneAnim}
            className={s.slide}
          >
            <div className={s.slide__info}>
              <div className={s.slide__brand}>
                <Image
                  src="/static/images/slider/two/brand-logo.png"
                  alt="brand"
                  width={100}
                  height={47}
                />
              </div>
              <h2>evisu</h2>

              <p className={s.slide__text}>
                кропотливая работа с трудоемкими методиками позволяют сохранить традиционное
                производство японского денима <br />с 1991 года
              </p>
             {/*<Btn  setSlideAnim={setSlideAnim} title='каталог' color='black'/>*/}
            </div>
            <div className={s.slide__img}>
              <div className={`${s.slide__man} ${s.slide__man_two}`}>
                <Image src="/static/images/slider/two/man.png" width={494} height={770} />
              </div>
              <div className={`${s.slide__text__imgL} ${s.slide__text__imgL_two}`}>
                <span>evisu</span>
              </div>
              <div className={`${s.slide__text__imgR} ${s.slide__text__imgR_two}`}>
                <span>evisu</span>
              </div>
              <div className={`${s.slide__mash} ${s.slide__mash_two}`}>
                <Image src="/static/images/slider/two/mash.png" width={904} height={875} />
              </div>
            </div>
          </motion.div>

          <div
            className={cn(s.slide__pagination, {
              [s.slide__pagination__border_one]: slide === 1 && !slideAnim,
              [s.slide__pagination__border_two]: slide === 2 && !slideAnim,
            })}
          >
            <motion.div
              transition={{ ease: [0.4, 0.4, 0.4, 0.4] }}
              animate={!slideAnim ? 'show' : 'hidden'}
              variants={pageAnimation.opasityAnim}
              onClick={() => setSlide(changeSlideCount(slide, 'next', slideCount))}
              className={s.slide__pagination__prev}
            >
              <Image src="/static/images/slider/slide-arr.png" alt="brand" width={50} height={50} />
            </motion.div>

            <div className={s.slide__pagination__count}>
              <motion.div
                // transition={{ ease: [0.4, 0.4, 0.4, 0.4] }}
                animate={!slideAnim ? 'norm' : 'scale'}
                variants={pageAnimation.scaleAnim}
              >
                <span> 0 {slide} </span>/
                <span className={s.slide__count__opacity}> 0 {slideCount} </span>
              </motion.div>
            </div>

            <motion.div
              transition={{ ease: [0.17, 0.67, 0.53, 0.37] }}
              animate={!slideAnim ? 'show' : 'hidden'}
              variants={pageAnimation.opasityAnim}
              onClick={() => setSlide(changeSlideCount(slide, 'next', slideCount))}
              className={s.slide__pagination__next}
            >
              <Image src="/static/images/slider/slide-arr.png" alt="brand" width={50} height={50} />
            </motion.div>
          </div>
          <div className={s.slide__icons}>
            <Icons dir="row">
              <InstaIcon />
              <ShareIcon />
            </Icons>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSlider;

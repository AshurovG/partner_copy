import styles from "./DecorationsBlock.module.scss"
import Button from "components/Button"
import { Link } from "react-router-dom"

import { motion } from "framer-motion"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import np1 from "../../assets/images/nameplates/med1_mock.jpg"
import np2 from "../../assets/images/nameplates/med2_mock.jpg"
import np3 from "../../assets/images/nameplates/med3_mock.jpg"
import np4 from "../../assets/images/nameplates/np4.png"
import np5 from "../../assets/images/nameplates/np5.png"
import np6 from "../../assets/images/nameplates/np6.png"

import ArrowLeftIcon from "components/Icons/ArrowLeftIcon"
import ArrowRightIcon from "components/Icons/ArrowRightIcon"

const dataTop = [
  {
    url: np1,
  },
  {
    url: np2,
  },
  {
    url: np3,
  },
  {
    url: np1,
  },
  {
    url: np2,
  },
  {
    url: np3,
  },
]

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  prevArrow: <ArrowLeftIcon id="left-icon" />,
  nextArrow: <ArrowRightIcon id="right-icon" />,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1050,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 3,
      },
    },
    // {
    //   breakpoint: 620,
    //   settings: {
    //     slidesToShow: 2,
    //   },
    // },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 340,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
}

const Animation = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "Tween",
      duration: 0.5,
    },
  },
}

const DecorationsBlock = () => {
  return (
    <div className={styles.block}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={Animation}
        className={styles.block__inner}
      >
        <h2 className={styles.block__inner_title}>
          МЕДАЛЬОНЫ, ЖЕТОНЫ,
          <br /> ШИЛЬДЫ, КУЛОНЫ
        </h2>
        <p className={styles.block__inner_description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nulla
          repellat veritatis aut. Rem aspernatur ipsum quos architecto, atque
          maiores pariatur earum error dicta expedita quibusdam eligendi optio
          recusandae minima.
        </p>
        <Link to="/decorations">
          <Button
            className={styles.block__inner_action}
            mode="dark"
            isRedirecting={true}
          >
            Подробнее
          </Button>
        </Link>
        <div className={styles.slider}>
          <Slider {...settings} className={styles["slider_inner"]}>
            {dataTop.map((item, index) => {
              return (
                <div className={styles["slider_inner--card"]} key={index}>
                  <img src={item.url} alt="hero_img" />
                </div>
              )
            })}
          </Slider>
        </div>

        {/* <img src={Decorations} className={styles.block__inner_image}></img> */}
      </motion.div>
    </div>
  )
}

export default DecorationsBlock

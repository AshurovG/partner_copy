import { useEffect, useRef, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useIsAuth, setIsAuthAction } from "slices/AuthSlice"
import { toast } from "react-toastify"
import styles from "./Header.module.scss"
import useScrollDirection from "../../utils/HeaderHook"
import BurgerIcon from "components/Icons/BurgerIcon"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { scroller } from "react-scroll"

import { motion, AnimatePresence } from "framer-motion"
import ArrowLeftIcon from "components/Icons/ArrowLeftIcon"
import ArrowRightIcon from "components/Icons/ArrowRightIcon"

import Bottles from "../../assets/images/bottles_block_img.jpg"
import Decorations from "../../assets/images/decs.png"
import Simple from "../../assets/images/simple_package.png"
import Complex from "../../assets/images/complex_package.png"
import Glasses from "../../assets/images/glasses_block_img.jpg"
import Locks from "../../assets/images/locks-block-background.jpg"

const dataTop = [
  {
    url: Bottles,
    title: "Эксклюзивная стеклянная тара",
    key: "bottles",
  },
  {
    url: Locks,
    title: "Эксклюзивные укупорочные устройства",
    key: "locks",
  },
  {
    url: Complex,
    title: "Премиум упаковка",
    key: "complex-package",
  },
  {
    url: Simple,
    title: "Упаковка из картона",
    key: "simple-package",
  },

  {
    url: Decorations,
    title: "Медальоны, жетоны. шильды, кулоны",
    key: "decorations",
  },
  {
    url: Glasses,
    title: "Стеклянная посуда",
    key: "glasses",
  },
]

const Header = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const isAuth = useIsAuth()
  const showHeader = ![
    "/ashurovvitaly",
    "/rasulovelshan",
    "/derevitskayaevgenia",
  ].includes(location.pathname)

  // const [showMainHeader, setShowMainHeader] = useState(true)
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
  const scrollDirection = useScrollDirection()
  const menuRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef(null)

  const [isBelow200, setIsBelow200] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset
      setIsBelow200(scrollPosition > 100)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isLeftIconClicked = target.id === "left-icon"
      const isRightIconClicked = target.id === "right-icon"

      if (
        e.target &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !isLeftIconClicked &&
        !isRightIconClicked
      ) {
        setIsSubmenuOpen(false)
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [])

  const headerClass =
    scrollDirection !== "up" && isBelow200 ? styles.headerDown : styles.headerUp

  const submenuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  }

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <ArrowLeftIcon id="left-icon" />,
    nextArrow: <ArrowRightIcon id="right-icon" />,
    responsive: [
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 460,
        settings: {
          slidesToShow: 1.8,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.6,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1.4,
        },
      },
    ],
  }

  return (
    <>
      {showHeader ? (
        <header
          id="header"
          className={`${headerClass} ${isSubmenuOpen ? styles.expanded : ""}`}
        >
          <div className={styles.header__inner}>
            <div
              className={styles.header__inner_menu}
              onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
            >
              <h2>MENU</h2>
              {isSubmenuOpen === false ? (
                <BurgerIcon
                  className={styles.burger__icon}
                  onClick={() => setIsSubmenuOpen(true)}
                />
              ) : (
                <div
                  className={styles.cancel__icon}
                  onClick={() => setIsSubmenuOpen(false)}
                ></div>
              )}
            </div>

            <div className={styles.header__inner_contact}>
              <a href="tel:+7-861-203-38-33">
                +7 (861) 203<span className="dash">-</span>38
                <span className="dash">-</span>33
              </a>
            </div>
          </div>
          <AnimatePresence>
            {isSubmenuOpen && (
              <motion.div
                className={styles.submenu}
                variants={submenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                ref={menuRef}
              >
                <div className={styles.submenu__info}>
                  <Link to="/">
                    <h2
                      onClick={() => {
                        setIsSubmenuOpen(false)
                      }}
                    >
                      Главная
                    </h2>
                  </Link>

                  <h2
                    onClick={() => {
                      scroller.scrollTo("form", {
                        smooth: true,
                        duration: 1500,
                      })
                      setIsSubmenuOpen(false)
                    }}
                  >
                    Задать вопрос
                  </h2>

                  <h2
                    onClick={() => {
                      scroller.scrollTo("contacts", {
                        smooth: true,
                        duration: 1500,
                      })
                      setIsSubmenuOpen(false)
                    }}
                  >
                    Контакты
                  </h2>
                  {isAuth && (
                    <Link to="/admin?category_id=1">
                      <h2
                        onClick={() => {
                          setIsSubmenuOpen(false)
                        }}
                      >
                        Управление сайтом
                      </h2>
                    </Link>
                  )}
                  {isAuth && (
                    <h2
                      onClick={() => {
                        localStorage.removeItem("token")
                        dispatch(setIsAuthAction(false))
                        toast.success(
                          "Вы успешно вышли из режима администратора!"
                        )
                        setIsSubmenuOpen(false)
                      }}
                    >
                      Выйти
                    </h2>
                  )}
                </div>
                <div className={styles.submenu__slider}>
                  <Slider
                    ref={sliderRef}
                    {...settings}
                    className={styles["submenu__slider_inner"]}
                  >
                    {dataTop.map((item, index) => {
                      return (
                        <Link to={`/${item.key}`}>
                          <div
                            onClick={() => {
                              setIsSubmenuOpen(false)
                            }}
                            className={styles["submenu__slider_inner--card"]}
                            key={index}
                          >
                            <img src={item.url} alt="hero_img" />

                            <h2 style={{ whiteSpace: "normal" }}>
                              {item.title}
                            </h2>
                          </div>
                        </Link>
                      )
                    })}
                  </Slider>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      ) : null}
    </>
  )
}

export default Header

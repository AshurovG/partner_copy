import styles from "./MainPage.module.scss"
import AboutCompanyBlock from "components/AboutCompanyBlock"
import BottlesBlock from "components/BottlesBlock"
import { useLayoutEffect } from "react"
import LocksBlock from "components/LocksBlock"
import PackagesBlock from "components/PackagesBlock"
import GlassesBlock from "components/GlassesBlock"
import DecorationsBlock from "components/DecorationsBlock"

const MainPage = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles["main-page"]}>
      <AboutCompanyBlock />
      <BottlesBlock />
      <LocksBlock />
      <PackagesBlock />
      <DecorationsBlock />
      <GlassesBlock />
    </div>
  )
}

export default MainPage

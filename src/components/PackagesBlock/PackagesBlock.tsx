import styles from "./PackagesBlock.module.scss"
import Button from "components/Button"
import Complex from "../../assets/images/package1_mock.jpg"
import Simple from "../../assets/images/package2_mock.jpg"
import { Link } from "react-router-dom"

import { motion } from "framer-motion"

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
const LineAnimation = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "Tween",
      duration: 1,
    },
  },
}

const PackagesBlock = () => {
  return (
    <div className={styles.block}>
      <div className={styles.block__inner}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={Animation}
          className={styles.card}
        >
          <img src={Simple} className={styles.card__image}></img>
          <h2 className={styles.card__title}>УПАКОВКА ИЗ КАРТОНА</h2>
          <p className={styles.card__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            possimus!
          </p>
          <Link to="/simple-package">
            <Button
              className={styles.card__action}
              mode="dark"
              isRedirecting={true}
            >
              Подробнее
            </Button>
          </Link>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={LineAnimation}
          className={styles.line}
        ></motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={Animation}
          className={styles.card}
        >
          <img src={Complex} className={styles.card__image}></img>
          <h2 className={styles.card__title}>ПРЕМИУМ УПАКОВКА</h2>
          <p className={styles.card__description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            possimus!{" "}
          </p>
          <Link to="/complex-package">
            <Button
              className={styles.card__action}
              mode="dark"
              isRedirecting={true}
            >
              Подробнее
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default PackagesBlock

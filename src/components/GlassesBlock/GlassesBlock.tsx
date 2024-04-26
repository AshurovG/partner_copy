import styles from "./GlassesBlock.module.scss"
import Button from "components/Button"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import "react-image-gallery/styles/scss/image-gallery.scss"
import Bottles from "../../assets/images/glasses_block_img.jpg"

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

const GlassesBlock = () => {
  return (
    <div className={styles.block}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={Animation}
        className={styles.block__inner}
      >
        <div className={styles.block__inner_content}>
          <h2 className={styles.block__inner_content_title}>
            СТЕКЛЯННАЯ ПОСУДА
          </h2>
          <p className={styles.block__inner_content_description}>
            Возможно изготовление по вашим чертежам или разбработка с нуля
            нашими специалистами
          </p>
          <div>
            <Link to="/glasses">
              <Button
                className={styles.block__inner_content_action}
                isRedirecting={true}
                mode="dark"
              >
                Подробнее
              </Button>
            </Link>
          </div>
        </div>
        <div className={styles.block__inner_image}>
          {/* <ImageGallery
            items={mockImages}
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
            autoPlay={true}
            slideInterval={2500}
            showNav={false}
            slideDuration={1000}
          /> */}
          <img src={Bottles}></img>
        </div>
        {/* <img src={Glasses} className={styles.block__inner_image}></img> */}
      </motion.div>
    </div>
  )
}

export default GlassesBlock

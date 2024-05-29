import styles from "./BottlesBlock.module.scss";
import Button from "components/Button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Bottles from "../../assets/images/bottles_mock.jpg";

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
};

const BottlesBlock = () => {
  return (
    <div className={styles.block}>
      <div className={styles.block__inner}>
        <div className={styles.block__inner_image}>
          <img src={Bottles}></img>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={Animation}
          className={styles.block__inner_content}
        >
          <div>
            <h2 className={styles.block__inner_content_title}>Категория 1</h2>
            <p className={styles.block__inner_content_description}>
              Описание: Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Corrupti animi, modi facilis porro odio accusamus?
            </p>
          </div>

          <div>
            <Link to="/bottles">
              <Button
                className={styles.block__inner_content_action}
                isRedirecting={true}
                mode="dark"
              >
                Подробнее
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BottlesBlock;

import styles from "./AboutCompanyBlock.module.scss";
import Logo from "../../assets/images/клубочек золотой.png";

const AboutCompanyBlock = () => {
  return (
    <div className={styles.block}>
      <div className={styles.block__inner}>
        <img src={Logo} className={styles.block__inner_logo}></img>
        <p className={styles.block__inner_name}>ПАРТНЕР</p>
        <p className={styles.block__inner_description}>
          Группа компаний “Партнер” <span className={styles.dash}>-</span>{" "}
          ведущий поставщик эксклюзивных комплектующих материалов, используемых
          в производстве ликеро<span className={styles.dash}>-</span>водочной и
          вино
          <span className={styles.dash}>-</span>коньячной продукции.
        </p>
      </div>
    </div>
  );
};

export default AboutCompanyBlock;

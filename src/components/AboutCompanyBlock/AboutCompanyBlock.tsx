import styles from "./AboutCompanyBlock.module.scss";
import Logo from "../../assets/images/клубочек золотой.png";

const AboutCompanyBlock = () => {
  return (
    <div className={styles.block}>
      <div className={styles.block__inner}>
        <img src={Logo} className={styles.block__inner_logo}></img>
        <p className={styles.block__inner_name}>Company</p>
        <p className={styles.block__inner_description}>
          Компания “Company”. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Nemo sequi repellendus enim consequatur explicabo
          sapiente architecto quas ad dolor error cum quidem, velit deleniti
          ipsum soluta corporis magni alias eligendi.
        </p>
      </div>
    </div>
  );
};

export default AboutCompanyBlock;

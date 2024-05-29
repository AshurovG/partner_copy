import { useLocation } from "react-router-dom";
import styles from "./Footer.module.scss";

import TelegramIcon from "components/Icons/TelegramIcon";
import WhatsAppIcon from "components/Icons/WhatsAppIcon";
import ContactForm from "components/ContactForm";

const Footer = () => {
  const location = useLocation();
  const showFooter = ![
    "/ashurovvitaly",
    "/rasulovelshan",
    "/derevitskayaevgenia",
    "/login",
  ].includes(location.pathname);

  return (
    <>
      {showFooter ? (
        <footer id="contacts" className={styles.footer}>
          <div className={styles.footer__inner}>
            <div className={styles.footer__inner_info}>
              <p className={styles.footer__inner_text}>
                Мы рады помочь, если у Вас возникли вопросы или предложения,
                заполните форму. Наши сотрудники свяжутся с Вами в ближайшее
                время!
              </p>
              <div className={styles.footer__inner_right}>
                <h2 className={styles.footer__inner_right_title}>
                  НАШИ КОНТАКТЫ
                </h2>
                <div className={styles.footer__inner_right_contacts}>
                  <div>
                    <a href="tel:+7-777-777-77-77">
                      +7 (777) 777<span className="dash">-</span>77
                      <span className="dash">-</span>77
                    </a>
                    <a href="tel:+7-777-777-77-77">
                      +7 (777) 777<span className="dash">-</span>77
                      <span className="dash">-</span>77
                    </a>
                  </div>
                  <div>
                    <a href="mailto:company@mail.ru">company@mail.ru</a>
                  </div>
                </div>

                <div className={styles.footer__inner_left_socials}>
                  <a href="#">
                    <TelegramIcon />
                  </a>
                  <a href="#">
                    <WhatsAppIcon />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <p className={styles.footer__inner_text_mobile}>
                Мы рады помочь, если у Вас возникли вопросы или предложения,
                заполните форму. Наши сотрудники свяжутся с Вами в ближайшее
                время!
              </p>
              <ContactForm />
            </div>
          </div>
        </footer>
      ) : null}
    </>
  );
};

export default Footer;

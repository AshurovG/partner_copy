import { useRef, useState } from "react";
import styles from "./ContactForm.module.scss";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "components/Button";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import clsx from "clsx";

const ContactForm = () => {
  const location = useLocation();
  const showForm = ![
    "/ashurovvitaly",
    "/rasulovelshan",
    "/derevitskayaevgenia",
    "/login",
    // "/admin",
  ].includes(location.pathname);
  const form = useRef<HTMLFormElement>(null);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [isCompactMode, _] = useState(window.innerWidth <= 460);

  const forma = useForm({
    mode: "onChange",
  });

  const { register, handleSubmit, formState, reset } = forma;
  const { isValid, touchedFields, errors } = formState;

  const onSubmit = () => {
    if (form.current !== null) {
      emailjs
        .sendForm(
          "service_tqr0dxk",
          "template_9v0h7qn",
          form.current,
          "Yr8QuQUIlXompjRBo"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
    toast.success("Ваше обращение принято! Мы скоро с вами свяжемся!");
    reset({
      fio: "",
      phone: "",
      description: "",
    });
  };

  return (
    <>
      {
        showForm && (
          // <div className={styles.form}>
          <div id="form" className={styles.form__inner}>
            <h2 className={styles.form__inner_title}>
              Что<span className="dash">-</span>то заинтересовало или остались
              вопросы?
              <br /> Оставьте Ваши данные и мы с Вами свяжемся!
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              ref={form}
              className={styles.form__inner_fields}
            >
              <div style={{ position: "relative", width: `100%` }}>
                <input
                  {...register("fio", {
                    required: "Обязательное поле",
                    pattern: {
                      value: /^([\wа-яА-ЯёЁ]+[\s]){1,2}[\wа-яА-ЯёЁ]+$/,
                      message: "Введите корректные данные...",
                    },
                  })}
                  className={styles.form__input}
                  placeholder="Введите ФИО*"
                />
                {errors?.fio && touchedFields.fio && (
                  <div className={styles.form__input_message}>
                    {errors?.fio?.message?.toString()}
                  </div>
                )}
              </div>
              <div style={{ position: "relative", width: `100%` }}>
                <input
                  {...register("phone", {
                    required: "Обязательное поле",
                    pattern: {
                      value: /^(8|\+7)\d{10}$/,
                      message: "Введите корректный номер телефона",
                    },
                  })}
                  className={clsx(styles.form__input, styles.phone)}
                  type="tel"
                  placeholder="Введите номер телефона*"
                />
                {errors?.phone && touchedFields.phone && (
                  <div className={styles.form__input_message}>
                    {errors?.phone?.message?.toString()}
                  </div>
                )}
              </div>
              <div style={{ position: "relative", width: `100%` }}>
                <textarea
                  {...register("description", {
                    required: "Обязательное поле",
                  })}
                  className={styles.form__input_big}
                  placeholder="Введите описание*"
                ></textarea>
                {errors?.description && touchedFields.description && (
                  <div className={styles.form__input_message}>
                    {errors?.description?.message?.toString()}
                  </div>
                )}
              </div>
              <div style={{ position: "relative", width: `100%` }}>
                <ReCAPTCHA
                  size={isCompactMode ? "compact" : "normal"}
                  sitekey="6LcOm6QpAAAAACiSyHhAWnNHd9pl_aQJjd5NHZYx"
                  onChange={(value) => setCaptchaValue(value)}
                  theme="dark"
                />
              </div>
              <Button
                isRedirecting={false}
                mode="light"
                className={styles.form__submit}
                disabled={!isValid || !captchaValue}
                type="submit"
              >
                Отправить
              </Button>
            </form>
          </div>
        )
        // </div>
      }
    </>
  );
};

export default ContactForm;

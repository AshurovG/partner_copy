import React from "react"
import styles from "./Button.module.scss"
import clsx from "clsx"
import RedirectArrow from "components/Icons/RedirectArrow"

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
  children: React.ReactNode
  state?: boolean
  className?: string
  disabled?: boolean
  isRedirecting: boolean
  mode: "dark" | "inverse" | "light"
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  isRedirecting,
  mode,
  ...props
}) => {
  // Выбор класса в зависимости от значения mode
  const modeClass =
    mode === "dark"
      ? styles["button-dark"]
      : mode === "inverse"
      ? styles["button-inverse"]
      : styles["button-light"]

  return (
    <button
      disabled={disabled}
      {...props}
      className={clsx(styles["button"], modeClass, className)}
    >
      <p className={styles.button__text}>{children}</p>

      {isRedirecting && (
        <RedirectArrow
          fill={
            mode === "inverse" ? "#000" : mode === "dark" ? "#cc9966" : "fff"
          }
          className={styles.button__icon}
        />
      )}
    </button>
  )
}

export default Button

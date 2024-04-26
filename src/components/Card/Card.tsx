import React from "react"
import styles from "./Card.module.scss"
import { clsx } from "clsx"

type CardProps = {
  title: string
  image: string
  className?: string

  onCardClick?: () => void
}

const Card: React.FC<CardProps> = ({
  title,
  image,
  className,
  onCardClick,
}) => {
  return (
    <div
      onClick={() => {
        if (onCardClick) {
          onCardClick()
        }
      }}
      className={clsx(styles.card, className)}
    >
      <img className={styles.card__image} src={image} alt="" />
      <h3 className={styles.card__title}>{title}</h3>
    </div>
  )
}

export default Card

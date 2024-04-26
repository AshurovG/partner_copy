import React, { useState } from 'react'
import styles from './CategoriesList.module.scss'
import { Categories } from '../../consts'
import Button from 'components/Button'
import { useSearchParams } from 'react-router-dom';

type  CategoriesProps = {
    id?: number
    onClick: (id: number) => void
    className: string
}

const CategoriesList: React.FC<CategoriesProps> = ({ onClick, className }) => {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get('category_id');
  const [activeId, setActiveId] = useState(Number(categoryId))

  const handleButtonClick = (id: number) => {
    onClick(id)
    setActiveId(id)
  }

  return (
    <div className={`${styles.categories} ${className}`}>
        {Categories.map((category) => (
            activeId === category.id ? <Button onClick={() => handleButtonClick(category.id)} className={styles.categories__btn} mode='inverse' isRedirecting={false}>
              {category.value}
            </Button>
            : <Button onClick={() => handleButtonClick(category.id)} className={styles.categories__btn} mode='dark' isRedirecting={false}>
              {category.value}
            </Button>
        ))}
    </div>
  )
}

export default CategoriesList
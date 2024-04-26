import { useLayoutEffect, useState } from "react";
import styles from "./CategoryPage.module.scss";
import { Link, Navigate } from "react-router-dom";
import Card from "components/Card";
import { cards } from "../../consts";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import ModalWindow from "components/ModalWindow";

type Card = {
  product_id: number;
  title: string;
  url: string;
  description: string;
  category_id: number;
};

const CategoryPage = () => {
  const [categoryExists, _] = useState<boolean>(true);
  const [isItemsLoading, __] = useState<boolean>(false);
  const [isModalImageOpened, setIsModalImageOpened] = useState(false);
  const [itemClick, ___] = useState<Card>();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles["category-page"]}>
      <div className={styles["category-page__inner"]}>
        {!categoryExists ? (
          <Navigate to="/" replace />
        ) : (
          <>
            {isItemsLoading ? (
              <Skeleton
                className={styles["category-page__inner_title"]}
                style={{ marginBottom: 15, maxWidth: "400px" }}
                highlightColor="#ac6823"
                baseColor="#cc9966"
              />
            ) : (
              <h1 className={styles["category-page__inner_title"]}>
                Выбранная категория
              </h1>
            )}
            {isItemsLoading ? (
              <Skeleton
                style={{ marginTop: 5 }}
                className={styles["category-page__inner_description"]}
                count={3}
                highlightColor="#ac6823"
                baseColor="#cc9966"
              />
            ) : (
              <div className={styles["category-page__inner_description"]}>
                Описание выбранной категории: Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Dolor quam esse, at sit aliquid
                illum nihil? Dolorum maxime praesentium odio unde? Fuga ab quas
                similique blanditiis labore possimus id molestiae perspiciatis
                minima quis consequatur, facere saepe dolorem voluptates
                inventore, quisquam provident consequuntur aliquid expedita qui
                debitis quos neque! Perferendis, eum?
              </div>
            )}

            <div className={styles["category-page__inner_content"]}>
              {isItemsLoading ? (
                [...new Array(8)].map((_, index) => (
                  <Skeleton
                    highlightColor="#ac6823"
                    baseColor="#cc9966"
                    height={300}
                    key={index}
                  />
                ))
              ) : cards.length == 0 ? (
                <div style={{ color: "red" }}>пусто</div>
              ) : (
                cards.map((item: Card) => {
                  return (
                    <Link to={`${item.product_id}`} key={item.product_id}>
                      <Card title={item.title} image={item.url} />
                    </Link>
                  );
                })
              )}
            </div>
          </>
        )}
      </div>
      <ModalWindow
        handleBackdropClick={() => {
          setIsModalImageOpened(false);
        }}
        active={isModalImageOpened}
      >
        <img className={styles.modal_image} src={itemClick?.url}></img>
      </ModalWindow>
    </div>
  );
};

export default CategoryPage;

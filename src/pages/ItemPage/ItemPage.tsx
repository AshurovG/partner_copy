import { useLayoutEffect, useState } from "react";
import styles from "./ItemPage.module.scss";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Slider from "components/Slider";
import Button from "components/Button";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { images } from "../../consts";

type ItemPics = {
  product_item_id: number;
  url: string;
  product_id: number;
};

type Item = {
  product_id: number;
  title: string;
  url: string;
  description: string;
  category_id: number;
  items: ItemPics[];
};
const ItemPage = () => {
  const { categoryKey } = useParams();
  const navigate = useNavigate();
  const [item, __] = useState<Item>();
  const [isLoading, _] = useState<boolean>(false);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles["item-page"]}>
      <div className={styles["item-page__inner"]}>
        <div className={styles["item-page__inner_back"]}>
          <Button
            onClick={() => navigate(`/${categoryKey}`)}
            className={styles["item-page__inner_back-btn"]}
            mode="inverse"
            isRedirecting={false}
          >
            Назад
          </Button>
        </div>
        <div className={styles["item-page__content"]}>
          {!isLoading ? (
            <h1 className={styles["item-page__content_adapt-title"]}>
              Название выбранного товара
            </h1>
          ) : (
            <Skeleton
              highlightColor="#ac6823"
              width={`50%`}
              height={"32px"}
              baseColor="#cc9966"
              className={styles["item-page__content_adapt-title"]}
            />
          )}

          {!isLoading ? (
            images.length == 1 ? (
              <div
                style={{ color: "red" }}
                className={styles["item-page__content_slider"]}
              >
                <img src={images[0].original} />
              </div>
            ) : (
              <Slider
                className={styles["item-page__content_slider"]}
                images={images}
              />
            )
          ) : (
            <div className={styles["item-page__content_slider"]}>
              <Skeleton
                width={"100%"}
                height={500}
                className={styles["item-page__content_slider"]}
                highlightColor="#ac6823"
                baseColor="#cc9966"
              />
            </div>
          )}
          <div className={styles["item-page__content_text"]}>
            {!isLoading ? (
              <>
                <h1 className={styles["item-page__content_text_title"]}>
                  {item?.title}
                  Название выбранного товара
                </h1>
                <p className={styles["item-page__content_text_description"]}>
                  Описание: Lorem, ipsum dolor sit amet consectetur adipisicing
                  elit. Deserunt quo inventore eos sunt totam magni minus libero
                  laudantium non ipsa pariatur mollitia nulla beatae, assumenda
                  aut doloremque, enim odio? Eius distinctio hic quisquam et!
                  Minima porro ex natus sequi pariatur! In earum illo eveniet
                  beatae. Maiores tempore dicta unde corporis!
                </p>
              </>
            ) : (
              <>
                <div className={styles["item-page__content_text_title"]}>
                  <Skeleton
                    highlightColor="#ac6823"
                    width={`50%`}
                    baseColor="#cc9966"
                    style={{ marginBottom: 15 }}
                  />
                </div>

                <Skeleton
                  highlightColor="#ac6823"
                  baseColor="#cc9966"
                  count={3}
                  style={{ marginTop: 10 }}
                  className={styles["item-page__content_text_description"]}
                />
              </>
            )}
            {}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemPage;

import { useState, useEffect } from "react"
import { useCurrentImageId } from "slices/AdminSlice"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import axios from "axios"
import { useParams } from "react-router-dom"
import styles from "./AdminProductPage.module.scss"
import { Response } from "../../types"
import EditIcon from "components/Icons/EditIcon"
import BasketIcon from "components/Icons/BasketIcon"
import Slider from "components/Slider"
import AddButton from "components/Icons/AddButton"
import ModalWindow from "components/ModalWindow"
import Button from "components/Button"
import ProductForm from "components/PorductForm"
import ImageForm from "components/ImageForm"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"

type Image = {
  id: number
  original: string
  thumbnail: string
}

type ItemPics = {
  product_item_id: number
  url: string
  product_id: number
}

type Item = {
  product_id: number
  title: string
  url: string
  description: string
  category_id: number
  items: ItemPics[]
}

const AdminProductPage = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const currentImageId = useCurrentImageId()
  const [item, setItem] = useState<Item>()
  const [images, setImages] = useState<Image[]>([])
  const [isDeleteModalOpened, setIsDeleteModalOpened] = useState(false)
  const [isEditModalOpened, setIsEditModalOpened] = useState(false)
  const [isCreateImageModalOpened, setIsCreateImageModalOpened] =
    useState(false)
  const [isDeleteImageModalOpened, setIsDeleteImageModalOpened] =
    useState(false)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getItem = async () => {
    setIsLoading(true)
    try {
      const response: Response = await axios(
        `https://partnerev.ru/api/products/${id}`,
        {
          method: "GET",
        }
      )

      setItem(response.data)
      setImages(
        response.data.items.map((itemPic: ItemPics) => ({
          id: itemPic.product_item_id,
          original: itemPic.url,
          thumbnail: itemPic.url,
        }))
      )
      setTimeout(() => {
        setIsLoading(false)
      }, 300)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteProduct = async () => {
    try {
      await axios(`https://partnerev.ru/api/products/${id}`, {
        method: "DELETE",
      })
      navigate(`/admin?category_id=${item?.category_id}`)
      toast.success("Товар успешно удален!")
    } catch (error) {
      console.log(error)
    }
  }

  const putProduct = async (
    title: string,
    description: string,
    file: File | null
  ) => {
    try {
      const formData = new FormData()
      // if (token) {
      //   formData.append("jwt", token)
      // }
      formData.append("title", title)
      formData.append("description", description)
      if (file) {
        formData.append("file", file)
        formData.append("isFileChanged", String(1))
        if (item) {
          formData.append("imgUrl", item?.url)
        }
      }

      await axios(`https://partnerev.ru/api/products/${id}`, {
        method: "PUT",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      setIsEditModalOpened(false)
      // setIsLoading(true)
      toast.success("Информация успешно обновлена!")
      getItem()
    } catch (error) {
      toast.success("Что-то пошло не так...")
      throw error
    }
  }

  const postImage = async (file: File) => {
    const formData = new FormData()
    // if (token) {
    //   formData.append("jwt", token)
    // }
    formData.append("file", file)
    if (item) {
      formData.append("product_id", String(item.product_id))
    }
    try {
      await axios("https://partnerev.ru/api/products_items/", {
        method: "POST",
        data: formData,
      })
      getItem()
      toast.success("Фото успешно добавлено!")
      // setIsLoading(true)
    } catch (error) {
      toast.error("Размер фото не должен превышать 5 МБ!")
      throw error
    }
  }

  const deleteImage = async () => {
    try {
      await axios(`https://partnerev.ru/api/products_items/${currentImageId}`, {
        method: "DELETE",
        // data: {
        //   idMany: imageId,
        //   jwt: token,
        // },
      })
      getItem()
      toast.success("Фото успешно удалено!")
      // setIsLoading(true)
    } catch (error) {
      toast.error("Что-то пошло не так...")
      throw error
    }
  }

  useEffect(() => {
    getItem()
  }, [])

  return (
    <div className={styles.product__page}>
      <div className={styles["product__page-wrapper"]}>
        <div className={styles["product__page-title-block"]}>
          <h1 className={styles["product__page-title"]}>
            Редактирование текущего товара
          </h1>
          <Button
            onClick={() => navigate(`/admin?category_id=${item?.category_id}`)}
            className={styles["product__page-title-btn"]}
            mode="inverse"
            isRedirecting={false}
          >
            Назад
          </Button>
        </div>

        <div className={styles["product__page-action-tablet"]}>
          <div className={styles["product__page-action-item"]}>
            <p className={styles["product__page-subtitle"]}>
              Изменить информацию о товаре
            </p>
            <EditIcon onClick={() => setIsEditModalOpened(true)} />
          </div>

          <div className={styles["product__page-action-item"]}>
            <p className={styles["product__page-subtitle"]}>Удалить товар</p>
            <BasketIcon onClick={() => setIsDeleteModalOpened(true)} />
          </div>
        </div>

        <div className={styles["product__page-content"]}>
          {isLoading ? (
            <Skeleton
              highlightColor="#ac6823"
              baseColor="#cc9966"
              className={styles["product__page-image"]}
              height={500}
            />
          ) : (
            <img
              className={styles["product__page-image"]}
              src={item?.url}
              alt=""
            />
          )}

          <div className={styles["product__page-info"]}>
            <div>
              <h4 className={styles["product__page-subtitle"]}>
                Название товара:
              </h4>
              {isLoading ? (
                <Skeleton
                  highlightColor="#ac6823"
                  baseColor="#cc9966"
                  className={styles["product__page-text"]}
                />
              ) : (
                <p className={styles["product__page-text"]}>{item?.title}</p>
              )}
            </div>

            <div>
              <h4 className={styles["product__page-subtitle"]}>
                Описание товара:
              </h4>
              {isLoading ? (
                <Skeleton
                  highlightColor="#ac6823"
                  baseColor="#cc9966"
                  className={styles["product__page-text"]}
                />
              ) : (
                <p className={styles["product__page-text"]}>
                  {item?.description}
                </p>
              )}
            </div>
          </div>

          <div className={styles["product__page-action"]}>
            <div className={styles["product__page-action-item"]}>
              <p className={styles["product__page-subtitle"]}>
                Изменить информацию о товаре
              </p>
              <EditIcon onClick={() => setIsEditModalOpened(true)} />
            </div>

            <div className={styles["product__page-action-item"]}>
              <p className={styles["product__page-subtitle"]}>Удалить товар</p>
              <BasketIcon onClick={() => setIsDeleteModalOpened(true)} />
            </div>
          </div>
        </div>

        <div className={styles["product__page-gallery"]}>
          {images.length !== 0 ? (
            <div className={styles["product__page-gallery-content"]}>
              {isLoading ? (
                <Skeleton
                  highlightColor="#ac6823"
                  baseColor="#cc9966"
                  className={styles["product__page-gallery-slider"]}
                  height={350}
                />
              ) : (
                <Slider
                  className={styles["product__page-gallery-slider"]}
                  images={images}
                  isNotAutomatic
                />
              )}

              <div className={styles["product__page-action-gallery"]}>
                <div className={styles["product__page-action-item"]}>
                  <p className={styles["product__page-subtitle"]}>
                    Добавить новое фото
                  </p>
                  <AddButton
                    onClick={() => setIsCreateImageModalOpened(true)}
                  />
                </div>

                <div className={styles["product__page-action-item"]}>
                  <p className={styles["product__page-subtitle"]}>
                    Удалить текущее фото
                  </p>
                  <BasketIcon
                    onClick={() => setIsDeleteImageModalOpened(true)}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div>
              <p className={styles["product__page-subtitle"]}>
                На данный момент в галерее нет ни одного фото!
              </p>
              <div className={styles["product__page-action-item"]}>
                <p className={styles["product__page-subtitle"]}>
                  Хотите добавить новое?
                </p>
                <AddButton onClick={() => setIsCreateImageModalOpened(true)} />
              </div>
            </div>
          )}
        </div>
      </div>

      <ModalWindow
        className={styles.modal}
        active={isDeleteModalOpened}
        handleBackdropClick={() => setIsDeleteModalOpened(false)}
      >
        <div className={styles.modal__delete}>
          <h4 className={styles["modal__title"]}>
            Вы уверены, что хотите удалить этот товар?
          </h4>
          <div className={styles.modal__action}>
            <Button
              className={styles["modal__action-btn"]}
              onClick={deleteProduct}
              isRedirecting={false}
              mode={"dark"}
            >
              Подтвердить
            </Button>
            <Button
              className={styles["modal__action-btn"]}
              onClick={() => setIsDeleteModalOpened(false)}
              isRedirecting={false}
              mode={"dark"}
            >
              Отклонить
            </Button>
          </div>
        </div>
      </ModalWindow>

      <ModalWindow
        className={styles.modal}
        active={isEditModalOpened}
        handleBackdropClick={() => setIsEditModalOpened(false)}
      >
        <ProductForm
          isEditing={true}
          onSubmit={putProduct}
          active={isEditModalOpened}
          firstTitle={item?.title}
          firstDescription={item?.description}
        />
      </ModalWindow>

      <ModalWindow
        className={styles.modal}
        active={isCreateImageModalOpened}
        handleBackdropClick={() => setIsCreateImageModalOpened(false)}
      >
        <ImageForm
          active={isCreateImageModalOpened}
          onSubmit={(image: File) => {
            postImage(image)
            setIsCreateImageModalOpened(false)
          }}
        />
      </ModalWindow>

      <ModalWindow
        className={styles.modal}
        active={isDeleteImageModalOpened}
        handleBackdropClick={() => setIsDeleteImageModalOpened(false)}
      >
        <div className={styles.modal__delete}>
          <h4 className={styles["modal__title"]}>
            Вы уверены, что хотите удалить это фото?
          </h4>
          <div className={styles.modal__action}>
            <Button
              className={styles["modal__action-btn"]}
              onClick={() => {
                deleteImage()
                setIsDeleteImageModalOpened(false)
              }}
              isRedirecting={false}
              mode={"dark"}
            >
              Подтвердить
            </Button>
            <Button
              className={styles["modal__action-btn"]}
              onClick={() => setIsDeleteImageModalOpened(false)}
              isRedirecting={false}
              mode={"dark"}
            >
              Отклонить
            </Button>
          </div>
        </div>
      </ModalWindow>
    </div>
  )
}

export default AdminProductPage

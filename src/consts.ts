type Card = {
  product_id: number;
  title: string;
  url: string;
  description: string;
  category_id: number;
};

import product from "assets/product.png";
import image1 from "assets/1.png";
import image2 from "assets/2.png";
import image3 from "assets/3.png";
import image4 from "assets/4.png";

export const Categories = [
  {
    id: 1,
    key: "bottles",
    value: "Эксклюзивная стеклянная тара",
  },
  {
    id: 2,
    key: "simple-package",
    value: "Упаковка из картона",
  },
  {
    id: 3,
    key: "complex-package",
    value: "Премиум упаковка",
  }, // сложная упаковка
  {
    id: 4,
    key: "decorations",
    value: "Медальоны, жетоны, шильды, кулоны",
  }, // медальоны
  {
    id: 5,
    key: "glasses",
    value: "Стеклянная посуда",
  }, // бокалы, рюмки и тд
  {
    id: 6,
    key: "locks",
    value: "Эксклюзивные укупорочные устройства",
  }, // укупорочные устройства
];

export const cards: Card[] = [
  {
    product_id: 1,
    title: "Продукт 1",
    url: product,
    description: "Описание продукта 1 (может быть длинным)",
    category_id: 1,
  },
  {
    product_id: 2,
    title: "Продукт 2",
    url: product,
    description: "Описание продукта 2 (может быть длинным)",
    category_id: 1,
  },
  {
    product_id: 3,
    title: "Продукт 3",
    url: product,
    description: "Описание продукта 3 (может быть длинным)",
    category_id: 1,
  },
  {
    product_id: 4,
    title: "Продукт 4",
    url: product,
    description: "Описание продукта 4 (может быть длинным)",
    category_id: 1,
  },
  {
    product_id: 5,
    title: "Продукт 5",
    url: product,
    description: "Описание продукта 5 (может быть длинным)",
    category_id: 1,
  },
  {
    product_id: 6,
    title: "Продукт 6",
    url: product,
    description: "Описание продукта 6 (может быть длинным)",
    category_id: 1,
  },
];

export const images = [
  {
    original: image1,
    thumbnail: image1,
  },
  {
    original: image2,
    thumbnail: image2,
  },
  {
    original: image3,
    thumbnail: image3,
  },
  {
    original: image4,
    thumbnail: image4,
  },
];

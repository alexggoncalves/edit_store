import { createContext, useEffect, useState } from "react";

import categories from "../components/shared/categories.json";

const initialValue = null;

export const ProductContext = createContext(initialValue);

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [order, setOrder] = useState("price");
  const [category, setCategory] = useState("0");
  const [list, setList] = useState([]);

  function getKeyByValue(object, value) {
    return Object.keys(object).find((key) => object[key] === value);
  }

  const fetchProducts = (amount) => {
    const endPoint = `https://foxcoding.net/api/getProductsList?sortBy=${order}&nProducts=${amount}`;
    useEffect(() => {
      fetch(endPoint)
        .then((res) => res.json())
        .then((json) => {
          setProducts(json.data.products);
          setList(products);
        });
    }, [order]);
  };

  const fetchProduct = (id) => {
    useEffect(() => {
      fetch(`https://foxcoding.net/api/getProduct?id=${id}`)
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
          setProduct(json);
        });
    }, []);
  };

  const chooseCategory = (category) => {
    if (typeof category === "string") {
      let id = getKeyByValue(categories, category.toLowerCase());
      if (id == undefined) id = 0;
      setCategory(parseInt(id));
      console.log(id);
    }
  };

  const resetFilter = ()=>{
    setList(products)
  }

  useEffect(() => {
    if (category != 0) {
      setList( products.filter((product) =>
        product.category.includes(category)
      ))
    } else resetFilter();
  }, [category,product]);

  return (
    <ProductContext.Provider
      value={{
        products,
        product,
        order,
        category,
        list,
        setOrder,
        fetchProducts,
        fetchProduct,
        chooseCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

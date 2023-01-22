import { createContext, useEffect, useState } from "react";

import categories from "../components/shared/categories.json"

const initialValue = null;

export const ProductContext = createContext(initialValue);

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [order, setOrder] = useState("price")
  const [category, setCategory] = useState("0");


  const fetchProducts = (amount) => {
    const endPoint = `https://foxcoding.net/api/getProductsList?sortBy=${order}&nProducts=${amount}`;

    useEffect(() => {
      fetch(endPoint)
        .then((res) => res.json())
        .then((json) => {
          setProducts(json.data.products);
        });
    }, [order]);
  };

  const fetchProduct = (id) => {
    useEffect(() => {
        fetch(`https://foxcoding.net/api/getProduct?id=${id}`)
          .then((res) => res.json())
          .then((json) => {
            setProduct(json.data.product);
          });
      }, []);
  }

  const filterByCategory = (category) => {
    const id = 2;
    useEffect(()=> {
        setProducts(products.filter(product=>product.category.includes(id)));

    },[category])
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        product,
        order,
        category,
        setOrder,
        fetchProducts,
        fetchProduct,
        filterByCategory,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

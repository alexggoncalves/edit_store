import ProductCard from "../../shared/ProductCard";
import { useState, useEffect } from "react";

const TopProducts = () => {
  const [topProducts, setTopProducts] = useState([]);

  /* useEffect(() => {
    const getProduct = async (id) => {
      const response = await fetch(
        `https://foxcoding.net/api/getProduct?id=${id}`
      );
      const data = await response.json();

      setTopProducts([...topProducts,data])
      console.log(topProducts)
    };

    for (let i = 1; i <= 8; i++) {
      const randomIndex = Math.floor(Math.random() * 25) + 1;
      getProduct(randomIndex);
    }
  }, []); */

  const topProduct01 = {
    id: 1,
    name: "Purple naiky",
    partnership: "Camden",
    brand: "Florence A. Cook",
    quantity: 4,
    madeIn: "Cocos (Keeling) Islands",
    description: "sem, vitae aliquam eros turpis non enim. Mauris quis",
    image: "https://foxcoding.net/imgs/products/product1.jpg",
    category: [1],
    price: 100,
    score: 4,
    sizes: { 1: 2, 3: 3 },
  };
  const topProduct02 = {
    id: 2,
    name: "B&W ardidas",
    partnership: "Carl",
    brand: "Ashely S. Rojas",
    quantity: 6,
    madeIn: "Saudi Arabia",
    description: "montes, nascetur ridiculus mus. Proin vel arcu eu odio",
    image: "https://foxcoding.net/imgs/products/product2.jpg",
    category: [1],
    price: 105,
    score: 4,
    sizes: { 2: 1, 4: 1 },
  };
  const topProduct03 = {
    id: 3,
    name: "Sweat dreams",
    partnership: "Christopher",
    brand: "Tobias W. Aguirre",
    quantity: 1,
    madeIn: "Mayotte",
    description: "at fringilla purus",
    image: "https://foxcoding.net/imgs/products/product3.jpg",
    category: [2],
    price: 140,
    score: 3.7,
    sizes: { 1: 1, 2: 1, 3: 1, 4: 1 },
  };
  const topProduct04 = {
    id: 4,
    name: "B pants",
    partnership: "Walker",
    brand: "Raja I. Mays",
    quantity: 4,
    madeIn: "Guatemala",
    description: "posuere, enim nisl elementum",
    image: "https://foxcoding.net/imgs/products/product4.jpg",
    category: [3],
    price: 400,
    score: 4.7,
    sizes: { 1: 5 },
  };
  const topProduct05 = {
    id: 5,
    name: "Blackoodie",
    partnership: "Stone",
    brand: "Janna U. Browning",
    quantity: 1,
    madeIn: "Costa Rica",
    description: "nec, imperdiet nec, leo. Morbi neque tellus, imperdiet",
    image: "https://foxcoding.net/imgs/products/product5.jpg",
    category: [2],
    price: 1000,
    score: 4.1,
    sizes: { 1: 1, 2: 1, 3: 1, 4: 1 },
  };
  const topProduct06 = {
    id: 6,
    name: "Angry hoodie",
    partnership: "David",
    brand: "Sloane C. Tillman",
    quantity: 8,
    madeIn: "Gambia",
    description: "eu dolor egestas rhoncus. Proin nisl sem, consequat",
    image: "https://foxcoding.net/imgs/products/product6.jpg",
    category: [2],
    price: 2000,
    score: 4.4,
    sizes: { 1: 1, 2: 1, 3: 1, 4: 1 },
  };
  const topProduct07 = {
    id: 7,
    name: "Grey dress",
    partnership: "Jason",
    brand: "Juliet M. Warren",
    quantity: 5,
    madeIn: "Dominican Republic",
    description: "tortor. Integer aliquam adipiscing lacus. Ut nec",
    image: "https://foxcoding.net/imgs/products/product7.jpg",
    category: [2, 3],
    price: 190,
    score: 2.5,
    sizes: { 1: 1, 2: 1, 3: 1, 4: 1 },
  };
  const topProduct08 = {
    id: 7,
    name: "Grey dress",
    partnership: "Jason",
    brand: "Juliet M. Warren",
    quantity: 5,
    madeIn: "Dominican Republic",
    description: "tortor. Integer aliquam adipiscing lacus. Ut nec",
    image: "https://foxcoding.net/imgs/products/product7.jpg",
    category: [2, 3],
    price: 190,
    score: 2.5,
    sizes: { 1: 1, 2: 1, 3: 1, 4: 1 },
  };

  
  return (
    <section
      id="products"
      className="product-list bg-graylight paddingtopdouble paddingbottomfull"
    >
      <h1 className="textcenter black">Top Products</h1>
      <div className="gridrow">
        <ProductCard product={topProduct01} />
        <ProductCard product={topProduct02} />
        <ProductCard product={topProduct03} />
        <ProductCard product={topProduct04} />
        <ProductCard product={topProduct05} />
        <ProductCard product={topProduct06} />
        <ProductCard product={topProduct07} />
        <ProductCard product={topProduct08} />
      </div>
    </section>
  );
};

export default TopProducts;

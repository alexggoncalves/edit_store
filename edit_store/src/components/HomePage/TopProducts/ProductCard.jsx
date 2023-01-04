import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const product= props.product;   
    
  return (
    <Link to={"/product/" + product.id} className="product-card col-12 col-t-6 col-d-3" title="View Product">
      <div className="product-card-image">
        {product.new && 
            <span className="product-card-image-badge">New!</span>
        }
        <img
          className="imgfit"
          //srcSet="imgs/products/product01.jpg 720w, imgs/products/medium/product01.jpg 640w, imgs/products/small/product01.jpg 240w"
          sizes="(min-width: 1200px) 720px, 640px"
          src={product.image}
        />
      </div>
      <p className="margintophalf marginbottomnone">{product.title}</p>
      <p className="gray marginnone">{product.category}</p>
      <p className="secondary marginnone">{'$' + product.price.toFixed(2)}</p>
    </Link>
  );
};

export default ProductCard;

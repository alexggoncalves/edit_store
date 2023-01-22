import { ProductContext } from "../../contexts/ProductContext";
import { useContext } from "react";

function SortBar() {
  const productContext = useContext(ProductContext);

  const changeOrder = (event) => {
    event.preventDefault();

    const order = event.target.value;

    productContext.setOrder(order);
  };

  return (
    <div id="sortbar">
      <div className="gridrow">
        <div className="col-4">Tops</div>
        <div className="col-8 textright">
          Sort by
          <select defaultValue={"price"} onChange={changeOrder}>
            <option value="price">
              Price
            </option>
            <option value="popularity">Popularity</option>
            <option value="name">Name</option>
            <option value="season">Season</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default SortBar;

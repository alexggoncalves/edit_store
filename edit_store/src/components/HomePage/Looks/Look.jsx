import { Link } from "react-router-dom";


const Look = (props) => {
  return (
    <div className="col-6 col-t-3">
      <Link to="/" title="View Look" className="look-card">
        <div className="look-card-image">
          <img
            className="imgfit"
            //srcSet="imgs/looks/looks01.jpg 720w, imgs/looks/medium/looks01.jpg 360w, imgs/looks/small/looks01.jpg 240w"
            sizes="(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px"
            src= {props.image}
          />
        </div>
        <p className="fancytext">{ props.title}</p>
      </Link>
    </div>
  );
};

export default Look;

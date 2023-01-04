import { Link } from "react-router-dom";



const Slide = (props) => {

  return (
    <div className="slider-slides-slide">
      <picture>
        <source srcSet={props.content.image.full} media="(max-width: 1920px)"></source>
        <source srcSet={props.content.image.medium} media="(max-width: 1024px)"></source>
        <source srcSet={props.content.image.small} media="(max-width: 576wpx)"></source>
        <img src={props.content.image.full} alt="Lore Impsum @edit"></img>
      </picture>  
      <div className="slider-slides-slide-caption">
        <p className="h1">
          {props.content.title}
          <br />
          {props.content.subtitle}
        </p>
        <Link to="/" title="Shop Now">
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Slide;

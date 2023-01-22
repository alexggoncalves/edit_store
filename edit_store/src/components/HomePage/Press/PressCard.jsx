import { Link } from "react-router-dom";

const PressCard = (props) => {
  return (
    <div className="col-12 col-t-4">
      <Link to="/" target="_blank" title="View Look" className="press-card">
        <div className="press-card-image">
          <img
            className="imgfit"
            //srcSet="imgs/press/press01.jpg 720w, imgs/press/medium/press01.jpg 450w"
            sizes="(min-width: 1200px) 720px, 450px"
            src={props.content.image}
          />
        </div>
        <p>{props.content.title}</p>
      </Link>
    </div>
  );
};

export default PressCard;

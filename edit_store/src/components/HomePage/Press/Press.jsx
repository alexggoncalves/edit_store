import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid"

import press01 from "../../../assets/press/press01.jpg";
import press02 from "../../../assets/press/press02.jpg"
import press03 from "../../../assets/press/press03.jpg"

import PressCard from "./PressCard";

const Press = () => {
  const pressCards = [
    {title:"Replica Collections",image: press01},
    {title:"Hublot Collaboration",image: press02},
    {title:"Replica Collections",image: press03}
  ]

  return (
    <section id="press" className="paddingverticaldouble bg-graylight">
      <h2 className="textcenter marginbottomfull">Press</h2>
      <div className="gridrow">
        {
          pressCards.map((card) => {
            return <PressCard content={card} key={uuid()}/>
          })
        }
      </div>
      <div className="central-link">
        <Link to="/" title="More News">
          Show More
        </Link>
      </div>
    </section>
  );
};

export default Press;

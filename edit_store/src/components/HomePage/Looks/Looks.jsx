import look1 from "../../../assets/looks/looks01.jpg";
import look2 from "../../../assets/looks/looks02.jpg";
import look3 from "../../../assets/looks/looks03.jpg";
import look4 from "../../../assets/looks/looks04.jpg";

import { v4 as uuid } from 'uuid';

import Look from "./Look";

const Looks = () => {
  const looks = [];
  
  looks.push(look1,look2,look3,look4);

  return (
    <section id="looks" className="paddingverticaldouble">
      <h2 className="textcenter marginbottomfull">Looks</h2>
      <div className="gridrow">
        {
          looks.map((look,index) =>{
            return <Look image={look} title= {"Look " + (index+1)} key={uuid()}/>
          })
        }
          
      </div>
    </section>
  );
};

export default Looks;

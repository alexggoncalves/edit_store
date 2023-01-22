import talking01 from "../../assets/talking/talking01.png";
import talking02 from "../../assets/talking/talking02.png";
import talking03 from "../../assets/talking/talking03.png";
import talking04 from "../../assets/talking/talking04.png";
import talking05 from "../../assets/talking/talking05.png";
import talking06 from "../../assets/talking/talking06.png";
import talking07 from "../../assets/talking/talking07.png";
import talking08 from "../../assets/talking/talking08.png";

const Talking = () => {
  return (
    <section id="talking" className="paddingverticaldouble">
      <h2 className="textcenter marginbottomfull">Talking about us</h2>
      <div className="gridrow">
        <div className="col-4 col-t-2 col-d-1 offset-1 offset-t-1 offset-d-2 paddingbottomfull">
          <img
            className="imgfit"
            src="{talking01}"
            alt="talking 1"
          />
        </div>
        <div className="col-4 col-t-2 col-d-1 offset-2 offset-t-2 offset-d paddingbottomfull">
          <img
            className="imgfit"
            src={talking02}
            alt="talking 2"
          />
        </div>
        <div className="col-4 col-t-2 col-d-1 offset-1 offset-t-2 offset-d paddingbottomfull">
          <img
            className="imgfit"
            src={talking03}
            alt="talking 3"
          />
        </div>
        <div className="col-4 col-t-2 col-d-1 offset-2 offset-t-1 offset-d  paddingbottomfull">
          <img
            className="imgfit"
            src={talking04}
            alt="talking 4"
          />
        </div>
        <div className="col-4 col-t-2 col-d-1 offset-1 offset-t-2 offset-d  paddingbottomfull">
          <img
            className="imgfit"
            src={talking05}
            alt="talking 5"
          />
        </div>
        <div className="col-4 col-t-2 col-d-1 offset-2 offset-t-2 offset-d paddingbottomfull">
          <img
            className="imgfit"
            src={talking06}
            alt="talking 6"
          />
        </div>
        <div className="col-4 col-t-2 col-d-1 offset-1 offset-t-2 offset-d paddingbottomfull">
          <img
            className="imgfit"
            src={talking07}
            alt="talking 7"
          />
        </div>
        <div className="col-4 col-t-2 col-d-1 offset-2 offset-t-4 offset-d paddingbottomfull">
          <img
            className="imgfit"
            src={talking08}
            alt="talking 8"
          />
        </div>
      </div>
    </section>
  );
};

export default Talking;

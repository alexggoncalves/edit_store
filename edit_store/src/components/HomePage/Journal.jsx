import { Link } from "react-router-dom";
import journal01 from "../../assets/journal/journal01.jpg";
import journal02 from "../../assets/journal/journal02.jpg";
import journal03 from "../../assets/journal/journal03.jpg";

const About = () => {
  return (
    <section id="journal" className="paddingverticaldouble">
      <h2 className="textcenter marginbottomfull">Journal</h2>
      <div className="gridrow">
        <div className="col-12 col-d-6">
          <Link to="/" title="View Journal" className="journal-card">
            <p className="fancytext">Awards - January 2006</p>
            <h3>Royal Designer for Industry</h3>
            <p>
              The title "Royal Designer for Industry" (RDI) is awarded annually
              by the RSA to designers of all disciplines who have achieved
              "sustained design excellence, work of aesthetic value and
              significant benefit to society."
            </p>
            <div className="journal-card-image">
              <img
                className="imgfit"
                //srcSet="imgs/journal/journal01.jpg 720w, imgs/journal/medium/journal01.jpg 360w"
                sizes="(min-width: 750px) 720px, 360px"
                src={journal01}
              />
            </div>
          </Link>
        </div>
        <div className="col-6 col-d-3">
          <Link to="/"
            title="View Journal"
            className="journal-card journal-card-small"
          >
            <p className="fancytext">Awards - January 2011</p>
            <h3>Commander of the Order of Arts and Letters</h3>
            <div className="journal-card-image">
              <img
                className="imgfit"
                //srcSet="imgs/journal/journal02.jpg 720w, imgs/journal/medium/journal02.jpg 360w"
                sizes="(min-width: 1200px) 720px, 360px"
                src={journal02}
              />
            </div>
          </Link>
          <Link to="/"
            title="View Journal"
            className="journal-card journal-card-small"
          >
            <p className="fancytext">Design - January 2020</p>
            <h3>Yohji</h3>
            <p>
              Yohji Yamamoto is widely regarded as ranking among the greatest
              fashion designers of the late twentieth and early twenty-first
              centuries.
            </p>
          </Link>
        </div>
        <div className="col-6 col-d-3">
        <Link to="/"
            title="View Journal"
            className="journal-card journal-card-small"
          >
            <p className="fancytext">Design - January 2014</p>
            <h3>Real Madrid Uniform</h3>
            <p>
              Designs the third jersey (uniform) for Spain's professional soccer
              team, "Real Madrid"
            </p>
          </Link>
          <Link to="/"
            title="View Journal"
            className="journal-card journal-card-small"
          >
            <p className="fancytext">Collections - January 2006</p>
            <h3>New Collection</h3>
            <div className="journal-card-image">
              <img
                className="imgfit"
                //srcSet="imgs/journal/journal03.jpg 720w, imgs/journal/medium/journal03.jpg 360w"
                sizes="(min-width: 1200px) 720px, 360px"
                src={journal03}
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="central-link">
        <a href="#" title="See the Journal">
          See the Journal
        </a>
      </div>
    </section>
  );
};

export default About;

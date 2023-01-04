import Slide from "./Slide";

import slide01_full from "../../../assets/slider/slider01.jpg";
import slide01_medium from "../../../assets/slider/slider01-medium.jpg"
import slide01_small from "../../../assets/slider/slider01-small.jpg"


const Slider = (props) => {
    const slide01 = {
        title: "Yohji Yamamoto",
        subtitle: "Y-3",
        image: {
            full: slide01_full,
            medium: slide01_medium,
            small: slide01_small
        }
    }
    
    return (
        <section className="slider">
                <div className="slider-slides">
                    <Slide content={slide01}/>
                </div>
                <a href="#" className="slider-previous"><i className="icn-chevron-left"></i></a>
                <a href="#" className="slider-next"><i className="icn-chevron-right"></i></a>
        </section>
    )
}

export default Slider;
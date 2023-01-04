//Styles
import "./HomePage.css";

//Components
import Slider from "./Slider/Slider";
import TopProducts from "./TopProducts/TopProducts";
import About from "./About";
import Journal from "./Journal";
import Looks from "./Looks/Looks";

export function HomePage() {
  return (
    <>
      <Slider />
      <TopProducts />
      <About />
      <Journal />
      <Looks />
    </>
  );
}

export default HomePage;

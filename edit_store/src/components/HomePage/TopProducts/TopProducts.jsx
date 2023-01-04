import product01 from "../../../assets/products/product01.jpg"
import product02 from "../../../assets/products/product02.jpg"
import product03 from "../../../assets/products/product03.jpg"
import product04 from "../../../assets/products/product04.jpg"
import product05 from "../../../assets/products/product05.jpg"
import product06 from "../../../assets/products/product06.jpg"
import product07 from "../../../assets/products/product07.jpg"
import product08 from "../../../assets/products/product08.jpg"

//Components
import ProductCard from "./ProductCard"

const TopProducts = () => {
    const topProduct01 = {
        id: 1,
        title: "Black and purple Ren Sneakers",
        category: "Shoes",
        image: product01,
        price: 123,
        new: true,
    }
    const topProduct02 = {
        id: 2,
        title: "Black and white Kaiwa Sneakers",
        category: "Shoes",
        image: product02,
        price: 213,
        new: false,
    }
    const topProduct03 = {
        id: 3,
        title: "Black and white Poplin Polo",
        category: "Tops",
        image: product03,
        price: 312,
        new: false,
    }
    const topProduct04 = {
        id: 4,
        title: "Black Canvas Workwear Cargo Pants",
        category: "Shoes",
        image: product04,
        price: 231,
        new: false,
    }
    const topProduct05 = {
        id: 5,
        title: "Black Classic Broadcloth Parka",
        category: "Tops",
        image: product05,
        price: 321,
        new: false,
    }
    const topProduct06 = {
        id: 6,
        title: "Black Classic Chest Logo Hoodie",
        category: "Tops",
        image: product06,
        price: 322,
        new: true,
    }
    const topProduct07 = {
        id: 7,
        title: "Black Classic Cross Dyed Long Coat",
        category: "Tops",
        image: product07,
        price: 621,
        new: true,
    }
    const topProduct08 = {
        id: 8,
        title: "Black Classic Track Jacket",
        category: "Tops",
        image: product08,
        price: 412,
        new: true,
    }

    return (
        <section id="products" className="product-list bg-graylight paddingtopdouble paddingbottomfull">
                <h1 className="textcenter black">Top Products</h1>

                <div className="gridrow">
                    <ProductCard product={topProduct01}/>
                    <ProductCard product={topProduct02}/>
                    <ProductCard product={topProduct03}/>
                    <ProductCard product={topProduct04}/>
                    <ProductCard product={topProduct05}/>
                    <ProductCard product={topProduct06}/>
                    <ProductCard product={topProduct07}/>
                    <ProductCard product={topProduct08}/>
                </div>
            </section>
    )
}

export default TopProducts
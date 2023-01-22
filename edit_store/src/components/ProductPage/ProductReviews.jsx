const ProductReviews = () => {
    return (
        <div
        className="bg-graylight paddingverticaldouble marginbottomfull"
        id="reviews"
      >
        <h2 className="textcenter">Reviews</h2>
        <div className="gridrow">
          <div className="col-12 col-t-5 col-d-4 offset-t-1 offset-d-2 score">
            <i className="icn-star primary"></i>
            <i className="icn-star primary"></i>
            <i className="icn-star primary"></i>
            <i className="icn-star primary"></i>
            <i className="icn-star"></i>
            <span>4.2 of 5</span>
          </div>
          <div className="col-12 col-t-5 col-d-4 textright">
            <a
              className="graymedium small"
              href="#"
              title="Share your thoughts with other customers"
            >
              Share your thoughts with other customers
            </a>
          </div>
          <div className="col-12 col-t-10 col-d-8 offset-t-1 offset-d-2">
            <p>Top customer reviews</p>
            <div className="review">
              <div className="score">
                <i className="icn-star primary"></i>
                <i className="icn-star primary"></i>
                <i className="icn-star primary"></i>
                <i className="icn-star primary"></i>
                <i className="icn-star primary"></i>
                <span>5 of 5</span>
              </div>
              <div className="graymedium">
                By <span className="black">Zé Manel</span> on February 18th,
                2020
              </div>
              <p>
                Quisque dignissim neque in odio laoreet sodales. Phasellus
                gravida facilisis est. Ut nec metus lobortis, euismod felis
                eget, ornare erat. Nam tincidunt sem elit, a facilisis nibh
                maximus vitae. Proin suscipit augue mi, id sollicitudin orci
                lacinia vitae.
              </p>
            </div>
            <div>
              <a className="secondary fancytext" href="#">
                Show more reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProductReviews;
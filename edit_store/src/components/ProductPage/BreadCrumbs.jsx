const BreadCrumbs = (props) => {
  return (
    <>
      <div className="breadcrumb">
        <div className="gridrow">
          <div className="col-12">
            <a href="productlist.html" title="Tops">
              Tops
            </a>{" "}
            <i className="icn-chevron-right"></i>
            <a href="productlist.html" title="Sweaters">
              Sweaters
            </a>{" "}
            <i className="icn-chevron-right"></i>
            Red Classic Chest Logo Hoodie
          </div>
        </div>
      </div>
    </>
  );
};

export default BreadCrumbs;

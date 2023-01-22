const Thumbnail = (props) => {
  return (
    <a href="#" title="Red Classic Chest Logo Hoodie 1" className="open">
      <img
        src={props.image}
        className="imgfit"
        alt="Red Classic Chest Logo Hoodie 1"
      />
    </a>
  );
};

export default Thumbnail;

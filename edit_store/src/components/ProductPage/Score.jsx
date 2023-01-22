const Score = (props) => {
  
    if(props.score)
    return (
    <div className="col-6 textright score">
      <i className="icn-star primary"></i>
      <i className="icn-star primary"></i>
      <i className="icn-star primary"></i>
      <i className="icn-star primary"></i>
      <i className="icn-star"></i>
      <span>{props.score.toFixed(1)} of 5</span>
    </div>
  );
};

export default Score;

const ReviewSub = (props) => {
  return (
    <div className="review">
      <div className="review-header">
        <div className="image-holder">
          <img src={props.image} alt="profile" />
        </div>
        <div>
          <h4>{props.name}</h4>
          <h5>Verified Buyer</h5>
        </div>
      </div>
      <p>"{props.desc}"</p>
    </div>
  );
};

export default ReviewSub;

const RatingSub = (props) => {
  return (
    <div className="rating">
      <div className="icon-star-holder">
        <img src="images/icon-star.svg" alt="star" />
        <img src="images/icon-star.svg" alt="star" />
        <img src="images/icon-star.svg" alt="star" />
        <img src="images/icon-star.svg" alt="star" />
        <img src="images/icon-star.svg" alt="star" />
      </div>
      <h4>Rated 5 stars in {props.name}</h4>
    </div>
  );
};

export default RatingSub;

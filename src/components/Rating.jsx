import RatingSub from "./RatingSub";

const Rating = () => {
  return (
    <div className="rating-container">
      <RatingSub name="Reviews" />
      <RatingSub name="Report Guru" />
      <RatingSub name="BestTech" />
    </div>
  );
};

export default Rating;

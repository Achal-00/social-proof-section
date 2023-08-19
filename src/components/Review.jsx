import ReviewSub from "./ReviewSub";

const Review = () => {
  return (
    <div className="review-container">
      <ReviewSub
        name="Colton Smith"
        image="images/image-colton.jpg"
        desc="We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also recieved it in time. Excellent!"
      />
      <ReviewSub
        name="Irene Roberts"
        image="images/image-irene.jpg"
        desc="Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
      />
      <ReviewSub
        name="Anne Wallace"
        image="images/image-anne.jpg"
        desc="Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"
      />
    </div>
  );
};

export default Review;

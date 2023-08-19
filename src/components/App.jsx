import React from "react";
import Description from "./Description";
import Rating from "./Rating";
import Review from "./Review";

const App = () => {
  return (
    <div>
      <picture className="pattern-top">
        <source
          srcset="images/bg-pattern-top-mobile.svg"
          alt="bg-pattern"
          media="(width < 75em)"
        />
        <img src="images/bg-pattern-top-desktop.svg" alt="bg-pattern" />
      </picture>
      <picture className="pattern-bottom">
        <source
          srcset="images/bg-pattern-bottom-mobile.svg"
          alt="bg-pattern"
          media="(width < 75em)"
        />
        <img src="images/bg-pattern-bottom-desktop.svg" alt="bg-pattern" />
      </picture>
      <div className="container">
        <Description />
        <Rating />
        <Review />
      </div>
    </div>
  );
};

export default App;

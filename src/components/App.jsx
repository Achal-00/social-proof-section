import React from "react";
import Description from "./Description";
import Rating from "./Rating";
import Review from "./Review";
import { useEffect } from "react";
import { gsap } from "gsap";

const App = () => {
  useEffect(() => {
    const onPageLoad = () => {
      let tl = gsap.timeline();
      tl.to(".container", {
        display: "grid",
      })
        .fromTo(
          ".description-container",
          { opacity: 0 },
          { opacity: 1, duration: 1 }
        )
        .fromTo(
          ".rating-container .rating:nth-child(1)",
          { x: "20%", opacity: 0 },
          { x: 0, opacity: 1 }
        )
        .fromTo(
          ".rating-container .rating:nth-child(2)",
          { x: "20%", opacity: 0 },
          { x: 0, opacity: 1 }
        )
        .fromTo(
          ".rating-container .rating:nth-child(3)",
          { x: "20%", opacity: 0 },
          { x: 0, opacity: 1 }
        )
        .fromTo(
          ".review-container .review:nth-child(1)",
          { y: "20%", opacity: 0 },
          { y: 0, opacity: 1 }
        )
        .fromTo(
          ".review-container .review:nth-child(2)",
          { y: "20%", opacity: 0 },
          { y: 0, opacity: 1 }
        )
        .fromTo(
          ".review-container .review:nth-child(3)",
          { y: "20%", opacity: 0 },
          { y: 0, opacity: 1 }
        );
    };

    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

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

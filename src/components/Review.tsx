import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import { reviewsData } from "../data";

export const Review = () => {
  const [index, setIndex] = useState<number>(0);
  const { name, job, image, text } = reviewsData[index];
  console.log(name);
  console.log(reviewsData.length);

  const checkNumber = (number: number) => {
    // check that number is greater than reviewsData.length -1, why -1 because we get 4 from reviewsData.length
    if (number > reviewsData.length - 1) {
      return 0;
    }
    if (number < 0) {
      // we get the index of the last element
      return reviewsData.length - 1;
    }
    return number;
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviewsData.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const prePerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button
          className="prev-btn"
          onClick={() =>
            setIndex((index - 1 + reviewsData.length) % reviewsData.length)
          }
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={() => setIndex((index + 1) % reviewsData.length)}
        >
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Review;

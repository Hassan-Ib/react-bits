import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, removeTour, fetchTours }) => {
  // const [isEmpty, setIsEmpty] = useState(false);
  if (tours.length < 1) {
    return (
      <div className="title">
        <h2>no tours left</h2>
        <button className="btn" onClick={fetchTours}>
          refresh
        </button>
      </div>
    );
  }
  return (
    <section>
      <div className="title">
        <h2>Our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour {...tour} removeTour={removeTour} key={tour.id} />;
        })}
      </div>
    </section>
  );
};

export default Tours;

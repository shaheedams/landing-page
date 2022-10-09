const Slide = ({ data }) => {
  console.log();
  return (
    <div className="slide">
      <img src={data.img} className="slideImg" alt="slideImg"></img>
      <div className="slideContent">
        <p className="slideHeading">{data.heading}</p>
        <p className="slideSub">{data.sub}</p>
        <div className="stars flex">
          <img src="images/star.png" alt="star"></img>
          <p>{data.rating}</p>
        </div>
        <div className="price flex">
          <h2 className="slidePrice">{data.price}</h2>
          <p className="slideDays">{data.days}</p>
        </div>
      </div>
    </div>
  );
};

export default Slide;

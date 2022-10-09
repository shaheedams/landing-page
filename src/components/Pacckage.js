import Slide from "./Slide";

const Package = () => {
  const slidesArray = [
    {
      id: 1,
      img: "images/slide1.png",
      heading: "Fall in love among the winding streets and snow-covered",
      sub: "Prague, Czechia",
      rating: 4.9,
      price: "$200",
      days: "10 days tour",
    },
    {
      id: 2,
      img: "images/slide2.png",
      heading: "History is not about the past but a map of the past",
      sub: "Beijing, China",
      rating: 4.9,
      price: "$450",
      days: "5 days tour",
    },
    {
      id: 3,
      img: "images/slide3.png",
      heading: "The unique character as a symbol of taste and ostentation",
      sub: "İstanbul, Turkey",
      rating: 4.9,
      price: "$150",
      days: "7 days tour",
    },
    {
      id: 4,
      img: "images/slide4.png",
      heading: "You don't want to pitch a tent and live inside the Louvre",
      sub: "Paris, France",
      rating: 4.9,
      price: "$100",
      days: "8 days tour",
    },
  ];
  return (
    <section className="package">
      <div className="packageContainer">
        <p className="packageText">Tour Packages</p>
        <div className="packageHeader flex">
          <h1 className="packageHeading">
            The amazing places around <br /> the world
          </h1>
          <div>
            <img src="images/left.png" className="arrow" alt="arrow"></img>
            <img src="images/right.png" className="arrow" alt="arrow"></img>
          </div>
        </div>
        <div className="slides flex">
          {slidesArray.map((e) => {
            return <Slide key={e.id} data={e} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Package;

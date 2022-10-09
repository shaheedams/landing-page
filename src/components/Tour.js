const Tour = () => {
    return (
      <section className="tour">
        <div className="tourContainer flex">
          <h1 className="aboutTextMain">
            We can do anything we want to if we stick to it long enough.
          </h1>
          <p className="aboutCoText">
            Do what you can, with what you have, where you are.
          </p>
          <button className="tourBtn">See all tours</button>
          <div className="cardsContainer">
            <div className="cardL cardLleft">
              <img src="images/cardImg1.png" alt="cardImg"></img>
              <h5 className="cardHead">Porto, Portugal</h5>
              <div className="flex cardSub">
                <h5>$150</h5>
                <p>7 days tour</p>
              </div>
            </div>

            <div className="cardL cardLright">
              <img src="images/cardImg4.png" alt="cardImg"></img>
              <h5 className="cardHead">Amsterdam, Netherland</h5>
              <div className="flex cardSub">
                <h5>$150</h5>
                <p>10 days tour</p>
              </div>
            </div>

            <div className="cardS cardSleft">
              <img src="images/cardImg2.png" alt="cardImg"></img>
              <h5 className="cardHead">Paris, France</h5>
              <div className="flex cardSub">
                <h5>$100</h5>
                <p>5 days tour</p>
              </div>
            </div>

            <div className="cardS cardSright">
              <img src="images/cardImg3.png" alt="cardImg"></img>
              <h5 className="cardHead">Paris, France</h5>
              <div className="flex cardSub">
                <h5>$250</h5>
                <p>6 days tour</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Tour;
const Home = () => {
  return (
    <section className="home">
      <div className="homeContainer flex">
        <div className="homeLeft">
          <h1 className="heading">
            Dare to live the life you've always <br /> wanted.
          </h1>
          <p className="subText">
            Life is short and the world is wide. So, better <br /> get started.
          </p>
          <div className="searchBox flex">
            <div className="">
              <img src="images/Vector.png" alt="vec"></img>
            </div>
            <div className="coBox">
              <div className="flex">
                <p className="gray">Location</p>
                <img src="images/arrow-down.png" alt="arrow"></img>
              </div>
              <p className="blue">Allentown, New Mexico</p>
            </div>
            <div className="divider"></div>
            <div className="">
              <img src="images/calendar.png" alt="cal"></img>
            </div>
            <div className="coBox">
              <div className="flex">
                <p className="gray">Date</p>
                <img src="images/arrow-down.png" alt="arrow"></img>
              </div>
              <p className="blue">Allentown, New Mexico</p>
            </div>
            <div className="">
              <img src="images/Search.png" alt="search"></img>
            </div>
          </div>
        </div>
        <div className="homeRight">
          <img src="images/home.png" alt="asideImg"></img>
        </div>
      </div>
    </section>
  );
};

export default Home;

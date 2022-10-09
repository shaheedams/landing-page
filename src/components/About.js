const About = () => {
  return (
    <section className="about">
      <div className="aboutContainer flex">
        <div className="aboutLeft">
          <img src="images/about.png" alt="asideImg"></img>
        </div>
        <div className="aboutRight">
          <p className="aboutText">About us</p>
          <h1 className="aboutTextMain">
            Our tour plan is to fulfil your dream wish
          </h1>
          <p className="aboutCoText">
            Understand to achieve anything requires faith and belief in
            yourself, vision, hard work, determination, and dedication.
          </p>
          <div className="insights flex">
            <div className="insight">
              <h1>15</h1>
              <p>Years of Experience</p>
            </div>
            <div className="insight">
              <h1>1K</h1>
              <p>Sucessful Trips</p>
            </div>
            <div className="insight">
              <h1>20K</h1>
              <p>Happy Customers</p>
            </div>
            <div className="insight">
              <h1>4.9</h1>
              <p>Overall Rating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

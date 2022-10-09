const Testimonial = () => {
    const slidesArray = [
      {
        id: 1,
        img: "images/Ellipse1.png",
        name: "Eleanor Pena",
        sub: "UI/UX Designer",
        des: "Customer testimonials are more effective than paid marketing copy as they take the spotlight away from the seller to shine it on the customers. ",
      },
      {
        id: 2,
        img: "images/Ellipse2.png",
        name: "Theresa Webb",
        sub: "Vlogger",
        des: "In promotion and advertising, a testimonial or show consists of a person's written statement extolling the virtue of a product.",
      },
      {
        id: 3,
        img: "images/Ellipse3.png",
        name: "Annette Black",
        sub: "Doctor",
        des: "Testimonials work because they aren''t strong sales pitches, they come across in an unbiased voice and establish trust",
      },
    ];
  return (
    <section className="testimonial">
      <div className="testimonialContainer flex">
        <div className="testimonialHeader flex">
          <p>Testimonial</p>
          <h1>Satisfied travellers around the world</h1>
        </div>
              <div className="testimonialSlides flex">
                  {
                      slidesArray.map((e) => {
                          return (
                              <div className="testimonialSlide flex" key={e.id}>
                                  <img src="images/quots.png"  className="quotes" alt="quotes"></img>
                              <img src={e.img} alt="img"></img>
                              <p className="testHeader">{e.name}</p>
                              <p className="testSub">{e.sub}</p>
                              <img src="images/Stars.png" alt="stars"></img>
                              <p className="testSub">{e.des}</p>
                            </div>
                          );
                      })
                  }
          
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

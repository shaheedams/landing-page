const Footer = () => {
    return (
      <section className="footer">
        <div className="footerContainer flex">
          <div className="footSec1 foot">
            <img src="images/Tripy.png" alt="logo"></img>
            <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
            <div className="social flex">
              <img src="images/facebook.png" alt="social"></img>
              <img src="images/instagram.png" alt="social"></img>
              <img src="images/youtube.png" alt="social"></img>
            </div>
          </div>
          <div className="footSec2 foot">
            <h3>About</h3>
            <p>About us</p>
            <p>Features</p>
            <p>News</p>
            <p>Plans</p>
          </div>
          <div className="footSec3 foot">
            <h3>Company</h3>
            <p>Why Tripy</p>
            <p>Partner with us</p>
            <p>FAQ</p>
            <p>Blog</p>
          </div>
          <div className="footSec4 foot">
            <h3>Support</h3>
            <p>Account</p>
            <p>Support center</p>
            <p>Feedback</p>
            <p>Contact us</p>
          </div>
          <div className="footSec5 foot">
            <h3>Newsletter</h3>
            <p>Subscribe our newsletter and get exciting offers </p>
            <div className="searchBar">
              <input
                type="email"
                className="input"
                placeholder="Enter your email address"
              ></input>
              <img src="images/send.png" alt="send"></img>
            </div>
          </div>
        </div>
      </section>
    );
}


export default Footer;
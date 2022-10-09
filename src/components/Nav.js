const Nav = () => {
    return (
      <section className="navBar">
        <div className="navContainer flex">
          <div className="logo">
            <img className="brand" alt="logo" src="images/Tripy.png"></img>
          </div>
          <div className="menu flex">
            <div className="link">
              <h4>Home</h4>
              <span className="activeBar"></span>
            </div>
            <div className="link">
              <h4>About</h4>
              <span className="activeBar"></span>
            </div>
            <div className="link">
              <h4>Services</h4>
              <span className="activeBar"></span>
            </div>
            <div className="link">
              <h4>Price</h4>
              <span className="activeBar"></span>
            </div>
            <div className="link">
              <h4>Contact</h4>
              <span className="activeBar"></span>
            </div>
          </div>
          <div className="login flex">
            <div className="log">
              <button>Login</button>
            </div>
            <div className="reg">
              <button>Register</button>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Nav;
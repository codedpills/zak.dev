import React from "react";
import "./Hero.css";
import me from '../../assets/images/me.jpg'

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="hero-content">
              <div className="row">
                <div className="col-md-3">
                    <img src={me} className="img-fluid rounded-circle" alt=""/>
                </div>
                <div className="col">
                  <h3 className="text-uppercase">
                    Hello, I'm Mohammed Zakari, a fullstack developer.
                  </h3>
                  <br/>
                  <p>
                    I specialize in custom web app development. If you're a
                    business seeking a web presence or are looking to hire,
                    contact me.
                  </p>
                  <br/>
                  <p>
                    <a
                      href="#contact"
                      className="btn btn-lg btn-warning rounded-pill"
                    >
                      Contact me
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

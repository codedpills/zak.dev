import React from "react";
import "./Projects.css";

import photosnap from "../../assets/images/projects/photosnap.png";
import pig_game from "../../assets/images/projects/pig-game.png";
import todo from "../../assets/images/projects/todo.png";
import casibus from "../../assets/images/projects/casibus.png";
import flydoctor from "../../assets/images/projects/flydoctor.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <div className="projects-content">
              <h4 className="text-uppercase text-center">projects</h4>
              <br />
              <div className="card-columns">
                <div className="card">
                  <img
                    src={photosnap}
                    className="card-img-top"
                    alt="PhotoSnap"
                  />
                  <div className="card-body">
                    <h5 className="card-title">PhotoSnap</h5>
                    <p className="card-text">
                      PhotoSnap is a platform for photographers and visual
                      storytellers. We make it easy to share photos, tell
                      stories and connect with others.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img src={pig_game} className="card-img-top" alt="Pig game" />
                  <div className="card-body">
                    <h5 className="card-title">Pig Game</h5>
                    <p className="card-text">
                      Battle it out with another player to see who can roll the
                      dice of luck.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img
                    src={todo}
                    className="card-img-top"
                    alt="Multi-theme Todo"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Multi-theme Todo</h5>
                    <p className="card-text">
                      Plan your whole day activities using this multi-theme todo
                      app.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img src={casibus} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Casibus</h5>
                    <p className="card-text">
                      Discover and share critical information with other health
                      professionals in real time.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img src={flydoctor} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">FlyDoctor</h5>
                    <p className="card-text">
                      Doctors - Fight COVID-19 with FlyDoctor. Consult with
                      patients from the comfort of your bed.
                    </p>
                  </div>
                </div>
                <Link to="/portfolio">
                  <div className="card bg-card text-white text-center p-3">
                    <blockquote className="blockquote mb-0">
                      <p>
                        <i
                          className="bi-layout-wtf"
                          style={{ fontSize: "3rem" }}
                        ></i>
                      </p>
                      <p>These and many other mind blowing projects.</p>
                      <footer className="text-white">
                        <small>See the full portfolio --&gt;</small>
                      </footer>
                    </blockquote>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import "./Portfolio.css";

import photosnap from "../../assets/images/projects/photosnap.png";
import pig_game from "../../assets/images/projects/pig-game.png";
import todo from "../../assets/images/projects/todo.png";
import casibus from "../../assets/images/projects/casibus.png";
import flydoctor from "../../assets/images/projects/flydoctor.png";

const portfolioContent = [
  {
    title: "PhotoSnap",
    image: photosnap,
    description:
      "PhotoSnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
    link: "https://condescending-payne-d65bab.netlify.app/",
  },
  {
    title: "Pig Game",
    image: pig_game,
    description:
      "Battle it out with another player to see who can roll the dice of luck.",
    link: "https://silly-fermat-9bb3c7.netlify.app/",
  },
  {
    title: "Multi-theme Todo",
    image: todo,
    description:
      "Plan your whole day activities using this multi-theme todo app.",
    link: "https://tender-booth-d9ba25.netlify.app/",
  },
  {
    title: "Casibus",
    image: casibus,
    description:
      "Discover and share critical information with other health professionals in real time.",
    link: "https://epic-bhabha-093c92.netlify.app/",
  },
  {
    title: "FlyDoctor",
    image: flydoctor,
    description:
      "Doctors - Fight COVID-19 with FlyDoctor. Consult with patients from the comfort of your bed.",
    link: "https://eloquent-goldberg-087eb4.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio-content">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <h4 className="text-uppercase text-center">Portfolio</h4>
            {portfolioContent.map((item, id) => (
              <div className="row portfolio-item" key={id}>
                <div className="col-md-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6">
                  <h3>{item.title}</h3>
                  <br />
                  <p>{item.description}</p>
                  <br />
                  <p>
                    <a
                      href={item.link}
                      target="_blank"
                      className="btn btn-warning rounded-pill"
                    >
                      Visit site
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

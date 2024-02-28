import React from "react";
import css from "../assets/tech/css.png"
import git from "../assets/tech/git.png"
import html from "../assets/tech/html.png"
import javas from "../assets/tech/javascript.png"
import mongo from "../assets/tech/mongodb.png"
import reactjs from "../assets/tech/reactjs.png"
import nodejs from "../assets/tech/nodejs.png"
import cpp from  "../assets/tech/cpp.png"
import tail from "../assets/tech/tailwind.png"
const techhelper = () => {
  return (
    <div className="container-tech">
      <div className="grid grid-cols-5 gap-4 md:grid-cols-6">
      <div className="col mx-2">
          <div className="avatar">
            <a href="https://codepen.io/MarioDesigns/">
              <img
                src={cpp}
                alt="Skytsunami"
              />
            </a>
          </div>
        </div>
        <div className="col mx-2">
          <div className="avatar">
            <a href="https://codepen.io/MarioDesigns/">
              <img
                src={css}
                alt="Skytsunami"
              />
            </a>
          </div>
        </div>
        <div className="col mx-2">
          <div className="avatar">
            <a href="https://codepen.io/MarioDesigns/">
              <img
                src={git}
                alt="Skytsunami"
              />
            </a>
          </div>
        </div>
        <div className="col mx-2">
          <div className="avatar">
            <a href="https://codepen.io/MarioDesigns/">
              <img
                src={html}
                alt="Skytsunami"
              />
            </a>
          </div>
        </div>
        <div className="col mx-2">
          <div className="avatar">
            <a href="https://codepen.io/MarioDesigns/">
              <img
                src={javas}
                alt="Skytsunami"
              />
            </a>
          </div>
        </div>
        <div className="col mx-2">
          <div className="avatar">
            <a href="https://codepen.io/MarioDesigns/">
              <img
                src={mongo}
                alt="Skytsunami"
              />
            </a>
          </div>
        </div>
        <div className="col mx-2">
          <div className="avatar">
            <a href="https://codepen.io/MarioDesigns/">
              <img
                src={nodejs}
                alt="Skytsunami"
              />
            </a>
          </div>
        </div>
        <div className="col mx-2">
          <div className="avatar">
            <a href="https://codepen.io/MarioDesigns/">
              <img
                src={reactjs}
                alt="Skytsunami"
              />
            </a>
          </div>
        </div>
        <div className="col mx-2">
          <div className="avatar">
            <a href="https://codepen.io/MarioDesigns/">
              <img
                src={tail}
                alt="Skytsunami"
              />
            </a>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default techhelper;

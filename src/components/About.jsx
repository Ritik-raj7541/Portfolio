import React from "react";
import { styles } from "../styles";
import a from "../assets/overview/a.jpg";
import b from "../assets/overview/b.jpg";
import c from "../assets/overview/c.jpeg";
import d from "../assets/overview/d.jpeg";
// import Tilt from 'react-tilt' ;

const About = () => {
  return (
    <>
      <div className="container mx-6 about-main">
        <h1 className={`${styles.heroSubText} mt-2 text-white-100`}>
          Overview
        </h1>
      </div>
      <div className="container about-mid">
        <div className="container about my-10">
          <a
            href="https://www.mythrillfiction.com/the-dark-rider"
            alt="Mythrill"
            target="_blank"
          >
            <div className="card-about">
              <div className="wrapper">
                <img
                  src={a}
                  className="cover-image"
                />
              </div>
              <img
                src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png"
                className="title"
              />
              <img
                src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
                className="character"
              />
            </div>
          </a>

          <a
            href="https://www.mythrillfiction.com/force-mage"
            alt="Mythrill"
            target="_blank"
          >
            <div className="card-about">
              <div className="wrapper">
                <img
                  src={b}
                  className="cover-image"
                />
              </div>
              <img
                src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png"
                className="title"
              />
              <img
                src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
                className="character"
              />
            </div>
          </a>
        </div>
      </div>

      <div className="container about-main">
        <div className="container mx-5 my-2 overview">
          I'm a skilled computer science final year student at Birla Institute
          of technology Mesra. I'm MERN developer with problem solving skill. I
          usually solve codeforces, leetcode, gfg etc. I'm quick learner and
          collaborate closely with others. I also have intrest in devops, app
          development, AI and ML.
        </div>
      </div>
    </>
  );
};

export default About;

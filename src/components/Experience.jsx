import React from "react";
import { styles } from "../styles";
import a from "../assets/experience/a.jpg"
import b from "../assets/experience/b.jpg"
const Experience = () => {
  return (
    <>
      <div className="container experience my-4">
        <h1 className={`${styles.heroSubText} mt-2 text-white-100`}>
          Experience
        </h1>
      </div>
      <div className=" my-4 container exp-over">
        <div className="card-exp">
        <img className="card-img" src={b} alt="" />
          <div className="card-body">
            <span className="bg"></span>
            <span className="bg"></span>
            <span className="bg"></span>
            <div className="content">
              <h2 className="title-exp">Web Development</h2>
              <p className="para">
                Designed and implemented backend of a web application which is used to authenticate students in hostel mess.
              </p>
              <h2 className="title-exp">Skills</h2>
              <p className="para">
                Node.js <br /> Express.js <br /> Mongoose <br /> JWT
              </p>
            </div>
          </div>
        </div>

        <div className="card-exp">
            <img className="card-img" src={a} alt="" />
          <div className="card-body">
            <span className="bg"></span>
            <span className="bg"></span>
            <span className="bg"></span>
            <div className="content">
            <h2 className="title">Machine Learning</h2>
              <p className="para">
                Designed and implemented user interface of Handwritten digit and character recognition system.
              </p>
              <h2 className="title">Skills</h2>
              <p className="para">
                Python <br /> maths/coordinations <br /> CNN <br /> Tensorflow
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;

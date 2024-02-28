import React from "react";
import Techhelper from "../helpers/techhelper";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
      <div className="container experience my-5">
        <h1 className={`${styles.heroSubText} mt-2 text-white-100`}>Tech</h1>
      </div>

      <Techhelper />
    </>
  );
};

export default Tech;

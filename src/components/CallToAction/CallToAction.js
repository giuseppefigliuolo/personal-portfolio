import React from "react";
import style from "./styleCta.module.scss";

const CallToAction = ({ text, link, btnFunction }) => {
  return link ? (
    <a href={link} target="_blank">
      <button onClick={btnFunction}>{text}</button>
    </a>
  ) : (
    <button onClick={btnFunction}>{text}</button>
  );
};

export default CallToAction;

import React from "react";
import "./Card.css";

const Card = (props) => {
  // chidren으로 불러올 tag들내에서 사용하는 className을 통합하여
  // className으로 지정해야 정상적으로 css 가 적용되어 표출됨
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;

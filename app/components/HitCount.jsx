import React from "react";
import { hitCounter } from "../styles/hit-counter.scss";

const HitCount = props => {
  const { shipSize, hits } = props;
  const _renderCount = () => {
    const url = "http://dunstanzheng.com/battleship";
    return [...Array(shipSize)].map((number, i) => {
      if (hits === 0) {
        return (<img key={i} className="not-hit" src={`${url}/miss-small.png`}/>);
        // decrement one to account for index starting at 0
      } else if (i <= (hits - 1)) {
        return (<img key={i} className="hit" src={`${url}/hit-legend.png`}/>)
      } else {
        return (<img key={i} className="not-hit" src={`${url}/miss-small.png`}/>);
      }
    });
  };
  return (
    <div className={hitCounter}>
      {_renderCount()}
    </div>
  );
};

export default HitCount;

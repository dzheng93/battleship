import React from "react";
import HitCount from "./HitCount";
import { legend } from "../styles/legend.scss";

const Legend = props => {
  const { shipHitCount, ships } = props;
  const _renderLegend = () => {
    return (
      Object.keys(ships).map((ship, i) => {
        return (
        <div key={i} className={ship}>
          <img
            className="ship-icon"
            src={`http://dunstanzheng.com/battleship/${ship}.png`}
          />
          <HitCount
            hits={shipHitCount[ship]}
            shipSize={ships[ship].size}
          />
        </div>
        );
      })
    );
  };
  return (
    <div className={legend}>
      {_renderLegend()}
    </div>
  );
};

export default Legend;

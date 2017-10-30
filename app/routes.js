import React from "react";
import { Route, Switch } from "react-router-dom";
import BattleShip from "./components/BattleShip";

export default (
	<Switch>
		<Route exact path="/" component={BattleShip} />
	</Switch>
);

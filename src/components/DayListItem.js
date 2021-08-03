import { prop } from "ramda";
import React from "react";
import "./DayListItem.scss";
var classNames = require('classnames');

export default function DayListItem(props) {
    const DayClass = classNames("DayListitem", {
        "day-list__item--selected ": props.selected,
        "day-list__item--full":props.spots
      });
  const formatSpots = () => {
      if(props.spots > 1){
          return props.spots + " spots remaining"; 
      }else if(props.spots === 1){
        return "1 spot remaining";
    }
      else{
          return "no spots remaining";
      }
  }
  return (
    <li className="day-list__item" onClick={() => props.setDay(props.name)}>
      <h2 className= {DayClass}>{props.name}</h2>
      <h3 className={DayClass}>{formatSpots()}</h3>
    </li>
  );
}


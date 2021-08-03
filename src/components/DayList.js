import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
    const Dayslisted = props.days.map(day => {
        return (
            <li key={day.id}>
                <DayListItem
                    name={day.name}
                    spots={day.spots}
                    selected={day.name === props.day}
                    setDay={props.setDay} />
            </li>
        );
    });

    return <ul>{Dayslisted}</ul>;
};
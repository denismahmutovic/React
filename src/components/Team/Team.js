import React from "react";
import "./Team.css";

export default function Team({ name, points, onDeleteTeam }) {
  const [array, SetArray] = React.useState();
  return (
    <div className="Team-card">
      <p>{name}</p>
      <p>{points}</p>
      <button onClick={onDeleteTeam}>x</button>
    </div>
  );
}

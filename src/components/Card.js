import React from 'react'
import "./Card.css"




export const Card = ({image,name,occcupation}) => {
  return (
    <div className="card">
  <div className="container">

    <h4><b>{name}</b></h4>
    <p>{occcupation}</p>
  </div>
</div>
  )
}

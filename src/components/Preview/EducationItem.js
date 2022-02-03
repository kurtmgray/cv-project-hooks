import React from "react";

export default function EducationItem(props) {
  return (
    <div>
      <h3>{props.university}</h3>
      <p>{props.city}</p>
      <p>{props.degree}</p>
      <p>{props.major}</p>
      <p>{props.attFrom}-{props.attUntil}</p>
    </div>
  )
}
import React from "react";

export default function ExperienceItem (props) {
  return (
    <div>
      <h3>{props.jobTitle}</h3>
      <p>{props.company}</p>
      <p>{props.citySt}</p>
      <p>{props.workFrom}-{props.workUntil}</p>
    </div>
  )

}
import React from 'react'

function Education(props) {
  return (
    <div id={props.id}>
      <form>
          <input 
            onChange={props.handleEducationChange}
            id={props.id}
            className="one-line" 
            type="text" 
            name="university" 
            placeholder="University"
            value={props.university}>
          </input>
          <input 
            onChange={props.handleEducationChange}
            id={props.id}
            className="one-line" 
            type="text" 
            name="city" 
            placeholder="City"
            value={props.city}>
          </input>
          <input 
            onChange={props.handleEducationChange}
            id={props.id}
            className="one-line" 
            type="text" 
            name="degree" 
            placeholder="Degree"
            value={props.degree}>
          </input>                
          <input 
            onChange={props.handleEducationChange}
            id={props.id}
            className="one-line" 
            type="text" 
            name="major" 
            placeholder="Major"
            value={props.major}>
          </input>                
          <input 
            onChange={props.handleEducationChange}
            id={props.id}
            className="one-line" 
            type="text" 
            name="attFrom" 
            placeholder="Attended from"
            value={props.attFrom}>
          </input>                
          <input 
            onChange={props.handleEducationChange}
            id={props.id}
            className="one-line" 
            type="text" 
            name="attUntil" 
            placeholder="Attended until"
            value={props.attUntil}>
          </input>
          <button onClick={props.handleEducationDelete} name="deleteEducation" id={props.id}>Delete</button>
      </form>
    </div>
    )
  }

export default Education
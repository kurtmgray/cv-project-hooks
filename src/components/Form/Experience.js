import React from 'react'

function Experience(props){
  return (
    <div id={props.id}>
      <form>
        <input 
          onChange={props.handleExperienceChange}
          id={props.id}
          className="one-line" 
          type="text" 
          name="jobTitle" 
          placeholder="Job Title"
          value={props.jobTitle}>
        </input>
        <input 
          onChange={props.handleExperienceChange}
          id={props.id}
          className="one-line" 
          type="text" 
          name="company" 
          placeholder="Company"
          value={props.company}>
        </input>
        <input 
          onChange={props.handleExperienceChange}
          className="one-line"               
          id={props.id}
          type="text" 
          name="citySt" 
          placeholder="City, State"
          value={props.citySt}>
        </input>
        <input 
          onChange={props.handleExperienceChange}
          className="one-line" 
          id={props.id}
          type="text" 
          name="workFrom" 
          placeholder="Worked from"
          value={props.workFrom}>
        </input>
        <input 
          onChange={props.handleExperienceChange}
          id={props.id}
          className="one-line" 
          type="text" 
          name="workUntil" 
          placeholder="Worked until"
          value={props.workUntil}>
        </input>
        <button onClick={props.handleExperienceDelete} id={props.id}>Delete</button>
      </form>
    </div>
  ) 
}

export default Experience
import React, { Component } from 'react'
import ExperienceItem from './ExperienceItem'
import EducationItem from './EducationItem'

class PreviewCV extends Component {
  
  render() {
    const { personalState, experienceArr, educationArr } = this.props
    
    const experienceItems = experienceArr.map(job => (
      <ExperienceItem 
        key={job.exKey}
        jobTitle={job.jobTitle} 
        company={job.company} 
        citySt={job.citySt} 
        workFrom={job.workFrom} 
        workUntil={job.workUntil}
      />  
    ))
    const educationItems = educationArr.map(school => (
      <EducationItem
        key={school.edKey}
        university={school.university}
        city={school.city}
        degree={school.degree}
        major={school.major}
        attFrom={school.attFrom}
        attUntil={school.attUntil}
      />  
    ))
    return (
      <div>
        <h1>Preview</h1>
        <h2>{personalState.fName} {personalState.lName}</h2>
        <h3>{personalState.title}</h3>
        <p>{personalState.address}</p>
        <p>{personalState.phone}</p>
        <p>{personalState.email}</p>
        <p>{personalState.description}</p>
        {experienceItems}
        {educationItems}
      </div>
    )
  }  
}

export default PreviewCV
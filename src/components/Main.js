import React, { useState } from 'react'
import Personal from './Form/Personal'
import Education from './Form/Education'
import Experience from './Form/Experience'
import PreviewCV from './Preview/PreviewCV'
import uniqid from "uniqid";

function Main() {

  const [personalState, setPersonalState] = useState({
    fName: '',
    lName: '',
    title: '',
    address: '',
    phone: '',
    email: '',
    description: '',
  })
  const [educationState, setEducationState] = useState([{
    university: '',
    city: '',
    degree: '',
    major: '',
    attFrom: '',
    attUntil: '',
    edKey: uniqid(),
    id: uniqid()
  }])

  const [experienceState, setExperienceState] = useState([{
    jobTitle: '',
    company: '',
    citySt: '',
    workFrom: '',
    workUntil: '',
    exKey: uniqid(),
    id: uniqid()
  }])

  const handlePersonalChange = (e) => {
    setPersonalState(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })
      console.log(personalState)
  }

  const handleExperienceChange = (e) => {
    setExperienceState(prevState => {
      const newExperienceArr = prevState.map(prevItem => {
        console.log(prevItem.id === e.target.id)
        if (prevItem.id === e.target.id) {
          console.log([e.target.name], e.target.value)
          return {...prevItem, [e.target.name]: e.target.value}
        }
        return {...prevItem}
      })
      return newExperienceArr
    })
  }  

  const handleEducationChange = (e) => {
    setEducationState(prevState => {
      const newEducationArr = prevState.map(prevItem => {
        if (prevItem.id === e.target.id) {
          return {...prevItem, [e.target.name]: e.target.value}
        }
        return {...prevItem}
      })
      return newEducationArr
    })
  }

  const handleExperienceAdd = () => {
    setExperienceState(prevState => {
      return [
        ...prevState, 
        {
          jobTitle: '',
          company: '',
          citySt: '',
          workFrom: '',
          workUntil: '',
          exKey: uniqid(),
          id: uniqid()
        },
      ]})    
  }
  
  const handleEducationAdd = () => {
    setEducationState(prevState => {
      return [
      ...prevState,
      {
        university: '',
        city: '',
        degree: '',
        major: '',
        attFrom: '',
        attUntil: '',
        edKey: uniqid(),
        id: uniqid()
      }
    ]})
  }

  const handleExperienceDelete = (e) => {
    setExperienceState(prevState => {
      return prevState.filter(prevItem => prevItem.id !== e.target.id)
    })
  }

  const handleEducationDelete = (e) => {
    setEducationState(prevState => {
      return prevState.filter(prevItem => prevItem.id !== e.target.id)
    })
  }

  const { fName, lName, title, address, phone, email, description } = personalState
  
  // better to just map directly in the Main return?
  const experienceForms = experienceState.map((job) => {
    console.log('run')
    return (
      <Experience
        key={job.exKey}
        jobTitle={job.jobTitle} 
        company={job.company} 
        citySt={job.citySt} 
        workFrom={job.workFrom} 
        workUntil={job.workUntil}
        id={job.id}
        handleExperienceChange={handleExperienceChange}  
        handleExperienceDelete={handleExperienceDelete}
      />
    )
  })
  const educationForms = educationState.map((school) => {
    return (
      <Education 
        key={school.edKey}  
        university={school.university}
        city={school.city}
        degree={school.degree}
        major={school.major}
        attFrom={school.attFrom}
        attUntil={school.attUntil}
        id={school.id}
        handleEducationChange={handleEducationChange}
        handleEducationDelete={handleEducationDelete}
      />
    )
  })
  
  return (
    <div>
      <h3 className="personal">Personal Information</h3>
      <Personal 
        fName={fName}
        lName={lName}
        title={title}
        address={address}
        phone={phone}
        email={email}
        description={description}
        handlePersonalChange={handlePersonalChange}
      />

      <h3 className="experience">Work Experience</h3>
      {experienceForms}
      <button onClick={handleExperienceAdd}>Add Work Experience</button>


      <h3 className="education">Education</h3>
      {educationForms}
      <button onClick={handleEducationAdd}>Add Education</button>

      <PreviewCV 
        personalState={personalState}
        experienceArr={experienceState}
        educationArr={educationState}
      />
    </div>
  )
}

export default Main
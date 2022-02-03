import React from 'react'

function Personal(props) {
  return (
    <div>
      <form>
        <input 
          onChange={props.handlePersonalChange}
          className="one-line" 
          type="text" 
          name="fName" 
          placeholder="First name"
          value={props.fName}>
        </input>
        <input 
          onChange={props.handlePersonalChange}
          className="one-line" 
          type="text" 
          name="lName" 
          placeholder="Last name"
          value={props.lName}>
        </input>
        <input
          onChange={props.handlePersonalChange} 
          className="one-line" 
          type="text" 
          name="title"
          placeholder="Title"
          value={props.title}>
        </input>
        <input
          onChange={props.handlePersonalChange} 
          className="one-line" 
          type="text" 
          name="address" 
          placeholder="Address"
          value={props.address}>
        </input>
        <input
          onChange={props.handlePersonalChange} 
          className="one-line" 
          type="text" 
          name="phone" 
          placeholder="Phone number"
          value={props.phone}>
        </input>
        <input
          onChange={props.handlePersonalChange} 
          className="one-line" 
          type="text" 
          name="email" 
          placeholder="Email"
          value={props.email}>
        </input>
        <textarea
          onChange={props.handlePersonalChange} 
          className="three-line" 
          type="text" 
          name="description" 
          placeholder="Description"
          value={props.description}>
        </textarea>
      </form>
    </div>
  )
}

export default Personal
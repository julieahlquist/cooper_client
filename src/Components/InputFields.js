import React from 'react';
import '../inputfields.css'

const InputFields = (props) => {
  return (
    <div className="field-container">

      <div className="distance-f">
        <label className="label">Distance</label>
        <br></br>
        <input id="distance" onChange={props.inputChangeHandler}></input>
      </div>

      <div className="age-f">
        <label className="label">Age</label>
        <br></br>
        <input id="age" onChange={props.inputChangeHandler}></input>
      </div>

      <div className="gender-f">
      <label className="label">Gender</label>
        <br></br>
        <select id="gender" onChange={props.inputChangeHandler}>
          <option value="female">Female</option>
          <option value="male">Male</option>
        </select>
      </div>

    </div>
  )
}

export default InputFields;
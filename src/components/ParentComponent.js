import React, {useState} from 'react';
import Form from "./Form"
import DisplayData from "./DisplayData"

export default function ParentComponent() {
  const [firstName, setFirstName] = useState("John")
  const [lastName, setLastName] = useState("Henry")
}

function handleFirstNameChange (e) {
  setFirstName(e.target.value)
}

function handleLastNameChange(e) {
  setLastName(e.target.value)
}

return (
  <div>
    <Form
      firstName={firstName} handleFirstNameChange={handleFirstNameChange}
      lastName={lastName} handleLastNameChange={handleLastNameChange} />
    <DisplayData firstName={firstName} lastName={lastName} />
  </div>

  
)
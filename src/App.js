import React from 'react'
import ProfileCard from './components/ProfileCard'
import { useState } from 'react'
import ProfileForm from './components/ProfileForm'

function App() {

  const [allprofiles, setAllprofiles] = useState([

    {
      firstname: "Peter",
      lastname: "Yenko",
      email: "Yenkopeter7@gmail.com",
      phone: "0553661240"
    }
  ])
 const updateallprofiles = (profile) => {
  let arr = allprofiles;
  arr.push(profile)
  setAllprofiles([...arr])
 };

  return (
    <>
    <div className="app">
    <h1>our profile maker</h1>
      
    </div>
    <ProfileForm submit={updateallprofiles} />
    <hr />
    <div className="list">
    {allprofiles.map((person,index))}
    <ProfileCard key={index} card={person} />

    
    </div>
    </>
  )
}

export default App

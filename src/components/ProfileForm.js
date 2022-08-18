import React, { useState } from 'react'

function ProfileForm({submit}) {

    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    });
    const handler = (event) => {
        setProfile((prev) => ({
            ...prev,
            [event.target.name]: event.target.value
        }));
    }


    const handleForm = (e) => {
        e.preventDefault();
        submit(profile)
}

  return (
      <div className="formContainer">
          <h3>profile Form</h3>
          <form onsubmit={handleForm}>

              <fieldset >
                  <legend>Bio data</legend>
                  <div className="name">
                      <label >
                          firstName

                          <input  name="firstName" value=
                              {profile.firstName} type="text" onChange={handler} />
                      </label>
                      <label >
                          lastName

                          <input name=" lastName" value=
                              {profile.lastName} type="text" onChange={handler} />
                      </label>
                  </div>
                  <div className="email">
                      <label >
                         mail

                          <input  name="email" value=
                              {profile.email} type="email" onChange={handler} />
                      </label>
                      <label >
                         
                           phone
                          <input  name=" phone" value=
                              {profile.phone} type="text" onChange={handler} />
                      </label>
                  </div>
             </fieldset>
             <button className="form" type="submit">
             Add profile
             </button>
          </form>
          
    </div>
  )
}

export default ProfileForm
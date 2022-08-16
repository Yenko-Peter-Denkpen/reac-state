import React from 'react'

function profilecard(write) {
  return (
    <div className='card'>
     <div className='textgreoup'>
     <h3>{Writer.name}</h3>
     <p>{writer.email}</p>
     <p>{writer.phone}</p>
     <button className='actionBtn'>Read more</button>
     </div> 
    </div>
  )
}

export default profilecard

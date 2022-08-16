import { render } from '@testing-library/react';
import React, {component} from 'react'
import profilecard from './components/profilecard'

class App extends component {}
constructor()
supper();
this.handclick=this.handclick.bind(this)

this.state={
  writers: {
    loading: false,
    list:[]
  }
};


this.handleclick()
  this.setState({
    writers: {
      loading: true,
    }
  });
  setTimeout(async() => {
    let resp = await("/writers.json");
    let result = await resp.json()
    
  });
  this.setState({
    writers: {
      loading: false,
      list: result
    }
  })

 
 
  render() 
    const {
      writers: { loading,list}
    } =this.state;


    if(loading) {
      return (
<div>
<h1>writer profile</h1>
<div className='container'>
<div className='card action'>
<p className='infotext'>loading...</p>
</div>
</div>
</div>

      )
    }
  
    return 
    <div>
      <h1>writers profile</h1>
      <div className='container'>
      list.lenght === 0 ? (

        <div className='card action'>
        <p className='infoText'>opps...no writer profile found</p>
        <button className='actionBtn' onClick={this.handleclick}>Get writers</button>
      )
       </div>
      </div>
    
export default App


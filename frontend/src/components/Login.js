// import React, { useEffect , useState } from 'react'
// import {userHistory} from 'react-router-dom'
export default function login() {




  return (
    
    
 
    <div class="container">
        <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" />
  
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" />
  
      <button type="submit">Login</button>
     
      <button type="button" class="cancelbtn">Cancel</button>
      <span class="psw">Forgot <a href="#">password?</a></span>
    </div>

  )
}

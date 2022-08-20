import React from 'react'
import './SignupScreen.css'
function SignupScreen() {


  const register =(e)=>{
    e.preventDefault();
  };
  const signIn = (e) =>{
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({email: credentials.email, password: credentials.password})

    });
    console.log(credentials.email, credentials.password);
    const json = await response.json();
    if(json.success){
      // Save the auth Token and redirect
      localStorage.setItem('token', json.authToken);
      navigate('/');
    }
    else{
      alert('Please enter the valid credentials');
    }
    console.log(json);
    
  }
  return (
    <div className='signupScreen'>
        <form>
            <h1>Sign in</h1>
            <input placeholder='Email'type="email" /> 
            <input placeholder='Password' type="password" />
            <button type="submit" onClick={signIn} >Sign In</button>
            <h4>
              <span className='signupScreen_grey'>New to Netflix?</span><span onClick={register} className='signupScreen_link'> Sign Up now.</span></h4>
        </form>
    </div>
  )
}

export default SignupScreen
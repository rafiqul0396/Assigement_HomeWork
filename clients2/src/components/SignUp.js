import React ,{useState}from 'react'
import Axios from "axios";
import Cookies from "universal-cookie";



function SignUp({setIsAuth}) {
    const cookies = new Cookies();
    const[user,setUser]=useState(null)
    const signUp=()=>{

      Axios.post("https://pink-different-oyster.cyclic.app/signup", user).then((res) => {
      const { token, userId, firstName, email, username, hashedPassword } =res.data;
      cookies.set("token", token);
      cookies.set("userId", userId);
      cookies.set("username", username);
      cookies.set("firstName", firstName);
      cookies.set("email", email);
      cookies.set("hashedPassword", hashedPassword);
      setIsAuth(true);
    });
    }
  return (
    <div  className="signUp">
        <label>SignUp</label>
        
    <input
        placeholder="FirstName"
        onChange={(event) => {
          setUser({ ...user, firstName: event.target.value });
        }}
      />

    <input
        placeholder="email"
        onChange={(event) => {
          setUser({ ...user, email: event.target.value });
        }}
      />
      <input
        placeholder="Username"
        onChange={(event) => {
          setUser({ ...user, username: event.target.value });
        }}
      />
      <input
        placeholder="Password"
        type="password"
        onChange={(event) => {
          setUser({ ...user, password: event.target.value });
        }}
      />

       <button onClick={signUp}> Register</button>
        </div>
  )
}

export default SignUp
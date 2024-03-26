import { useState } from "react"
import { useNavigate } from 'react-router-dom';


export default function Signup(){
    const [username,setUsername]=useState('')
    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')
    const history=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();
        localStorage.setItem('email',Email)
        localStorage.setItem('Username',username)
        localStorage.setItem('Password',Password)
        history('/');
    }

    return(
        <div className="centerPage">
            <h1>Sign Up Page</h1>
            <form onSubmit={handleSubmit}>
                <label><input  type="text" placeholder="YourName" value={username} onChange={(e)=>{setUsername(e.target.value)}}/></label>
                <br/>
                <label><input  type="email" placeholder="Email Address" value={Email} onChange={(e)=>{setEmail(e.target.value)}}/></label>
                <br/>
                <label><input  type="password" placeholder="Password" value={Password} onChange={(e)=>{setPassword(e.target.value)}}/></label>
                <br/>
                <button type="submit">Submit</button>
            </form>
            <p>Already Have an Account ? <a href="/">Login</a></p>
        </div>


    )


}
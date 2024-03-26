import { useState } from "react"
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const [username,setUsername]=useState('')
    const [Email,setEmail]=useState('')
    const [Password,setPassword]=useState('')
    const history=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault();
        const storedUsername=localStorage.getItem('Username')
        const storedEmail=localStorage.getItem('email')
        const storedPassword=localStorage.getItem('Password')

        if(username ===storedUsername && Email===storedEmail && Password===storedPassword){
            history('/dashboard')
        }else{
            alert("Invalid Username,Password or Email")
        }

    }


    return(
        <div className="centerPage">
            <h1>LogIn  Page</h1>
            <form onSubmit={handleSubmit}>
                <label><input  type="text" placeholder="YourName" value={username} onChange={(e)=>{setUsername(e.target.value)}}/></label>
                <br/>
                <label><input  type="email" placeholder="Email Address" value={Email} onChange={(e)=>{setEmail(e.target.value)}}/></label>
                <br/>
                <label><input  type="password" placeholder="Password" value={Password} onChange={(e)=>{setPassword(e.target.value)}}/></label>
                <br/>
                <button type="submit">Submit</button>
            </form>
            <p>Don't Have an Account ? <a href="/Signup">SignUp</a></p>
        </div>

    )
}
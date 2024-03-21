import React from "react"
import { useState } from "react"

function Login(){
    const [data,setData]=useState({
        username:"",
        password:""
    })
    const [form,setForm]=useState({
        username:"None",
        password:"None"
    })
    const [submit,setSubmit]=useState(false)

    const printValues=e=>{
        e.preventDefault()
        setForm(
            {
                username:data.username,
                password:data.password
            }
        )
        setSubmit(true)
    }
    const updateValues=e=>{
        setData(
            {
                ...data,
                [e.target.name]:e.target.value
            }
        )
    }

    return(
        <div style={
            {
                margin:"auto",
                marginTop:"140px",
                marginLeft:"300px",
                marginRight:"300px",
                textAlign:"center",
                border:"1px solid black"

            }
        }>
        <h1>Login Form</h1>
        <form onSubmit={printValues} style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center"
        }}>
            <label>Username: <input value={data.username} name="username" onChange={updateValues}></input>
            </label>
            <br></br>
            <label>
                Password: <input value={data.password} type="password" name="password" onChange={updateValues}></input>
            </label>
        <br></br>
        <button style={{
            width:"80px",
            marginLeft:"30px"

        }}>Submit</button>
        </form>
        <h1>Information You enter</h1>
        <p>{submit ? form.username :null}</p>
        <p>{submit ? form.password :null}</p>
        </div>
    )

}
export default Login
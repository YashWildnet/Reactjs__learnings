import   { useState } from "react";
import React from "react";
function NumberGenerate(){

    const [click,setClick]=useState([])

    const addno=()=>{
        setClick([
            ...click,
            {
                id:click.length,
                value:Math.round(Math.random()*10)
            }
        ])

    }

    return(
        <div>
            <ul>
                {click.map(item =>(
                    <li key={item.id}>{item.value}</li>
                ))}
            </ul>

            <button onClick={addno}>Generate no</button>
        </div>

    )

}
export default NumberGenerate
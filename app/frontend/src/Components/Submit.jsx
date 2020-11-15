import React from 'react'

export default function Submit(){
    return(
        <div>
            <input
                className="publish" 
                type = "submit" 
                value ="Publish"
                href="localhost:3000/card">
            </input>
        </div>
    )
}
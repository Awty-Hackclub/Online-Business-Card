import React from 'react'

export default function Input(props) {
    return(
        <div>
            <div className="label">
                <label className = "plat">{props.platform}</label>
                <input className = "input"></input>
            </div>
        </div>
    )
} 

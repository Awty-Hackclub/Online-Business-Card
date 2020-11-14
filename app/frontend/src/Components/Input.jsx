import React from 'react'

export default function Input(props) {
    return(
        <div>
            <div className="label">
                <label>{props.platform}</label>
                <input></input>
            </div>
        </div>
    )
} 

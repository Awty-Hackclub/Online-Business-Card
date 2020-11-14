import React from 'react'

export default function CompName() {

    return(
        <div>
            <textarea
                className = "compName" 
                placeholder = "Company Name"
                rows = "3"
                maxLength = "50"
            >
            </textarea>
        </div>
    )
}
import React from 'react'

export default function Description() {

    return (
        <div>
            <textarea
                className = "description" 
                placeholder = "Description"
                maxLength = "10000"
            >
            </textarea>
        </div>
    )
}
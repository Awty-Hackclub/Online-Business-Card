import React from 'react'

export default function Media(props){

    return(
        <div>
            <div className = "media">
                <label>{props.platform}</label>
                <label>{props.link}</label>
            </div>
        </div>
    )
}
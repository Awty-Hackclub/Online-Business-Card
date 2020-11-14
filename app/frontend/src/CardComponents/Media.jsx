import React from 'react'
import youtubeIcon from '../img/youtube.svg'

export default function Media(props){

    return(
        <div>
            <div className = "media">
                <label>{props.platform}</label>
                <label>{props.link}</label>
                <img src={youtubeIcon} alt="youtube"/>
            </div>
        </div>
    )
}
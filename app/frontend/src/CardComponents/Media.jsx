import React from 'react'
import youtubeIcon from '../img/youtube.svg'
import instagramIcon from '../img/instagram.svg'
import twitterIcon from '../img/twitter.svg'

export default function Media(props){
    if (props.link === 'http://youtube.com') {
        return(
            <div>
                <div className = "media">
                    <img src={youtubeIcon} alt="youtube"/>
                    <label>{props.link}</label>
                </div>
            </div>
        )
    } else if (props.link === 'http://instagram.com') {
        return(
            <div>
                <div className = "media">
                    <img src={instagramIcon} alt="youtube"/>
                    <label>{props.link}</label>
                </div>
            </div>
        )
    } else if (props.link === 'http://twitter.com') {
        return(
            <div>
                <div className = "media">
                    <img src={twitterIcon} alt="youtube"/>
                    <label>{props.link}</label>
                </div>
            </div>
        )
    } else {
        return(
            <div>
                <div className = "media">
                    <label>{props.link}</label>
                </div>
            </div>
        )
    }
}
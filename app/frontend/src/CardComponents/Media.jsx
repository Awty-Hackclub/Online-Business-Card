import React from 'react'
import youtubeIcon from '../img/youtube.svg'
import instagramIcon from '../img/instagram.svg'
import twitterIcon from '../img/twitter.svg'

export default function Media(props){
    if (props.link === 'http://youtube.com') {
        return(
            <div>
                <div className = "media">
                    <img className="logo" src={youtubeIcon} alt="youtube"/>
                    <label className="link">{props.link}</label>
                </div>
            </div>
        )
    } else if (props.link === 'http://instagram.com') {
        return(
            <div>
                <div className = "media">
                    <img className="logo"src={instagramIcon} alt="youtube"/>
                    <label className="link">{props.link}</label>
                </div>
            </div>
        )
    } else if (props.link === 'http://twitter.com') {
        return(
            <div>
                <div className = "media">
                    <img className="logo" src={twitterIcon} alt="youtube"/>
                    <label className="link">{props.link}</label>
                </div>
            </div>
        )
    } else {
        return(
            <div>
                <div className = "media">
                    <label className="link">{props.link}</label>
                </div>
            </div>
        )
    }
}
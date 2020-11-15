import React from 'react'
import youtubeIcon from '../img/youtube.svg'
import instagramIcon from '../img/instagram.svg'
import twitterIcon from '../img/twitter.svg'
import facebookIcon from '../img/facebook.svg'

function clickOpen(props){
    window.open(props.link)
}

export default function Media(props){
    if (props.link.includes('youtube.com')) {
        return(
            <div>
                <button className = "media" onClick='clickOpen(props.link)'>
                    <div className = "img">
                        <img className="youtube" src={youtubeIcon} alt="youtube"/>
                    </div>
                    <label className="link">Youtube</label>
                </button>
            </div>
        )
    } else if (props.link.includes('instagram.com')) {
        return(
            <div>
                <button className = "media">
                    <div className = "img">
                        <img className="instagram"src={instagramIcon} alt="instagram"/>
                    </div>
                    <label className="link">Instagram</label>
                </button>
            </div>
        )
    } else if (props.link.includes('twitter.com')) {
        return(
            <div>
                <button className = "media">
                    <div className = "img">
                        <img className="twitter" src={twitterIcon} alt="twitter"/>
                    </div>
                    <label className="link">Twitter</label>
                </button>
            </div>
        )
    } else if (props.link.includes('facebook.com')) {
        return(
            <div>
                <button className = "media">
                    <div className = "img">
                        <img className="facebook" src={facebookIcon} alt="facebook"/>
                    </div>
                    <label className="link">Facebook</label>
                </button>
            </div>
        )
    }
    else {
        return(
            <div>
                <div className = "media">
                    <label className="link">{props.link}</label>
                </div>
            </div>
        )
    }
}
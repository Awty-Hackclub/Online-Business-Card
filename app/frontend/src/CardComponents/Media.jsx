import React from 'react'
import youtubeIcon from '../img/youtube.svg'
import instagramIcon from '../img/instagram.svg'
import twitterIcon from '../img/twitter.svg'
import facebookIcon from '../img/facebook.svg'
import tiktokIcon from '../img/tiktok.svg'
import linkedinIcon from '../img/linkedin.svg'

export default function Media(props){
    if (props.link.includes('youtube.com')) {
        return(
            <div>
                <a href={props.link} target="_blank">
                    <button className = "media">
                        <div className = "img">
                            <img className="youtube" src={youtubeIcon} alt="youtube"/>
                        </div>
                        <label className="link">Youtube</label>
                    </button>
                </a>
            </div>
        )
    } else if (props.link.includes('instagram.com')) {
        return(
            <div>
                <a href={props.link} target="_blank">
                    <button className = "media">
                        <div className = "img">
                            <img className="instagram"src={instagramIcon} alt="instagram"/>
                        </div>
                        <label className="link">Instagram</label>
                    </button>
                    </a>
            </div>
        )
    } else if (props.link.includes('twitter.com')) {
        return(
            <div>
                <a href={props.link} target="_blank">
                    <button className = "media">
                        <div className = "img">
                            <img className="twitter" src={twitterIcon} alt="twitter"/>
                        </div>
                        <label className="link">Twitter</label>
                    </button>
                </a>
            </div>
        )
    } else if (props.link.includes('facebook.com')) {
        return(
            <div>
                <a href={props.link} target="_blank">
                    <button className = "media">
                        <div className = "img">
                            <img className="facebook" src={facebookIcon} alt="facebook"/>
                        </div>
                        <label className="link">Facebook</label>
                    </button>
                </a>
            </div>
        )
    } else if (props.link.includes('tiktok.com')) {
    return(
        <div>
            <a href={props.link} target="_blank">
                <button className = "media">
                    <div className = "img">
                        <img className="tiktok" src={tiktokIcon} alt="tiktok"/>
                    </div>
                    <label className="link">TikTok</label>
                </button>
            </a>
        </div>
        )
    } else if (props.link.includes('linkedin.com')) {
    return(
        <div>
            <a href={props.link} target="_blank">
                <button className = "media">
                    <div className = "img">
                        <img className="linkedin" src={linkedinIcon} alt="linkedin"/>
                    </div>
                    <label className="link">LinkedIn</label>
                </button>
            </a>
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
import React from 'react'
import '../App.css'
import Title from '../Components/Title'
import Media from '../CardComponents/Media'

export default function Card(props) {
    return (
        <div>
            <Title content="CARD"/>
            <div className = "space"></div>
            <div className = "card">
                <h1 className = "name">{props.content}</h1>
                <div className = "medias">
                    <Media link = "http://youtube.com"/>
                    <Media link = "http://instagram.com"/>
                    <Media link = "http://twitter.com"/>
                </div>
                <div className = "paragraph">
                </div>
            </div>
        </div>
    );
}
import React from 'react'
import './App.css'
import Input from './Components/Input'
import Title from './Components/Title'
import CompName from './Components/CompName'
import Description from './Components/Description'
import Submit from './Components/Submit'

export default function App() {
    return(
        <div>
            <Title content="Create your business card"/>
            <div className = "contain">
                <CompName/>
                <Input platform="YouTube"/>
                <Input platform="Instagram"/>
                <Input platform="Twitter"/>
                <Input platform="FaceBook"/>
                <Input platform="TikTok"/>
                <Input platform="LinkedIn"/>
                <Description/>
                <Submit/>
            </div>
        </div>
    )
}
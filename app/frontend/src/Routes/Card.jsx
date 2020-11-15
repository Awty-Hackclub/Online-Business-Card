import React from "react";
import "../App.css";
import Media from "../CardComponents/Media";

export default function Card(props) {
  return (
    <div className="card-container" id="card-containerID">
      <div className="card" id="cardID">
        <h1 className="name">{props.content}</h1>
        <div className="medias">
          <Media link="http://youtube.com" />
          <Media link="http://instagram.com" />
          <Media link="http://twitter.com" />
          <Media link="http://facebook.com" />
        </div>
        <div className="paragraph">
          <p>
          We are the Awty International School Hackathon Club (Awty Hackclub) that has been accepted and sponsored by a large non-profit, Hack Club. We prepare for and participate in hackathons. We cultivate new members' skills through side projects; said skills are then implemented in Hackathons. We aim to create a community of young developers and entrepreneurs; leveraging teamwork whilst doing so. Our club provides a medium for students to express creativity, elevate ingenuity, and learn skills that they can implement in their future careers.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

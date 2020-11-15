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
          <Media link="http://tiktok.com" />
          <Media link="http://linkedin.com" />
        </div>
        <div className="paragraph">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

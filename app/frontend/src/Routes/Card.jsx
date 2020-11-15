import React from "react";
import "../App.css";
import Media from "../CardComponents/Media";


// makes it spiN
// Movement Animation to happen
const card = document.getElementById('cardID');
const container = document.getElementById('card-container');
// Items

// const title = document.querySelector('.title');
// const sneaker = document.querySelector('.sneaker img');
// const purchase = document.querySelector('.purchase button');
// const description = document.querySelector('.info h3');
// const sizes = document.querySelector('.sizes');

//Moving Animation Event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 15;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 15;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
});

//animate back to original location after your cursor leaves the container
//animate In
// container.addEventListener('mouseenter', e => {
//     card.style.transition = "none";
//     //popout
//     // title.style.transform = 'translateZ(150px)';
//     // sneaker.style.transform = 'translateZ(150px)';
//     // purchase.style.transform = 'translateZ(150px)';
//     // description.style.transform = 'translateZ(150px)';
//     // sizes.style.transform = 'translateZ(150px)';
// });
//Animate Out
container.addEventListener('mouseleave', e => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    // title.style.transform = "translateZ(0px)";
    // sneaker.style.transform = 'translateZ(0px)';
    // purchase.style.transform = 'translateZ(0px)';
    // description.style.transform = 'translateZ(0px)';
    // sizes.style.transform = 'translateZ(0px)';
});
// ------------------------------------

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

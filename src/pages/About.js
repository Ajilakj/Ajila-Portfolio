import React from 'react';
import profile from '../images/Ajila.JPG'
import './style.css';
export default function About() {
  return (
    <div id="about">
      <h1>About Me</h1>
      <div id="aboutMe">
        <img src={profile} alt="My profile picture"/>
        <p>
            <b>Hi, I am Ajila</b> <br/>
            I graduated Fullstack coding bootcamp from Columbia Engineering.<br/>
             As a fullstack developer I am familiar with React, Express, MongoDB, Node .................. This portfoilio will express you some of my works which I am really proud of.
        </p>
      </div>
    </div>
  );
}

import React from 'react';
import profile from '../images/Ajila.JPG'
export default function About() {
  return (
    <section className="inner-wrapper">
        <h2>About Me</h2>
        <section id="aboutMe">
          <img src={profile} alt="My profile picture"/>
          <p>
              <b>Hi, My name is Ajila.</b> <br/>
                I am a Fullstack coding bootcamp gradute from Columbia Engineering.<br/>
              As a fullstack developer I am familiar with the technologies like React, Express, MongoDB, Node, JS, .................. This portfoilio will express some of my works which I am really proud of.
          </p>
        </section>
    </section>
  );
}

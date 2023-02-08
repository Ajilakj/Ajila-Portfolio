import React from 'react';
import profile from '../images/Ajila.JPG'
export default function About() {
  return (
    <section >
        <h1>About Me</h1>
        <section className="inner-wrapper tow-coloum" id="about-me" >
          <img src={profile} alt="My profile picture"/>
          <div class="content">
            <h2>Hi, My name is Ajila.</h2>
          <p>
                I am a Fullstack coding bootcamp gradute from Columbia Engineering.
              As a fullstack developer I am familiar with the technologies like React, Express, MongoDB, Node, JS, .................. This portfoilio will express some of my works which I am really proud of.
          </p>
          </div>
        </section>
    </section>
  );
}

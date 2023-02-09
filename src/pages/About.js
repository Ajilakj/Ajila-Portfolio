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
            I am a Full stack Web Developer with a Master's degree in Computer science and Bachelor's Degree in Mathematics. I recently earned a certificate in Full Stack Development from Columbia Engineering, New York, where I developed skills in React, MongoDB, Node, Express, JavaScript, CSS, HTML and other web-related technologies
          </p>
          </div>
        </section>
    </section>
  );
}

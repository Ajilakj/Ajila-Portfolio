import React from 'react';
import almanac from '../images/myDailyAlmanac.png';
import weatherDashboard from '../images/weatherDashboard.png';
import NoteTaker from '../images/NoteTaker.png';
import TeamProfileGenerator from '../images/TeamProfileGenerator.png';
import jate from '../images/jate.png';
import virtualescaperoom from '../images/virtualescaperoom.png';
import './style.css'
// import sport from '../images/SportSpot.png'

export default function Portfolio({ currentPage, handlePageChange }) {
  return (
    <div>
     <h1>My Works</h1>
       <section id="portfolio">
               <div >
                    <fieldset class="cardContainer">
                         <legend>FULLSTACK APPLICATIONS</legend>
                              <div class="cards">
                                   <a href="https://virtual-escape-room-mikeyboxx.herokuapp.com/" target="_blank" class="app" rel="noreferrer">Deployed App</a>
                                   <a  href=" https://github.com/mikeyboxx/virtual-escape-room" target="_blank" class="git" rel="noreferrer">Github</a>
                                   <h2><span data-descr="It is a game app">Virtual Escape Room </span></h2>
                                   <p>Technologies used:</p><p><span class="orange">React </span><span class="orange">MongoDB </span><span class="orange">Express </span> <span class="blue">JWT </span> <span class="red">Node </span><span class="green">JavaScript </span></p>
                                   <img src={virtualescaperoom} alt="an image of the virtual escape room game"/>
                              </div>
                         </fieldset>
                         <fieldset class="cardContainer">
                              <legend>FRONTEND APPLICATIONS</legend>
                              <div class="cards">
                                   <a href="https://mikeyboxx.github.io/my-daily-almanac/" target="_blank" class="app" rel="noreferrer">Deployed App</a>
                                   <a  href="https://github.com/mikeyboxx/my-daily-almanac" target="_blank" class="git" rel="noreferrer">Github</a>
                                   <h2><span data-descr="It is a website to get content about various topics and save our own notes">My Daily Almanac </span></h2>
                                   <p>Technologies used: API, JavaScript, CSS, BULMA, HTML</p>
                                   <img src={almanac} alt="an image of contents based on user selection and a drop up menu with dates"/>
                              </div>
                              <div class="cards">
                                   <a href="https://ajilakj.github.io/WeatherDashboard/" target="_blank" class="app" rel="noreferrer">Deployed App</a>
                                   <a  href="https://github.com/Ajilakj/WeatherDashboard" target="_blank" class="git" rel="noreferrer">Github</a>
                                   <h2><span data-descr="Weather Dashboard">Weather Dashboard </span></h2>
                                   <p>Technologies used:<span class="orange">API </span><span class="green">JavaScript jQuery </span><span class="blue">CSS </span> <span class="red">HTML </span></p>
                                   <img src={weatherDashboard} alt="weather dashboard image with city name temp, wind and humidity"/>
                              </div>
                    </fieldset>
                    <fieldset class="cardContainer">
                         <legend>BACKEND APPLICATIONS</legend>
                         {/* <div class="cards">
                              <a href="https://murmuring-sands-90674.herokuapp.com/" target="_blank" class="app" rel="noreferrer">Deployed App</a>
                              <a  href="https://github.com/Ajilakj/NoteTaker" target="_blank" class="git" rel="noreferrer">Github</a>
                              <h2><span data-descr="User can Save, Edit Delete notes">Note Taker </span></h2>
                              <p>Technologies used:</p><p><span class="orange">Express </span> <span class="blue">JSON </span> <span class="red">Node </span><span class="green">JavaScript </span></p>
                                   <img src={NoteTaker} alt="An image of note taker app with added items on the left side and selected item on the right"/>
                         </div> */}
                          <div class="cards">
                                   <a href="https://frozen-scrubland-82058.herokuapp.com/" target="_blank" class="app" rel="noreferrer">Deployed App</a>
                                   <a  href="https://github.com/Ajilakj/JATE-PWA" target="_blank" class="git" rel="noreferrer">Github</a>
                                   <h2><span data-descr="It is a text editor">JATE </span></h2>
                                   <p>Technologies used:</p><p><span class="orange">MongoDB </span><span class="orange">Express </span> <span class="blue">JSON </span> <span class="red">Node </span><span class="green">JavaScript </span></p>
                                   <img src={jate} alt="an image of the text editor"/>
                              </div>
                         <div class="cards">
                              <a href="https://drive.google.com/file/d/1fkdbNH3y3JD7HKvWkfk7MPmFh8GI31go/view" target="_blank" class="app" rel="noreferrer">Deployed App</a>
                              <a  href="https://github.com/Ajilakj/TeamProfileGenerator" target="_blank" class="git" rel="noreferrer">Github</a>
                              <h2><span data-descr="Manager can enter team member's details, Based on the input an html file will generate">Team Profile Generator </span></h2>
                              <p>Technologies used:</p><p><span class="orange">Jest </span> <span class="blue">inquirer </span> <span class="red">Node </span><span class="green">JavaScript </span></p>
                              <img src={TeamProfileGenerator} alt="an image of a sample readme fenerated using this app"/>
                         </div>
                    </fieldset>
                    {/* <div class="cards">
                         <h2><span data-descr="It is a website to get posts about different sports">Sport spot </span></h2>
                         <p>Technologies used: Handlebars, Express, Node, Sequelize, npm, ESLint, MySQL, JavaScript, CSS</p>
                         <a href="https://the-sport-spot-team-1.herokuapp.com/" target="_blank" rel="noreferrer"><img src={sport} style={styles.img} alt="an image of 4 sports cards and a navigation bar"/></a>
                    </div> */}
                   
               </div>
          </section>
    </div>
  );
}

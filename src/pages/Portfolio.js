import React from 'react';
import almanac from '../images/myDailyAlmanac.png';
import TeamProfileGenerator from '../images/TeamProfileGenerator.png';
// import jate from '../images/jate.png';
import SportSpot from '../images/SportSpot.png';
import virtualescaperoom from '../images/virtualescaperoom.png';
import jsApplications from '../images/jsApplications.png';

export default function Portfolio({ currentPage, handlePageChange }) {
  return (
    <section>
     <h1>My Works</h1>
       <section id="portfolio" class="inner-wrapper">
          <div class="cardContainer">
               <h3>MERN STACK APPLICATIONS</h3>
                    <div class="cards">
                         <a href="https://virtual-escape-room-mikeyboxx.herokuapp.com/" target="_blank" className="app link-button" rel="noreferrer">Deployed App</a>
                         <a  href=" https://github.com/Ajilakj/virtual-escape-room" target="_blank" className="app link-button" rel="noreferrer">Github</a>
                         <h3><span data-descr="The initial game is a murder mystery where the player can navigate through the rooms in a mansion to find clues and interact with the suspects.">Virtual Escape Room </span></h3>
                         <p>Technologies used:</p><p><span class="orange">React </span><span class="orange">MongoDB </span><span class="orange">Express </span> <span class="blue">JWT </span> <span class="red">Node </span><span class="green">JavaScript </span></p>
                         <img src={virtualescaperoom} alt="an image of the virtual escape room game"/>
                    </div>
               </div>
          <div class="cardContainer">
               <h3>FULL STACK APPLICATIONS</h3>
                    <div class="cards">
                         <a href="https://sport-spot.herokuapp.com/home" target="_blank" className="app link-button" rel="noreferrer">Deployed App</a>
                         <a  href=" https://github.com/Ajilakj/Sport-spot" target="_blank" className="app link-button" rel="noreferrer">Github</a>
                         <h3><span data-descr="This is a full stack application where sports enthusiasts in NYC can connect virtually to make plans to connect in real life.">Sport-spot </span></h3>
                         <p>Technologies used:</p><p><span class="orange">Handlebars </span><span class="orange">Sequelize </span><span class="orange">Express </span> <span class="blue">eslint </span> <span class="red">Node </span><span class="green">JavaScript </span></p>
                         <img src={SportSpot} alt="an image of the virtual escape room game"/>
                    </div>
               </div>
               <div class="cardContainer">
                    <h3>FRONTEND APPLICATIONS</h3>
                    <div class="cards">
                         <a href="https://mikeyboxx.github.io/my-daily-almanac/" target="_blank" className="app link-button" rel="noreferrer">Deployed App</a>
                         <a  href="https://github.com/Ajilakj/my-daily-almanac" target="_blank" className="app link-button" rel="noreferrer">Github</a>
                         <h3><span data-descr="It is a website to get content about various topics and save our own notes">My Daily Almanac </span></h3>
                         <p>Technologies used: API, JavaScript, CSS, BULMA, HTML</p>
                         <img src={almanac} alt="an image of contents based on user selection and a drop up menu with dates"/>
                    </div>
                    <div class="cards">
                         <a href="https://ajilakj.github.io/JavaScript-Applications/" target="_blank" className="app link-button" rel="noreferrer">Deployed App</a>
                         <a  href="https://github.com/Ajilakj/JavaScript-Applications" target="_blank" className="app link-button" rel="noreferrer">Github</a>
                         <h3><span data-descr="JavaScript Applications">JavaScript Applications </span></h3>
                         <p>Technologies used:<span class="blue">SASS </span><span class="orange">API </span><span class="green">JavaScript jQuery </span><span class="blue">CSS </span> <span class="red">HTML </span></p>
                         <img src={jsApplications} alt="JavaScript applications image with password, weather, quiz, rock, paper scissor images"/>
                    </div>
                    </div>
                    <div class="cardContainer">
                         <h3>BACKEND APPLICATIONS</h3>
                         {/* <div class="cards">
                              <a href="https://murmuring-sands-90674.herokuapp.com/" target="_blank" class="app" rel="noreferrer">Deployed App</a>
                              <a  href="https://github.com/Ajilakj/NoteTaker" target="_blank" class="git" rel="noreferrer">Github</a>
                              <h3><span data-descr="User can Save, Edit Delete notes">Note Taker </span></h3>
                              <p>Technologies used:</p><p><span class="orange">Express </span> <span class="blue">JSON </span> <span class="red">Node </span><span class="green">JavaScript </span></p>
                                   <img src={NoteTaker} alt="An image of note taker app with added items on the left side and selected item on the right"/>
                         </div> */}
                          {/* <div class="cards">
                                   <a href="https://frozen-scrubland-82058.herokuapp.com/" target="_blank" className="app link-button" rel="noreferrer">Deployed App</a>
                                   <a  href="https://github.com/Ajilakj/JATE-PWA" target="_blank" className="app link-button" rel="noreferrer">Github</a>
                                   <h3><span data-descr="It is a text editor">JATE </span></h3>
                                   <p>Technologies used:</p><p><span class="orange">MongoDB </span><span class="orange">Express </span> <span class="blue">JSON </span> <span class="red">Node </span><span class="green">JavaScript </span></p>
                                   <img src={jate} alt="an image of the text editor"/>
                         </div> */}
                         <div class="cards">
                              <a href="https://drive.google.com/file/d/1fkdbNH3y3JD7HKvWkfk7MPmFh8GI31go/view" target="_blank" className="app link-button"rel="noreferrer">Deployed App</a>
                              <a  href="https://github.com/Ajilakj/TeamProfileGenerator" target="_blank"className="app link-button" rel="noreferrer">Github</a>
                              <h3><span data-descr="Manager can enter team member's details, Based on the input an html file will generate">Team Profile Generator </span></h3>
                              <p>Technologies used:</p><p><span class="orange">Jest </span> <span class="blue">inquirer </span> <span class="red">Node </span><span class="green">JavaScript </span></p>
                              <img src={TeamProfileGenerator} alt="an image of a sample readme fenerated using this app"/>
                         </div>
                    </div>
                    {/* <div class="cards">
                         <h3><span data-descr="It is a website to get posts about different sports">Sport spot </span></h3>
                         <p>Technologies used: Handlebars, Express, Node, Sequelize, npm, ESLint, MySQL, JavaScript, CSS</p>
                         <a href="https://the-sport-spot-team-1.herokuapp.com/" target="_blank" rel="noreferrer"><img src={sport} style={styles.img} alt="an image of 4 sports cards and a navigation bar"/></a>
                    </div> */}
                   
          </section>
    </section>
  );
}

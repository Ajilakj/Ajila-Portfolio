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
       <section id="portfolio" className="inner-wrapper">
          <div className="cardContainer">
               <h3>MERN STACK APPLICATIONS</h3>
                    <div className="cards">
                         <h3>Virtual Escape Room </h3>
                         <div className="row">
                              <div className="column">
                                   <a href="https://virtual-escape-room-mikeyboxx.herokuapp.com/" target="_blank" className="app link-button" rel="noreferrer">Deployed App</a>
                                   <img src={virtualescaperoom} alt="an image of the virtual escape room game"/>
                              </div>
                              <div className="column">
                              <a  href=" https://github.com/Ajilakj/virtual-escape-room" target="_blank" className="app link-button" rel="noreferrer">Github</a>
                                   <p>The initial game is a murder mystery where the player can navigate through the rooms in a mansion to find clues and interact with the suspects.</p>
                                   <p>Technologies used: <span className="purple">React </span><span className="yellow">MongoDB </span><span className="orange">Express </span> <span className="blue">JWT </span> <span className="red">Node </span><span className="green">JavaScript </span></p>
                              </div>
                         </div>
                    </div>
               </div>
          <div className="cardContainer">
               <h3>FULL STACK APPLICATIONS</h3>
                    <div className="cards">
                         <h3>Sport-spot</h3>
                         <div className="row">
                              <div className="column">
                                   <a href="https://sport-spot.herokuapp.com/home" target="_blank" className="app link-button" rel="noreferrer">Deployed App</a>
                                   <img src={SportSpot} alt="an image of the virtual escape room game"/>
                              </div>
                              <div className="column">
                                   <a  href=" https://github.com/Ajilakj/Sport-spot" target="_blank" className="app link-button" rel="noreferrer">Github</a>
                                   <p>This is a full stack application where sports enthusiasts in NYC can connect virtually to make plans to connect in real life. </p>
                                   <p>Technologies used: <span className="purple">Handlebars </span><span className="green">Sequelize </span><span className="orange">Express </span> <span className="blue">eslint </span> <span className="red">Node </span><span className="yellow">JavaScript </span></p>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="cardContainer">
                    <h3>FRONTEND APPLICATIONS</h3>
                    <div className="cards">
                         <h3>My Daily Almanac </h3>
                         <div className="row">
                              <div className="column">
                                   <a href="https://mikeyboxx.github.io/my-daily-almanac/" target="_blank" className="app link-button" rel="noreferrer">Deployed App</a>
                                   <img src={almanac} alt="an image of contents based on user selection and a drop up menu with dates"/>
                              </div>
                              <div className="column">
                                   <a  href="https://github.com/Ajilakj/my-daily-almanac" target="_blank" className="app link-button" rel="noreferrer">Github</a>
                                   <p>It is a website to get content about various topics and save our own notes.</p>
                                   <p>Technologies used: <span className="purple">API </span><span className="green">JavaScript </span><span className="orange">BULMA </span> <span className="blue">CSS </span> <span className="red">HTML </span></p>
                              </div>
                         </div>
                    </div>
                    <div className="cards">
                         <h3>JavaScript Applications </h3>
                         <div className="row">
                              <div className="column">
                                   <a href="https://ajilakj.github.io/JavaScript-Applications/" target="_blank" className="app link-button" rel="noreferrer">Deployed App</a>
                                   <img src={jsApplications} alt="JavaScript applications image with password, weather, quiz, rock, paper scissor images"/>
                              </div>
                              <div className="column">
                                   <a  href="https://github.com/Ajilakj/JavaScript-Applications" target="_blank" className="app link-button" rel="noreferrer">Github</a>
                                   <p>It is a website contains 4 applications using JavaScript. 1.Password generator:  2.Weather dashboard 3.An Interactive JS quiz. 4.Rock, Paper Scissor game</p>
                                   <p>Technologies used:<span className="purple">SASS </span><span className="orange">API </span><span className="green">JavaScript </span><span className="yellow">jQuery</span><span className="blue">CSS </span> <span className="red">HTML </span></p>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="cardContainer">
                    <h3>BACKEND APPLICATIONS</h3>
                    {/* <div className="cards">
                         <a href="https://murmuring-sands-90674.herokuapp.com/" target="_blank" className="app" rel="noreferrer">Deployed App</a>
                         <a  href="https://github.com/Ajilakj/NoteTaker" target="_blank" className="git" rel="noreferrer">Github</a>
                         <p>"User can Save, Edit Delete notes">Note Taker </p>
                         <p>Technologies used:</p><p><span className="orange">Express </span> <span className="blue">JSON </span> <span className="red">Node </span><span className="green">JavaScript </span></p>
                              <img src={NoteTaker} alt="An image of note taker app with added items on the left side and selected item on the right"/>
                    </div> */}
                         {/* <div className="cards">
                              <a href="https://frozen-scrubland-82058.herokuapp.com/" target="_blank" className="app link-button" rel="noreferrer">Deployed App</a>
                              <a  href="https://github.com/Ajilakj/JATE-PWA" target="_blank" className="app link-button" rel="noreferrer">Github</a>
                              <p>"It is a text editor">JATE </p>
                              <p>Technologies used:</p><p><span className="orange">MongoDB </span><span className="orange">Express </span> <span className="blue">JSON </span> <span className="red">Node </span><span className="green">JavaScript </span></p>
                              <img src={jate} alt="an image of the text editor"/>
                    </div> */}
                    <div className="cards">
                         <h3>Team Profile Generator</h3>
                         <div className="row">
                              <div className="column">
                                   <a href="https://drive.google.com/file/d/1fkdbNH3y3JD7HKvWkfk7MPmFh8GI31go/view" target="_blank" className="app link-button"rel="noreferrer">Deployed App</a>
                                   <img src={TeamProfileGenerator} alt="an image of a sample readme fenerated using this app"/>
                              </div>
                              <div className="column">
                                   <a  href="https://github.com/Ajilakj/TeamProfileGenerator" target="_blank"className="app link-button" rel="noreferrer">Github</a>
                                   <p>Manager can enter team member's details, Based on the input an html file will generate </p>
                                   <p>Technologies used: <span className="orange">Jest </span> <span className="blue">inquirer </span> <span className="red">Node </span><span className="green">JavaScript </span></p>
                              </div>
                         </div>
                    </div>
               </div>
                    {/* <div className="cards">
                         <p>"It is a website to get posts about different sports">Sport spot </p>
                         <p>Technologies used: Handlebars, Express, Node, Sequelize, npm, ESLint, MySQL, JavaScript, CSS</p>
                         <a href="https://the-sport-spot-team-1.herokuapp.com/" target="_blank" rel="noreferrer"><img src={sport} style={styles.img} alt="an image of 4 sports cards and a navigation bar"/></a>
                    </div> */}
                   
          </section>
    </section>
  );
}

import React from 'react';
const styles = {
cards:{
  width:'325px',
  border: '2px dotted maroon',
  boxShadow: '10px 10px gray',
  borderRadius: '10px',
  textAlign: 'center'
},
fieldset:{
  display: 'flex',
  flexWrap: 'wrap'
} 
}
export default function Portfolio() {
  return (
    <div>
       <section id="my-works">
               <h2>My Works</h2>
               <div class="card-container">
                    <div style={styles.cards} class="first-item">
                         <h2><span data-descr="It is a website to get posts about different sports">Sport spot</span></h2>
                         <p>Technologies used:<span class="red">Handlebars</span><span class="orange">Express</span><span class="green">Node</span><span class="blue">Sequelize</span> <span class="red">npm</span><span class="orange">ESLint</span><span class="blue">MySQL</span><span class="green">JavaScript</span><span class="blue">CSS</span></p>
                         <a href="https://the-sport-spot-team-1.herokuapp.com/" target="_blank" rel="noreferrer"><img src="./assets/images/SportSpot.png"alt="an image of 4 sports cards and a navigation bar"/></a>
                    </div>
                    <div style={styles.cards} class="first-item">
                         <h2><span data-descr="It is a website to get content about various topics and save our own notes">My Daily Almanac</span></h2>
                         <p>Technologies used:<span class="orange">API</span><span class="green">JavaScript</span><span class="blue">CSS, BULMA</span> <span class="red">HTML</span></p>
                         <a href="https://mikeyboxx.github.io/my-daily-almanac/" target="_blank" rel="noreferrer"><img src="./assets/images/myDailyAlmanac.png"alt="an image of contents based on user selection and a drop up menu with dates"/></a>
                    </div>
                    <fieldset style={styles.fieldset}>
                         <legend>Front End Projects </legend>
                         <div style={styles.cards}>
                              <h2><span data-descr="Weather Dashboard">Weather Dashboard</span></h2>
                              <p>Technologies used:<span class="orange">API</span><span class="green">JavaScript jQuery</span><span class="blue">CSS</span> <span class="red">HTML</span></p>
                              <a href="https://ajilakj.github.io/WeatherDashboard/" target="_blank" rel="noreferrer"><img src="./assets/images/weatherDashboard.png"alt="weather dashboard image with city name temp, wind and humidity"/></a>
                         </div>
                         <div style={styles.cards}>
                              <h2><span data-descr="It is an app for generating password">Password Generator</span></h2>
                              <p>Technologies used:<span class="green">JavaScript</span><span class="blue">CSS</span> <span class="red">HTML</span></p>
                              <a href="https://ajilakj.github.io/PasswordGenerator/" target="_blank" rel="noreferrer"><img src="./assets/images/passwordGenerator.png"alt="an image of generated password based on user selection"/></a>
                         </div>
                         <div style={styles.cards}>
                              <h2><span data-descr="It is a Game (Rock, Paper, Scissor)">Rock-Paper-Scissor Game</span></h2>
                              <p>Technologies used:</p><p><span class="green">JavaScript</span><span class="blue">CSS</span> <span class="red">HTML</span></p>
                              <a href="https://ajilakj.github.io/RPS-game/" target="_blank" rel="noreferrer"><img src="./assets/images/RPSgame.png"alt="a score board of the rock paper scissor game image"/></a>
                         </div>
                         <div style={styles.cards}>
                              <h2><span data-descr="A JavaScript interactive coding quiz">Interactive coding quiz</span></h2>
                              <p>Technologies used:</p><p><span class="green">JavaScript</span><span class="blue">CSS</span> <span class="red">HTML</span></p>
                              <a href="https://ajilakj.github.io/Interactive-Coding-Quiz/" target="_blank" rel="noreferrer"><img src="./assets/images/quiz.png"alt="Interactive coding quiz image with javascript question and options"/></a>
                         </div>
                         <div style={styles.cards}>
                              <h2><span data-descr="A daily planner">Daily planner</span></h2>
                              <p>Technologies used:</p><p><span class="green">JavaScript jQuery</span><span class="blue">CSS</span> <span class="red">HTML</span></p>
                              <a href="https://ajilakj.github.io/DailyPlanner/" target="_blank" rel="noreferrer"><img src="./assets/images/dailyplanner.png"alt="daily planner image with past present "/></a>
                         </div>
                         <div style={styles.cards}>
                              <h2><span data-descr="It is a code refactor project">Horiseon</span></h2>
                              <p>Technologies used:</p><p><span class="blue">CSS</span> <span class="red">HTML</span></p>
                              <a href="https://ajilakj.github.io/1-code-refractor" target="_blank" rel="noreferrer"><img src="./assets/images/horiseon.png" alt="a screen shot of horiseon project"/></a>
                         </div>
                    <div style={styles.cards}>
                         <h2><span data-descr="It is a cheatsheet for CSS">CSS Snippet cheatsheet</span></h2>
                         <p>Technologies used:</p><p><span class="blue">CSS</span> <span class="red">HTML</span></p>
                         <a href="https://ajilakj.github.io/CSS-Snippet/" target="_blank" rel="noreferrer"><img src="./assets/images/css-snippet.png"alt="a screen shot of CSS Snippet cheatsheet project"/></a>
                    </div>
               </fieldset>
               <fieldset style={styles.fieldset}>
                    <legend>Back End Projects </legend>
                    <div style={styles.cards}>
                         <h2><span data-descr="User can enter details. A readme will generate based on the input given.">ReadMe Generator</span></h2>
                         <p>Technologies used:</p><p><span class="blue">inquirer</span> <span class="red">Node</span><span class="green">JavaScript</span></p>
                         <a href="https://drive.google.com/file/d/1oy56ihCyHF0vsD6TgXlGO8SZUGfNxBld/edit" target="_blank" rel="noreferrer"><img src="./assets/images/readme.png"alt="an image of a sample readme fenerated using this app"/></a>
                    </div>
                    <div style={styles.cards}>
                         <h2><span data-descr="Manager can enter team member's details, Based on the input an html file will generate">Team Profile Generator</span></h2>
                         <p>Technologies used:</p><p><span class="orange">Jest</span> <span class="blue">inquirer</span> <span class="red">Node</span><span class="green">JavaScript</span></p>
                         <a href="https://drive.google.com/file/d/1fkdbNH3y3JD7HKvWkfk7MPmFh8GI31go/view" target="_blank" rel="noreferrer"><img src="./assets/images/TeamProfileGenerator.png"alt="an image of a sample readme fenerated using this app"/></a>
                    </div>
                    <div style={styles.cards}>
                         <h2><span data-descr="User can Save, Edit Delete notes">Note Taker</span></h2>
                         <p>Technologies used:</p><p><span class="orange">Express</span> <span class="blue">JSON</span> <span class="red">Node</span><span class="green">JavaScript</span></p>
                         <a href="https://murmuring-sands-90674.herokuapp.com/" target="_blank" rel="noreferrer"><img src="./assets/images/NoteTaker.png"alt="An image of note taker app with added items on the left side and selected item on the right"/></a>
                    </div>
                    <div style={styles.cards}>
                         <h2><span data-descr="user can read, create, update, delete products, categories, tag informations">E - commerce Back End</span></h2>
                         <p>Technologies used:</p><p><span class="blue">MySQL</span> <span class="red">ORM (Sequelize)</span><span class="green">Insomnia Core</span><span class="orange">Express</span> <span class="blue">JSON</span> <span class="red">Node</span><span class="green">JavaScript</span></p>
                         <a href="https://drive.google.com/file/d/1WYRN8hXWFxYyYGTe9koKhavD5ZLu0EFn/view" target="_blank" rel="noreferrer"><img src="./assets/images/E-commerceBackEnd.png"alt="Insomnia core image, ouput of product get route"/></a>
                    </div> 

               </fieldset>
               </div>
          </section>
    </div>
  );
}

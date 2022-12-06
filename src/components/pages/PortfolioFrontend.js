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
},
}
export default function PortfolioFrontend() {
  return (
    <div>
       <section id="my-works">
               <h1>My Works</h1>
               <div class="card-container">
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
               </div>
          </section>
    </div>
  );
}

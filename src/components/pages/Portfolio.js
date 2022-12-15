import React from 'react';
import almanac from '../../images/myDailyAlmanac.png'
import sport from '../../images/SportSpot.png'

const styles = {
container: {
     margin:'10%',
},
h1:{
     textAlign: 'center',
},
cardContainer:{
     display: 'flex',
     flexDirection:'row',
     flexWrap: 'wrap',
},
cards:{
  width:'325px',
  border: '2px dotted maroon',
  boxShadow: '10px 10px gray',
  borderRadius: '10px',
  padding:'25px',
  margin:'25px',
},
img:{
     width:'250px',
     height: '250px',
     padding: '15px',
},
spanColor:{
     color:'maroon'
}
}
export default function Portfolio({ currentPage, handlePageChange }) {
  return (
    <div>
     <h1 style={styles.h1}>My Works</h1>
       <section style={styles.container}>
               <div >
                    <fieldset style={styles.cardContainer}>
                         <legend>FRONTEND APPLICATIONS</legend>
                         <div style={styles.cards}>
                              <h2><span data-descr="It is a website to get content about various topics and save our own notes">My Daily Almanac</span></h2>
                              <p>Technologies used: API, JavaScript, CSS, BULMA, HTML</p>
                              <a href="https://mikeyboxx.github.io/my-daily-almanac/" target="_blank" rel="noreferrer"><img src={almanac} style={styles.img} alt="an image of contents based on user selection and a drop up menu with dates"/></a>
                         </div>
                         <div style={styles.cards}>
                              <h2><span data-descr="Weather Dashboard">Weather Dashboard</span></h2>
                              <p>Technologies used:<span class="orange">API</span><span class="green">JavaScript jQuery</span><span class="blue">CSS</span> <span class="red">HTML</span></p>
                              <a href="https://ajilakj.github.io/WeatherDashboard/" target="_blank" rel="noreferrer"><img src="./assets/images/weatherDashboard.png"alt="weather dashboard image with city name temp, wind and humidity"/></a>
                         </div>
                    </fieldset>
                    <fieldset style={styles.cardContainer}>
                         <legend>BACKEND APPLICATIONS</legend>
                         <div style={styles.cards}>
                         <h2><span data-descr="User can Save, Edit Delete notes">Note Taker</span></h2>
                         <p>Technologies used:</p><p><span class="orange">Express</span> <span class="blue">JSON</span> <span class="red">Node</span><span class="green">JavaScript</span></p>
                         <a href="https://murmuring-sands-90674.herokuapp.com/" target="_blank" rel="noreferrer"><img src="./assets/images/NoteTaker.png"alt="An image of note taker app with added items on the left side and selected item on the right"/></a>
                    </div>
                    <div style={styles.cards}>
                         <h2><span data-descr="Manager can enter team member's details, Based on the input an html file will generate">Team Profile Generator</span></h2>
                         <p>Technologies used:</p><p><span class="orange">Jest</span> <span class="blue">inquirer</span> <span class="red">Node</span><span class="green">JavaScript</span></p>
                         <a href="https://drive.google.com/file/d/1fkdbNH3y3JD7HKvWkfk7MPmFh8GI31go/view" target="_blank" rel="noreferrer"><img src="./assets/images/TeamProfileGenerator.png"alt="an image of a sample readme fenerated using this app"/></a>
                    </div>
                    </fieldset>
                    {/* <div style={styles.cards}>
                         <h2><span data-descr="It is a website to get posts about different sports">Sport spot</span></h2>
                         <p>Technologies used: Handlebars, Express, Node, Sequelize, npm, ESLint, MySQL, JavaScript, CSS</p>
                         <a href="https://the-sport-spot-team-1.herokuapp.com/" target="_blank" rel="noreferrer"><img src={sport} style={styles.img} alt="an image of 4 sports cards and a navigation bar"/></a>
                    </div> */}
                   
               </div>
          </section>
    </div>
  );
}

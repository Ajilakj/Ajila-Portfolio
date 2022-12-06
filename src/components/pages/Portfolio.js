import React from 'react';
import almanac from '../../images/myDailyAlmanac.png'
import sport from '../../images/SportSpot.png'

const styles = {
container: {
     margin:'10%',
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
  textAlign: 'center',
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
       <section style={styles.container}>
               <h1>My Works</h1>
               <div style={styles.cardContainer}>
                    <div style={styles.cards}>
                         <h2><span data-descr="It is a website to get posts about different sports">Sport spot</span></h2>
                         <p>Technologies used: Handlebars, Express, Node, Sequelize, npm, ESLint, MySQL, JavaScript, CSS</p>
                         <a href="https://the-sport-spot-team-1.herokuapp.com/" target="_blank" rel="noreferrer"><img src={sport} style={styles.img} alt="an image of 4 sports cards and a navigation bar"/></a>
                    </div>
                    <div style={styles.cards}>
                         <h2><span data-descr="It is a website to get content about various topics and save our own notes">My Daily Almanac</span></h2>
                         <p>Technologies used: API, JavaScript, CSS, BULMA, HTML</p>
                         <a href="https://mikeyboxx.github.io/my-daily-almanac/" target="_blank" rel="noreferrer"><img src={almanac} style={styles.img} alt="an image of contents based on user selection and a drop up menu with dates"/></a>
                    </div>
                    {/* <a href="#PortfolioFrontend" */}
                          {/* className={currentPage === 'PortfolioFrontend'} onClick={() => handlePageChange('PortfolioFrontend')}> */}
                         <div style={styles.cards}>
                              <h2><span data-descr="Frontend Apps">Front End Applications</span></h2>
                              <p>Technologies used: API, JavaScript, jQuery, CSS, HTML</p>
                         </div>      
                    {/* </a> */}
                    <div style={styles.cards}>
                         <h2><span data-descr="Back End Projects">Back End Projects</span></h2>
                         <p>Technologies used: MySQL, ORM (Sequelize), Insomnia Core, Express, JSON, Node, JavaScript</p>
                         {/* <a href="https://drive.google.com/file/d/1oy56ihCyHF0vsD6TgXlGO8SZUGfNxBld/edit" target="_blank" rel="noreferrer"><img src="./assets/images/readme.png"alt="an image of a sample readme fenerated using this app"/></a> */}
                    </div>
               </div>
          </section>
    </div>
  );
}

import React from 'react';
const styles = {
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
spanColor:{
     color:'maroon'
}
}
export default function Portfolio({ currentPage, handlePageChange }) {
  return (
    <div>
       <section id="my-works">
               <h2>My Works</h2>
               <div style={styles.cardContainer}>
                    <div style={styles.cards}>
                         <h2><span data-descr="It is a website to get posts about different sports">Sport spot</span></h2>
                         <p>Technologies used:<span style={styles.spanColor}>Handlebars</span><span class="orange">Express</span><span class="green">Node</span><span class="blue">Sequelize</span> <span class="red">npm</span><span class="orange">ESLint</span><span class="blue">MySQL</span><span class="green">JavaScript</span><span class="blue">CSS</span></p>
                         <a href="https://the-sport-spot-team-1.herokuapp.com/" target="_blank" rel="noreferrer"><img src="./assets/images/SportSpot.png"alt="an image of 4 sports cards and a navigation bar"/></a>
                    </div>
                    <div style={styles.cards} class="first-item">
                         <h2><span data-descr="It is a website to get content about various topics and save our own notes">My Daily Almanac</span></h2>
                         <p>Technologies used:<span class="orange">API</span><span class="green">JavaScript</span><span class="blue">CSS, BULMA</span> <span class="red">HTML</span></p>
                         <a href="https://mikeyboxx.github.io/my-daily-almanac/" target="_blank" rel="noreferrer"><img src="./assets/images/myDailyAlmanac.png"alt="an image of contents based on user selection and a drop up menu with dates"/></a>
                    </div>
                    <a href="#PortfolioFrontend"
                          className={currentPage === 'PortfolioFrontend'} onClick={() => handlePageChange('PortfolioFrontend')}>
                         <div style={styles.cards}>
                              <h2><span data-descr="Frontend Apps">Frontend Applications</span></h2>
                              <p>Technologies used:<span class="orange">API</span><span class="green">JavaScript jQuery</span><span class="blue">CSS</span> <span class="red">HTML</span></p>
                  
                         </div>      
                    </a>
                    <div style={styles.cards}>
                         <h2><span data-descr="Back End Projects">Back End Projects</span></h2>
                         <p><span class="blue">MySQL</span> <span class="red">ORM (Sequelize)</span><span class="green">Insomnia Core</span><span class="orange">Express</span> <span class="blue">JSON</span> <span class="red">Node</span><span class="green">JavaScript</span></p>
                         {/* <a href="https://drive.google.com/file/d/1oy56ihCyHF0vsD6TgXlGO8SZUGfNxBld/edit" target="_blank" rel="noreferrer"><img src="./assets/images/readme.png"alt="an image of a sample readme fenerated using this app"/></a> */}
                    </div>
               </div>
          </section>
    </div>
  );
}

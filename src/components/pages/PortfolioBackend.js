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
export default function Portfolio() {
  return (
    <div>
       <section id="my-works">
               <h2>My Works</h2>
               <div class="card-container">
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
               </div>
          </section>
    </div>
  );
}

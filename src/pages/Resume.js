import React from 'react';
// import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
// import resume from '../../images/Resume-Portfolio (1).pdf'

export default function Resume() {
  return (
    <div id="resume">
      <h2>Resume</h2>
      <h3>Profile</h3>
        Full stack Web Developer with a Master's degree in Computer science and Bachelor's Degree in Mathematics. Recently earned a certificate in Full Stack Development from Columbia Engineering, New York, and acquired skills in  React, MongoDB, Node, Express, JavaScript, and other web-related technologies 
      <h3>Summary</h3>
      <ul>
        <li>
          Experience with the entire software development life-cycle (SDLC) (design, development, and deployment) and agile software methodologies (scrum).  
        </li>
        <li>
          Familiar with developing User Interface (UI) applications and using React, Node, Express, MongoDB,  JavaScript, JQuery, HTML5, and CSS3
        </li>
        <li>
          Knowledge in using Bootstrap, Bulma and CSS3 media queries for developing Responsive web design to support various screen sizes.  
        </li>
        <li>
          Experience with analyzing the Document Object Model (DOM) Layout, DOM Functions and JavaScript functions. 
        </li>
        <li>
          Familiar in web Accessibility standard implementation to make websites accessible and inclusive for all audiences.
        </li>
        <li>
          Knowledge in implementing SEO practices to make the websites pages rank high and searchable for various  Search Engines 
        </li>
        <li>
          Familiar in optimizing websites for better performance using tools like Lighthouse, Chrome Developer tool etc.
        </li>
        <li>
          Knowledge in working in AGILE based development environment 
        </li>
    </ul>
    <h3>Technical Skill</h3>
      <table>
        <tr>
          <td>
            Web Technologies
          </td>
          <td>
            HTML5, CSS3, JavaScript, Bootstrap, SASS, HandleBars (MVC framework)
          </td>
        </tr>
        <tr>
          <td>
            JavaScript Libraries
          </td>
          <td>
            JQuery,  JQueryUI, Node.js and React v.18
          </td>
        </tr>
        <tr>
          <td>
            Testing framework
          </td>
          <td>
            jest
          </td>
        </tr>
        <tr>
          <td>
            Web Standards
          </td>
          <td>
            Accessibility, SEO, Progressive Web App, Responsive design
          </td>
        </tr>
        <tr>
          <td>
            Development Tools
          </td>
          <td>
            VS code
          </td>
        </tr>
        <tr>
          <td>
            Version Control
          </td>
          <td>
            GitHub
          </td>
        </tr>
        <tr>
          <td>
            Methodologies
          </td>
          <td>
            Agile, Waterfall
          </td>
        </tr>
        <tr>
          <td>
            Web Servers
          </td>
          <td>
            Express 
          </td>
        </tr>
        <tr>
          <td>
            Database
          </td>
          <td>
            MongoDB, MySQL
          </td>
        </tr>
        <tr>
          <td>
            Operating Systems
          </td>
          <td>
            Windows
          </td>
        </tr>
      </table>
   <h3>Experience</h3> 
  <p>CTC group of institutions / Computer Science Teacher
  June 2004 - May 2005,  Calicut, Kerala, India</p>
  <p>I was teaching Computer science subjects (C, Graphics, Java, Computer fundamentals) to polytechnic students.
  </p>
<h3>Education</h3>
<table>
  <tr>
    <th>
      Course
    </th>
    <th>
      Details
    </th>
  </tr>
  <tr>
    <td>
      Columbia Engineering Full stack Web development
    </td>
    <td>
      Columbia Engineering Boot Camps   (Sept 2022- Dec 2022) 
      React, MongoDB, Express, Node, MySQL, PWA, Handlebars, Sequelize, OOP, API, jQuery, JavaScript, Heroku, Git, Bootstrap, CSS, HTML
    </td>
  </tr>
  <tr>
    <td>
       Masters in Computer Science
    </td>
    <td>
      Maharshi Dayanand University (Rohtak, India)
      Software Engineering, Software testing, Artificial intelligence, c++, etc 
    </td>
  </tr>
  <tr>
    <td>
      DOEACC A Level 
      Computer Science
    </td>
    <td>
      Department of Electronics and Accreditation of Computer Courses  Kerala, India
      VB, C, Foxpro, Computer Graphics, DBMS, OOP, etc
    </td>
  </tr>
  <tr>
    <td>
      IBM Web Programming    
    </td>
    <td>
      IBM center Calicut, Kerala, India
      HTML, XML, VBscript, JavaScript, ASP
    </td>
  </tr>
  <tr>
    <td>  
      APGDCA (Advance Post Graduate Diploma in Computer Applications)
    </td>
    <td>
      St. Joseph’s College, Devagiri,  Calicut, Kerala, India
      Java, Oracle, VB, C, Foxpro, Computer Graphics, DBMS, OOP, etc
    </td>
  </tr>
  <tr>
    <td>
      Bachelor of Science (Mathematics)
    </td>
    <td>
      Providence Women’s College,  Calicut, India 
      It is a 3 year bachelor degree course in Mathematics
    </td>
  </tr>
</table>


































      {/* <Document style={styles.document} file={resume}>
      <Page pageNumber={1}/>
      </Document> */}
    </div>
  );
}

import React from 'react';
import profile from '../../images/Ajila.JPG'

const styles = {
  container: {
    margin:'10%',
  },
  aboutMe: {
    display:'flex',
    padding:'20px',
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  h1:{
    textAlign: 'center',
  },
  p:{
    width:'45%',
    fontSize:'26px'
    // padding:'10px',
    // margin:'10px'
  },
  img:{
    width:'35%',
    borderRadius:'50%'
  }
};

export default function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>About Me</h1>
      <div style={styles.aboutMe} >
        <img src={profile} alt="My profile picture"style={styles.img} />
        <p style={styles.p} >
            <b>Hi, I am Ajila</b> <br/>
            I graduated Fullstack coding bootcamp from Columbia Engineering.<br/>
             As a fullstack developer I am familiar with React, Express, MongoDB, Node .................. This portfoilio will express you some of my works which I am really proud of.
        </p>
      </div>
    </div>
  );
}

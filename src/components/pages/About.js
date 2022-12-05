import React from 'react';

const styles = {
  aboutMe: {
    // background: 'green',
    display:'flex',
    padding:'20px',
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  p:{
    width:'45%'
  },
  img:{
    width:'45%'
  }
};

export default function About() {
  return (
    <div id="about-me">
      <h1>About Me</h1>
      <div style={styles.aboutMe} >
        <img style={styles.img} src="./assets/images/avtar.png" alt="My avtar picture"/>
        <p style={styles.p} >
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
          in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
        </p>
      </div>
    </div>
  );
}

import React from 'react';
import profile from '../../images/avtar.png'

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
    width:'45%'
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
        <img src={profile} alt="My avtar picture"style={styles.img} />
        <p style={styles.p} >
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
          mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
          lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
          imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
          in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
          Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
          Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        </p>
      </div>
    </div>
  );
}

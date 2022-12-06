import React from 'react';
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import resume from '../../images/Resume-Portfolio (1).pdf'

const styles = {
  container: {
    margin:'10%',
  },
  document:{
    display:'flex',
    width:'20px',
    flexDirection:'row',
    justifyContent: 'space-between',
  }
  }
export default function Resume() {
  return (
    <div style={styles.container}>
      <h1>Resume</h1>
      <Document style={styles.document} file={resume}>
      <Page pageNumber={1}/>
      </Document>
    </div>
  );
}

import React, { useState } from 'react';
const styles = {
container: {
  margin:'10%',
},
}
function Form() {
const [name, setName] = useState('');
const [email, setEmail] = useState(''); 
const [msg, setMsg] = useState(''); 
const handleInputChange = (e) => {
  // Getting the value and name of the input which triggered the change
  const { target } = e;
  const inputType = target.name;
  const inputValue = target.value;

  // Based on the input type, we set the state of either email, username, and password
  // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

  if (inputType === 'email') {
    setEmail(inputValue);
  } else if (inputType === 'name') {
    setName(inputValue);
  } else if (inputType === 'msg') {
    setMsg(inputValue);
  }
};
  return (
    <div style={styles.container}>
    <h1>Contact Me</h1>
    <form className="form">
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
          placeholder="Enter your name"
        /><br/>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Enter your email"
        /><br/>
        <input
          value={msg}
          name="msg"
          onChange={handleInputChange}
          type="text"
          placeholder="Send me a message"
        /><br/>
        <button type="button" onClick={handleInputChange}>
          Submit
        </button>
      </form>
    <div id="contact-me-info">
         <h4>Phone: 551-263-7663</h4>
         <h4>email: <a href="mailto:kjajila@gmail.com">kjajila@gmail.com</a></h4>
         <h4><a href="https://github.com/Ajilakj" target="_blank" rel="noreferrer">GitHub</a></h4>
         <h4><a href="https://www.linkedin.com/in/ajila-j-621445221/" target="_blank" rel="noreferrer">LinkedIn</a></h4>
    </div>
</div>
  );
}
export default Form;
import React, { useState } from 'react';
import './style.css';
function Form() {
const [name, setName] = useState('');
const [email, setEmail] = useState(''); 
const [msg, setMsg] = useState(''); 
const handleInputChange = (e) => {

  const { target } = e;
  const inputType = target.name;
  const inputValue = target.value;

  if (inputType === 'email') {
    setEmail(inputValue);
  } else if (inputType === 'name') {
    setName(inputValue);
  } else if (inputType === 'msg') {
    setMsg(inputValue);
  }
};
  return (
    <main id="contact">
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
    <section id="contact-me-info">
         <h4>Phone: 551-263-7663</h4>
         <h4>email: <a href="mailto:kjajila@gmail.com">kjajila@gmail.com</a></h4>
    </section>
</main>
  );
}
export default Form;
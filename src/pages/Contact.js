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
    <>
    <h1>Contact Me</h1>
    <div className="inner-wrapper">
      <div className="tow-coloum">
        <form className="form">
          <p>
            <label for="your-name">Your Name:</label>
            <input
              id="your-name"
              value={name}
              name="name"
              onChange={handleInputChange}
              type="text"
              placeholder="Enter your name"
            />
            </p>
            <p>
             <label for="your-email">Your Email:</label>
            <input
              id="your-email"
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="Enter your email"
            />
            </p>
            <p>
            <label for="message">Mesage:</label>
            <textarea
              id="message"
              value={msg}
              name="msg"
              onChange={handleInputChange}
              type="text"
              placeholder="Send me a message"
            />
            </p>
            <button type="button" className='link-button' onClick={handleInputChange}>
              Submit
            </button>
          </form>


          <section id="contact-me-info">
            <h4>Phone: 551-263-7663</h4>
            <h4>email: <a href="mailto:kjajila@gmail.com">kjajila@gmail.com</a></h4>
          </section>
      </div>
      </div>
</>
  );
}
export default Form;
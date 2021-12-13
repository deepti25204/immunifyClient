import './Contact.css';
import { useState } from 'react';

const MultipleInputs = () => {

  const [userDetail, setUserDetail] = useState({
    username: "",
    email: "",
    subject: "",
    phone: "",
    message: ""
  })

  const postData = () => {
    fetch("http://localhost:9000/contact", {
      method: "post",
      headers: {
        "Content-Type":"application/json",
        'Accept': 'application/json'
      },
      body:JSON.stringify({
        ...userDetail
      })
    })
    .then(res => res.json())
    .then(data => {
      setUserDetail({ username: "", email: "", subject: "", phone: "", message: "" });
      console.log(data);
      alert('Message sent successfully');
    })
    .catch(err => alert('Message Failed'))
  }

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserDetail({...userDetail, [name]: value });
  }

  // TODO-NOW: update to field bind instead of alert
  const requirementValidation = () => {
    if(!(userDetail.email || userDetail.phone)) {
      alert("Please enter either email or phone");
      return false;
    } 
    if(!(userDetail.subject)) {
      alert("Please enter subject");
      return false;
    }
    if(!(userDetail.message)) {
      alert("Please enter message");
      return false;
    }
    return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(requirementValidation()) {
      postData();
    }
  }

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <input value={userDetail.username}
          onChange={handleInputs}
          type="text" autoComplete="new-off" 
          name="username" id="username" 
          placeholder="Your Name"/>
        </div>

        <div>
          <input value={userDetail.email} 
          onChange={handleInputs}
          type="email" autoComplete="off" 
          name="email" id="email" placeholder="Email"/>
        </div>

        <div>
          <input value={userDetail.subject} 
          onChange={handleInputs}
          type="text" autoComplete="off" 
          name="subject" id="subject" 
          placeholder="Subject"/>
        </div>

        <div>
          <input value={userDetail.phone} 
          onChange={handleInputs}
          type="text" autoComplete="new-off" name="phone" 
          id="phone" placeholder="Phone"/>
        </div>

        <div>
          <textarea value={userDetail.message} 
            onChange={handleInputs}
            autoComplete="new-off" rows="3" 
            name="message" id="message" 
            placeholder="Message">
          </textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </>
  )
}

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact__container container">
        <h2>Contact Us</h2>
        <div className="contact__subheading">Keep in touch</div>
        <div className="contact__form">
          <MultipleInputs />
        </div>
      </div>
    </section>
  )
}

export default Contact;
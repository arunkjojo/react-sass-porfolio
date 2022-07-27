import { useState } from 'react'
import '../../styles/contact.scss'

const Contact = () => {
  const [message, setMessage] = useState(false);
  const [post, setPost] = useState({
    email: '',
    messages: ''
  });

  const changeMessage = (e) => {
    setPost({
      ...post,
      [e.target.name]:e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(post.email !== '' && post.messages !== '')
      setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="email" value={post.email} onChange={changeMessage} placeholder="Email" />
          <textarea  name="messages" onChange={changeMessage} placeholder="Message">{post.messages}</textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply soon!</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;

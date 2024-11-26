import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>If you have any questions or concerns, please reach out to us using the contact information below:</p>
      <p>Email: info@shishikokoroproperty.com</p>
      <p>Phone: (555) 123-4567</p>

      <h3>Send Us a Message</h3>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <br />
        <label>
          Message:
          <textarea name="message" />
        </label>
        <br />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
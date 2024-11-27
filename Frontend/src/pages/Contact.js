import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert("Thank you for reaching out! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Contact Us</h1>
      <p style={styles.description}>
        Have questions or need assistance? Reach out to us through the contact form below or use our company contact information.
      </p>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.subheading}>Send Us a Message</h2>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          style={styles.input}
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          style={styles.input}
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          style={styles.textarea}
          required
        ></textarea>
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>

      {/* Company Contact Details */}
      <section style={styles.section}>
        <h2 style={styles.subheading}>Contact Information</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Email:</strong> support@shishikokoro.com
          </li>
          <li style={styles.listItem}>
            <strong>Phone:</strong> +1 (555) 123-4567
          </li>
          <li style={styles.listItem}>
            <strong>Address:</strong> 123 Kokoro Street, Suite 456, Philadelphia, PA 19133
          </li>
        </ul>
      </section>

      {/* Map Placeholder */}
      <section style={styles.section}>
        <h2 style={styles.subheading}>Find Us</h2>
        <div style={styles.map}>
          <p>Map placeholder (Google Maps integration can be added here)</p>
        </div>
      </section>
    </div>
  );
};

// Styles for the Contact Page
const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "left",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    color: "#333",
    fontSize: "2.5rem",
    marginBottom: "20px",
    textAlign: "center",
  },
  description: {
    color: "#555",
    fontSize: "1.2rem",
    marginBottom: "30px",
    textAlign: "center",
  },
  form: {
    marginBottom: "30px",
  },
  subheading: {
    color: "#444",
    fontSize: "1.8rem",
    marginBottom: "15px",
    textAlign: "center",
  },
  input: {
    display: "block",
    width: "100%",
    marginBottom: "15px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  textarea: {
    display: "block",
    width: "100%",
    height: "120px",
    marginBottom: "15px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "1rem",
  },
  section: {
    marginBottom: "30px",
  },
  list: {
    listStyleType: "none",
    paddingLeft: "0",
  },
  listItem: {
    color: "#555",
    fontSize: "1.1rem",
    marginBottom: "10px",
  },
  map: {
    width: "100%",
    height: "300px",
    backgroundColor: "#ddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "8px",
    color: "#666",
    fontSize: "1.2rem",
  },
};

export default Contact;

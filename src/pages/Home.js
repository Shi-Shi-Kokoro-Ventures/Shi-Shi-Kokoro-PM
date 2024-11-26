import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Shi Shi Kokoro Property Management</h1>
      <p style={styles.description}>
        Experience the perfect blend of technology and personalized service with Shi Shi Kokoro Property Management. 
        We are committed to creating exceptional living and ownership experiences.
      </p>

      {/* Features Section */}
      <section style={styles.section}>
        <h2 style={styles.subheading}>Our Services</h2>
        <p style={styles.text}>
          Whether you're a tenant or property owner, we provide tailored services to meet your needs.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Comprehensive tenant and owner dashboards</li>
          <li style={styles.listItem}>24/7 concierge support and maintenance</li>
          <li style={styles.listItem}>Secure online rent payments and tracking</li>
          <li style={styles.listItem}>Detailed financial reports for property owners</li>
          <li style={styles.listItem}>Reward programs for tenants</li>
        </ul>
      </section>

      {/* Get Started Section */}
      <section style={styles.section}>
        <h2 style={styles.subheading}>Get Started Today</h2>
        <p style={styles.text}>
          Navigate through the site to explore our services and dashboards. Let us help you simplify property management.
        </p>
        <div style={styles.buttonContainer}>
          <a href="/tenants" style={styles.button}>
            Tenant Dashboard
          </a>
          <a href="/owners" style={styles.button}>
            Owner Dashboard
          </a>
          <a href="/contact" style={styles.button}>
            Contact Us
          </a>
        </div>
      </section>

      {/* About Us Section */}
      <section style={styles.section}>
        <h2 style={styles.subheading}>Why Choose Us?</h2>
        <p style={styles.text}>
          At Shi Shi Kokoro Property Management, we take pride in offering a seamless and stress-free experience for 
          property owners and tenants alike. We focus on technology-driven solutions and personalized customer care 
          to ensure satisfaction at every step.
        </p>
      </section>
    </div>
  );
};

// Styles for the page
const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    maxWidth: "900px",
    margin: "0 auto",
    textAlign: "center",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    color: "#333",
    fontSize: "2.5rem",
    marginBottom: "20px",
  },
  description: {
    color: "#555",
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "30px",
  },
  subheading: {
    color: "#444",
    fontSize: "1.8rem",
    marginBottom: "10px",
  },
  text: {
    color: "#555",
    fontSize: "1.1rem",
    marginBottom: "15px",
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "20px",
    textAlign: "left",
  },
  listItem: {
    color: "#444",
    fontSize: "1rem",
    marginBottom: "10px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "1rem",
  },
};

export default Home;

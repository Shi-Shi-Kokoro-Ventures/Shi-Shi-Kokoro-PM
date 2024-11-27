import React from "react";

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to Shi Shi Kokoro Property Management</h1>
      <p style={styles.description}>
        Experience the perfect blend of technology and personalized service. We provide exceptional property management solutions for both tenants and property owners.
      </p>

      {/* Key Features Section */}
      <section style={styles.section}>
        <h2 style={styles.subheading}>Our Services</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Comprehensive tenant and owner dashboards</li>
          <li style={styles.listItem}>24/7 concierge support and maintenance</li>
          <li style={styles.listItem}>Secure online rent payments powered by Stripe</li>
          <li style={styles.listItem}>Detailed financial reports for property owners</li>
          <li style={styles.listItem}>Reward programs for tenants</li>
        </ul>
      </section>

      {/* Payment Section */}
      <section style={styles.section}>
        <h2 style={styles.subheading}>Make a Payment</h2>
        <p style={styles.text}>
          We’ve partnered with Stripe to provide secure and seamless online rent payments.
        </p>
        <div style={styles.buttonContainer}>
          <button
            style={styles.button}
            onClick={() => window.location.href = "/tenants"}
          >
            Tenant Payments
          </button>
          <button
            style={styles.button}
            onClick={() => window.location.href = "/owners"}
          >
            Owner Payments
          </button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section style={styles.section}>
        <h2 style={styles.subheading}>Why Choose Us?</h2>
        <p style={styles.text}>
          At Shi Shi Kokoro Property Management, we take pride in offering a seamless and stress-free experience for property owners and tenants alike. We focus on technology-driven solutions and personalized customer care.
        </p>
      </section>
    </div>
  );
};

// Styles for the Home page
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
  section: {
    marginBottom: "30px",
  },
  subheading: {
    color: "#444",
    fontSize: "1.8rem",
    marginBottom: "15px",
    textAlign: "center",
  },
  list: {
    listStyleType: "disc",
    paddingLeft: "20px",
  },
  listItem: {
    color: "#444",
    fontSize: "1rem",
    marginBottom: "10px",
  },
  text: {
    color: "#555",
    fontSize: "1.1rem",
    marginBottom: "15px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
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
};

export default Home;


import React from "react";

const Concierges = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Concierge Services</h2>
      <p style={styles.description}>
        At Shi Shi Kokoro Property Management, we go above and beyond to ensure
        our tenants and property owners enjoy unparalleled convenience and support.
        Discover the wide range of personalized services available to make your
        rental experience seamless and stress-free.
      </p>

      {/* Property Maintenance Section */}
      <section style={styles.section}>
        <h3 style={styles.subheading}>Property Maintenance</h3>
        <p style={styles.text}>
          Submit maintenance requests and track their progress in real-time.
          Our team is dedicated to ensuring your home or property is always in top condition.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Plumbing Repairs</li>
          <li style={styles.listItem}>Electrical Fixes</li>
          <li style={styles.listItem}>Appliance Maintenance</li>
        </ul>
        <button style={styles.button} onClick={() => alert("Submit Maintenance Request")}>
          Submit a Request
        </button>
      </section>

      {/* On-Demand Cleaning Section */}
      <section style={styles.section}>
        <h3 style={styles.subheading}>On-Demand Cleaning</h3>
        <p style={styles.text}>
          Book professional cleaning services through your tenant portal.
          We offer options for deep cleans, move-in/move-out cleans, or routine maintenance cleaning.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Deep Cleaning Services</li>
          <li style={styles.listItem}>Move-In/Move-Out Cleaning</li>
          <li style={styles.listItem}>Weekly/Monthly Cleaning Plans</li>
        </ul>
        <button style={styles.button} onClick={() => alert("Book Cleaning Services")}>
          Book a Cleaning
        </button>
      </section>

      {/* 24/7 Support Section */}
      <section style={styles.section}>
        <h3 style={styles.subheading}>24/7 Support</h3>
        <p style={styles.text}>
          Have a question or emergency? Our team is available to assist you any time of day or night.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Emergency Maintenance Requests</li>
          <li style={styles.listItem}>General Inquiries</li>
          <li style={styles.listItem}>Support via Chat, Email, or Phone</li>
        </ul>
        <button style={styles.button} onClick={() => alert("Contact Support")}>
          Contact Support
        </button>
      </section>

      {/* Reward Points Section */}
      <section style={styles.section}>
        <h3 style={styles.subheading}>Reward Points Program</h3>
        <p style={styles.text}>
          Earn points for timely rent payments, referring new tenants, and more.
          Redeem points for discounts, gift cards, or exclusive tenant perks.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Earn points for paying rent on time</li>
          <li style={styles.listItem}>Redeem points for discounts or gift cards</li>
          <li style={styles.listItem}>Refer tenants and earn bonus points</li>
        </ul>
        <button style={styles.button} onClick={() => alert("Redeem Your Points")}>
          Redeem Points
        </button>
      </section>

      {/* Additional Services Section */}
      <section style={styles.section}>
        <h3 style={styles.subheading}>Additional Services</h3>
        <p style={styles.text}>
          Take advantage of exclusive services tailored to your lifestyle and needs.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Package Handling & Delivery Assistance</li>
          <li style={styles.listItem}>Pet Services (Pet Sitting, Walking)</li>
          <li style={styles.listItem}>Local Event Recommendations</li>
        </ul>
        <button style={styles.button} onClick={() => alert("Explore Additional Services")}>
          Explore More
        </button>
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
    marginBottom: "20px",
    textAlign: "center",
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
  },
  listItem: {
    color: "#444",
    fontSize: "1rem",
    marginBottom: "10px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    marginTop: "10px",
  },
};

export default Concierges;

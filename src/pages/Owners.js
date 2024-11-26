import React from "react";

const Owners = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Owner Dashboard</h2>
      <p style={styles.description}>
        Welcome to the Owner Dashboard! Manage your properties, track tenant
        activity, and access valuable insights to maximize your investments.
      </p>

      {/* Manage Properties Section */}
      <section style={styles.section}>
        <h3 style={styles.subheading}>Manage Properties</h3>
        <p style={styles.text}>
          Stay in control of your property portfolio with real-time updates and
          management tools.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>View property details and status</li>
          <li style={styles.listItem}>Add or remove properties</li>
          <li style={styles.listItem}>Schedule property maintenance</li>
        </ul>
      </section>

      {/* Financial Reports Section */}
      <section style={styles.section}>
        <h3 style={styles.subheading}>Financial Reports</h3>
        <p style={styles.text}>
          Access detailed financial reports to stay informed about your
          property income and expenses.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Monthly income and expense summaries</li>
          <li style={styles.listItem}>Tax documents and year-end reports</li>
          <li style={styles.listItem}>Downloadable financial statements</li>
        </ul>
      </section>

      {/* Manage Tenants Section */}
      <section style={styles.section}>
        <h3 style={styles.subheading}>Manage Tenants</h3>
        <p style={styles.text}>
          Keep track of tenant activity and maintain strong communication.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>View tenant details and lease agreements</li>
          <li style={styles.listItem}>Track rent payments and outstanding balances</li>
          <li style={styles.listItem}>Send notices or updates to tenants</li>
        </ul>
      </section>

      {/* Support Section */}
      <section style={styles.section}>
        <h3 style={styles.subheading}>Owner Support</h3>
        <p style={styles.text}>
          Need help? Our dedicated support team is here to assist you.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>24/7 owner support hotline</li>
          <li style={styles.listItem}>Live chat with property managers</li>
          <li style={styles.listItem}>FAQs and resources</li>
        </ul>
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
};

export default Owners;
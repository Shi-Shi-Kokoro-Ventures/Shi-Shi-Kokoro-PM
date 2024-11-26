import React from "react";

const Owners = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Owner Dashboard</h2>
      <p style={styles.description}>
        Welcome to the Owner Dashboard! Manage your properties, track tenant
        activity, access financial insights, and leverage our dedicated support system to maximize your property investments.
      </p>

      {/* Property Portfolio Management */}
      <section style={styles.section}>
        <h3 style={styles.subheading}>Property Portfolio</h3>
        <p style={styles.text}>
          Access all your properties in one place. Manage details, tenants, and maintenance efficiently.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Add or remove properties</li>
          <li style={styles.listItem}>View occupancy rates and leasing information</li>
          <li style={styles.listItem}>Track maintenance requests and status</li>
          <li style={styles.listItem}>Download property performance reports</li>
        </ul>
      </section>

      {/* Financial Insights */}
      <section style={styles.section}>
        <h3 style={styles.subheading}>Financial Insights</h3>
        <p style={styles.text}>
          Stay on top of your financial performance with real-time reporting and insights.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Track rent payments and overdue balances</li>
          <li style={styles.listItem}>View monthly, quarterly, and annual reports</li>
          <li style={styles.listItem}>Generate tax documents and prepare for filings</li>
          <li style={styles.listItem}>Access ROI and profit/loss analysis</li>
        </ul>
      </section>

      {/* Tenant Communication */}
      <section style={styles.section}>
        <h3 style={styles.subheading}>Tenant Communication</h3>
        <p style={styles.text}>
          Ensure seamless communication with your tenants to foster a positive experience.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Send announcements or updates</li>
          <li style={styles.listItem}>Review tenant feedback</li>
          <li style={styles.listItem}>Access lease agreements and tenant profiles</li>
          <li style={styles.listItem}>Issue rent reminders and notices</li>
        </ul>
      </section>

      {/* Maintenance Requests */}
      <section style={styles.section}>
        <h3 style={styles.subheading}>Maintenance Tracking</h3>
        <p style={styles.text}>
          Manage maintenance requests with ease and ensure all issues are resolved promptly.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>View all active and completed requests</li>
          <li style={styles.listItem}>Approve repair estimates</li>
          <li style={styles.listItem}>Schedule regular inspections</li>
          <li style={styles.listItem}>Monitor vendor performance and feedback</li>
        </ul>
      </section>

      {/* Owner Support */}
      <section style={styles.section}>
        <h3 style={styles.subheading}>Owner Support</h3>
        <p style={styles.text}>
          Your success is our priority. Connect with our dedicated support team for assistance.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>24/7 access to live support</li>
          <li style={styles.listItem}>Chat with property management experts</li>
          <li style={styles.listItem}>Explore our knowledge base and resources</li>
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

import React, { useEffect, useState } from "react";

const Tenants = () => {
  const [points, setPoints] = useState(0); // State for reward points
  const [paymentHistory, setPaymentHistory] = useState([]); // State for payment history
  const [leaseDetails, setLeaseDetails] = useState(null); // State for lease details
  const [paymentStatus, setPaymentStatus] = useState(""); // State for rent payment status

  // Fetch reward points, payment history, and lease details when the component mounts
  useEffect(() => {
    fetch("http://localhost:5000/api/points")
      .then((response) => response.json())
      .then((data) => setPoints(data.points))
      .catch((error) => console.error("Error fetching points:", error));

    fetch("http://localhost:5000/api/payment-history")
      .then((response) => response.json())
      .then((data) => setPaymentHistory(data))
      .catch((error) => console.error("Error fetching payment history:", error));

    fetch("http://localhost:5000/api/lease")
      .then((response) => response.json())
      .then((data) => setLeaseDetails(data))
      .catch((error) => console.error("Error fetching lease details:", error));
  }, []);

  // Handle rent payment
  const handlePayRent = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/pay-rent", {
        method: "POST",
      });
      const data = await response.json();
      setPaymentStatus(data.message);
    } catch (error) {
      console.error("Error processing rent payment:", error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Tenant Dashboard</h2>
      <p style={styles.description}>
        Welcome to the Tenant Dashboard! Manage your lease, pay rent, and track
        your rewards here.
      </p>

      {/* Lease Details Section */}
      {leaseDetails && (
        <section style={styles.section}>
          <h3 style={styles.subheading}>Lease Details</h3>
          <p style={styles.text}>
            <strong>Property Address:</strong> {leaseDetails.propertyAddress}
          </p>
          <p style={styles.text}>
            <strong>Lease Start Date:</strong> {leaseDetails.startDate}
          </p>
          <p style={styles.text}>
            <strong>Lease End Date:</strong> {leaseDetails.endDate}
          </p>
          <a
            href={leaseDetails.leaseDocumentUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            View Lease Agreement
          </a>
        </section>
      )}

      {/* Rent Payment Section */}
      <section style={styles.section}>
        <h3 style={styles.subheading}>Rent Payment</h3>
        <p style={styles.text}>
          Use the button below to pay your rent securely.
        </p>
        <button style={styles.button} onClick={handlePayRent}>
          Pay Rent
        </button>
        {paymentStatus && <p style={styles.text}>{paymentStatus}</p>}
      </section>

      {/* Payment History Section */}
      <section style={styles.section}>
        <h3 style={styles.subheading}>Payment History</h3>
        {paymentHistory.length > 0 ? (
          <ul style={styles.list}>
            {paymentHistory.map((payment, index) => (
              <li key={index} style={styles.listItem}>
                <strong>Date:</strong> {payment.date} - <strong>Amount:</strong>{" "}
                ${payment.amount}
              </li>
            ))}
          </ul>
        ) : (
          <p style={styles.text}>No payment history available.</p>
        )}
      </section>

      {/* Rewards Section */}
      <section style={styles.section}>
        <h3 style={styles.subheading}>Rewards</h3>
        <p style={styles.text}>
          Your current points: <strong>{points}</strong>
        </p>
        <button
          style={styles.button}
          onClick={() => alert("Redeem Rewards functionality coming soon!")}
        >
          Redeem Points
        </button>
      </section>
    </div>
  );
};

// Styles for the Tenant Dashboard
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
  },
  link: {
    color: "#007bff",
    textDecoration: "none",
    fontSize: "1rem",
  },
};

export default Tenants;

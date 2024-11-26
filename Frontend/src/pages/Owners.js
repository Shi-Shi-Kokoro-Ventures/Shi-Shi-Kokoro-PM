import React, { useState, useEffect } from "react";

// Add Property Form Component
const AddPropertyForm = () => {
  const [property, setProperty] = useState({
    name: "",
    address: "",
    type: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty({ ...property, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/properties", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(property),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Property added successfully!");
        setProperty({ name: "", address: "", type: "", status: "" });
      })
      .catch((error) => console.error("Error adding property:", error));
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3 style={styles.subheading}>Add New Property</h3>
      <input
        style={styles.input}
        type="text"
        name="name"
        value={property.name}
        onChange={handleChange}
        placeholder="Property Name"
        required
      />
      <input
        style={styles.input}
        type="text"
        name="address"
        value={property.address}
        onChange={handleChange}
        placeholder="Address"
        required
      />
      <input
        style={styles.input}
        type="text"
        name="type"
        value={property.type}
        onChange={handleChange}
        placeholder="Type (e.g., Apartment)"
        required
      />
      <select
        style={styles.input}
        name="status"
        value={property.status}
        onChange={handleChange}
        required
      >
        <option value="" disabled>
          Select Status
        </option>
        <option value="Occupied">Occupied</option>
        <option value="Vacant">Vacant</option>
        <option value="Under Maintenance">Under Maintenance</option>
      </select>
      <button type="submit" style={styles.button}>
        Add Property
      </button>
    </form>
  );
};

// Property List Component
const PropertyList = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/properties")
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error("Error fetching properties:", error));
  }, []);

  return (
    <div>
      <h3 style={styles.subheading}>Your Properties</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Property Name</th>
            <th>Address</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((property) => (
            <tr key={property.id}>
              <td>{property.name}</td>
              <td>{property.address}</td>
              <td>{property.status}</td>
              <td>
                <button
                  style={styles.editButton}
                  onClick={() => alert(`Edit ${property.name}`)}
                >
                  Edit
                </button>
                <button
                  style={styles.deleteButton}
                  onClick={() => alert(`Delete ${property.name}`)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Financial Reports Component
const FinancialReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/financial-reports")
      .then((response) => response.json())
      .then((data) => setReports(data))
      .catch((error) => console.error("Error fetching reports:", error));
  }, []);

  return (
    <div>
      <h3 style={styles.subheading}>Financial Reports</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Month</th>
            <th>Income</th>
            <th>Expenses</th>
            <th>Net Profit</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.month}</td>
              <td>${report.income}</td>
              <td>${report.expenses}</td>
              <td>${report.income - report.expenses}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Tenant Communication Component
const TenantCommunication = () => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    })
      .then((response) => response.json())
      .then(() => {
        alert("Message sent successfully!");
        setMessage("");
      })
      .catch((error) => console.error("Error sending message:", error));
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3 style={styles.subheading}>Send a Message to Tenants</h3>
      <textarea
        style={styles.textarea}
        value={message}
        onChange={handleChange}
        placeholder="Write your message here"
        required
      />
      <button type="submit" style={styles.button}>
        Send Message
      </button>
    </form>
  );
};

// Owners Page Component
const Owners = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Owner Dashboard</h2>
      <p style={styles.description}>
        Manage properties, monitor tenant activity, and access insightful reports to maximize your investments.
      </p>
      <section style={styles.section}>
        <AddPropertyForm />
        <PropertyList />
      </section>
      <section style={styles.section}>
        <FinancialReports />
      </section>
      <section style={styles.section}>
        <TenantCommunication />
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
    maxWidth: "1100px",
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
  form: {
    marginBottom: "20px",
  },
  input: {
    display: "block",
    width: "100%",
    marginBottom: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  textarea: {
    display: "block",
    width: "100%",
    height: "100px",
    marginBottom: "10px",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  editButton: {
    backgroundColor: "#FFC107",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    marginRight: "5px",
    cursor: "pointer",
  },
  deleteButton: {
    backgroundColor: "#DC3545",
    color: "#fff",
    border: "none",
    padding: "5px 10px",
    borderRadius: "4px",
    cursor: "pointer",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Owners;

import React, { useEffect, useState } from "react";

const Tenants = () => {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    // Fetch points from the backend
    fetch("http://localhost:5000/api/points")
      .then((response) => response.json())
      .then((data) => setPoints(data.points))
      .catch((error) => console.error("Error fetching points:", error));
  }, []);

  return (
    <div>
      <h2>Tenant Dashboard</h2>
      <p>
        Welcome to the Tenant Dashboard! Here, tenants can view their
        properties, pay rent, and track rewards.
      </p>
      <ul>
        <li>View Properties</li>
        <li>Pay Rent</li>
        <li>Track Rewards</li>
        <li>File a Report</li>
      </ul>

      <h3>Rewards</h3>
      <p>Your current points: <strong>{points}</strong></p>
      <button
        onClick={() => {
          fetch("http://localhost:5000/api/redeem", { method: "POST" })
            .then((response) => response.json())
            .then((data) => setPoints(data.points))
            .catch((error) => console.error("Error redeeming points:", error));
        }}
      >
        Redeem Points
      </button>
    </div>
  );
};

export default Tenants;
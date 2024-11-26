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
      <p>Welcome to your dashboard! Access your property details and manage your rental experience here.</p>
      
      <h3>Manage Your Rental</h3>
      <ul>
        <li>
          <strong>Pay Rent:</strong> <button onClick={() => alert("Rent Payment Coming Soon!")}>Pay Rent</button>
        </li>
        <li>
          <strong>Request Maintenance:</strong> <button onClick={() => alert("Maintenance Request Coming Soon!")}>Request</button>
        </li>
        <li>
          <strong>View Lease:</strong> <button onClick={() => alert("Lease Info Coming Soon!")}>View Lease</button>
        </li>
      </ul>

      <h3>Rewards</h3>
      <p>Your current points: <strong>{points}</strong></p>
      <button onClick={() => alert("Redeem Rewards!")}>Redeem Points</button>
    </div>
  );
};

export default Tenants;

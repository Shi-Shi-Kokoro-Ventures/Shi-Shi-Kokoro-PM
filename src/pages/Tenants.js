import React, { useState, useEffect } from 'react';

const Tenants = () => {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    fetch('http://localhost:5000/api/points') // Fetching points from the backend
      .then((response) => response.json())
      .then((data) => setPoints(data.points))
      .catch((error) => console.error('Error fetching points:', error));
  }, []);

  return (
    <div>
      <h2>Tenant Dashboard</h2>
      <p>Welcome to the Tenant Dashboard!</p>
      <h3>Rewards</h3>
      <p>Your current points: <strong>{points}</strong></p>
      <button onClick={() => alert('Redeem Rewards!')}>Redeem Points</button>
    </div>
  );
};

export default Tenants;

const Tenants = () => {
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
      </ul>

      <h3>Rewards</h3>
      <p>
        Your current points: <strong>100</strong>
      </p>
      <button onClick={() => alert("Redeem Rewards!")}>Redeem Points</button>
    </div>
  );
};

export default Tenants;

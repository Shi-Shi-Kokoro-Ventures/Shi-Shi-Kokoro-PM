// Import dependencies
require("dotenv").config(); // Load environment variables
const express = require("express");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); // Initialize Stripe with secret key

// Create an Express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Built-in middleware to parse JSON
app.use(express.urlencoded({ extended: true })); // Built-in middleware to parse URL-encoded data

// Check if Stripe secret key is provided
if (!process.env.STRIPE_SECRET_KEY) {
  console.error("Error: Stripe secret key is not set in the environment variables.");
  process.exit(1); // Exit the app
}

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to the Shi Shi Kokoro PM server! Use /api for API routes.");
});

// Example: Handle rent payments
app.post("/api/payment", async (req, res) => {
  const { amount, currency, paymentMethodId } = req.body;

  if (!amount || !currency || !paymentMethodId) {
    return res.status(400).json({ success: false, message: "Missing required fields." });
  }

  try {
    // Create a PaymentIntent with the provided details
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method: paymentMethodId,
      confirm: true, // Automatically confirm the payment
    });

    res.status(200).json({
      success: true,
      message: "Payment processed successfully!",
      paymentIntent,
    });
  } catch (error) {
    console.error("Payment error:", error);
    res.status(500).json({
      success: false,
      message: "Payment failed. Please try again later.",
      error: error.message,
    });
  }
});

// Example: Retrieve tenant points
app.get("/api/points", (req, res) => {
  // Replace with actual data fetching logic
  const points = 100; // Example points data
  res.json({ points });
});

// Example: Handle adding properties
app.post("/api/properties", (req, res) => {
  const { name, address, type, status } = req.body;

  if (!name || !address || !type) {
    return res.status(400).json({ success: false, message: "Missing required fields." });
  }

  // Replace with database logic
  console.log("Property added:", { name, address, type, status });
  res.status(201).json({
    success: true,
    message: "Property added successfully!",
    property: { name, address, type, status },
  });
});

// Example: Fetch financial reports
app.get("/api/financial-reports", (req, res) => {
  // Replace with actual data fetching logic
  const reports = [
    { id: 1, month: "January", income: 5000, expenses: 2000 },
    { id: 2, month: "February", income: 4500, expenses: 1800 },
  ];
  res.json(reports);
});

// Example: Tenant communication
app.post("/api/messages", (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ success: false, message: "Message content is required." });
  }

  // Replace with database logic to save message
  console.log("Message received:", message);
  res.status(201).json({
    success: true,
    message: "Message sent successfully!",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

// Import the UI components
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";

const App = () => {
    return (
        <Router>
            {/* Navbar always visible */}
            <Navbar />
            {/* Render routes */}
            <Routes>
                <Route 
                    path="/" 
                    element={
                        <div>
                            <Dashboard />
                            {/* Example Card */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Welcome to the App</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    This is some content inside the card.
                                </CardContent>
                            </Card>

                            {/* Example Alert */}
                            <Alert>
                                <AlertTitle>Attention!</AlertTitle>
                                <AlertDescription>
                                    This is an alert message.
                                </AlertDescription>
                            </Alert>
                        </div>
                    } 
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
};

export default App;

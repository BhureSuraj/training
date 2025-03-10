import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import withAuth from "./hoc/withAuth";
import MyValidationForm from "./components/MyValidationForm";

function App() {
  const AuthenticatedDashboard = withAuth(Dashboard);
  const AuthenticatedProfile = withAuth(Profile);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<AuthenticatedDashboard />} />
          <Route path="/profile" element={<AuthenticatedProfile />} />
          <Route path="/myvalidationform" element={<MyValidationForm />} />
          <Route
            path="/"
            element={
              <div>
                <h1>Higher Order Component</h1>
                <div>Login page for unauthenticated users</div>
                <h3>Hello how are you</h3>
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;

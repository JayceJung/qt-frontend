import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/authService";

const Navigation: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      setIsLoggedIn(false);
      await logoutUser();
      navigate("/"); // Updated method to navigate
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <button onClick={handleLogout} style={{ margin: "auto" }}>
              Logout
            </button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;

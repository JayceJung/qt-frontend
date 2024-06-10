import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/authService";
import "./App.css";

const Navigation: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      setIsLoggedIn(false);
      navigate("/"); // Updated method to navigate
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  // Inside your Navigation component
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Dropdown
              show={dropdownOpen}
              onToggle={(isOpen) => setDropdownOpen(isOpen)}
            >
              <Dropdown.Toggle
                as={Button}
                id="dropdown"
                className={`customToggleButton ${dropdownOpen ? "active" : ""}`} // Dynamically add 'active' class based on dropdown state
              >
                <img
                  src="/profile logo.png"
                  alt="Profile Logo"
                  width="32"
                  height="32"
                  className="rounded-circle"
                />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action 1</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Action 2</Dropdown.Item>
                <Dropdown.Item
                  style={{ color: "Red", fontWeight: "600" }}
                  onClick={handleLogout}
                >
                  Sign out
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;

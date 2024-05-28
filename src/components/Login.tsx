import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from "styled-components";
import { loginUser } from "../services/authService";

interface LoginProps {
    onLogin: () => void;
}

const StyledForm = styled(Form)`
    margin: auto;
    width: 30%;
`;

// @ts-ignore
const Login:React.FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await loginUser(username, password);
            // Redirect to dashboard or perform any other action on successful login
            onLogin();
        } catch (error) {
          // @ts-ignore
            setError(error.message);
        }
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="text" placeholder="User Name" value={username} onChange={e => setUsername(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            </Form.Group>
            <Button type="submit" variant="light">Login</Button>
            {error && <div>{error}</div>}
        </StyledForm>
    );
}

export default Login;

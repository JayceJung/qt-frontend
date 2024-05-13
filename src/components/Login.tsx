import React, { useState } from "react";
import "./App.css";
import { loginUser } from "../services/authService";

// @ts-ignore
function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [status, setStatus] = useState<Response>();

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
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Login</button>
            {status && <div>{status.statusText}</div>}
            {error && <div>{error}</div>}
        </form>
    );
}

export default Login;

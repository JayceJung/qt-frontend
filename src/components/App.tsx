import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <div>
            {isLoggedIn ? (
                <Dashboard />
            ) : (
                <Login onLogin={handleLogin} />
            )}
        </div>
    );
}

export default App;
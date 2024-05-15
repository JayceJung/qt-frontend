import React, { useState } from 'react';
import Dashboard from './Login';
import PostList from './Dashboard';

const App: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <div>
            {isLoggedIn ? (
                <PostList />
            ) : (
                <Dashboard onLogin={handleLogin} />
            )}
        </div>
    );
}

export default App;
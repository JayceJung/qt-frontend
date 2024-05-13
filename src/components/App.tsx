import React, { useState } from 'react';
import LoginComponent from './Login';
import PostList from './Form';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <div>
            {isLoggedIn ? (
                <PostList />
            ) : (
                <LoginComponent onLogin={handleLogin} />
            )}
        </div>
    );
}

export default App;
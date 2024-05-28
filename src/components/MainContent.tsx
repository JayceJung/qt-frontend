import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Post from "./Post";

const MainContent: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLoggedIn && location.pathname !== "/") {
      navigate("/");
    }
  }, [isLoggedIn, navigate, location]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/dashboard");
  };

  const handleSelectPost = (post: any) => {
    setSelectedPost(post);
    navigate("/post");
  }

  return ( 
    <Routes>
      <Route path="/" element={<Login onLogin={handleLogin} />} />
      <Route path="/dashboard" element={<Dashboard onSelectPost={handleSelectPost}/>} />
      <Route path="/post" element={<Post post={selectedPost}/>} />
    </Routes>
  );
};

export default MainContent;

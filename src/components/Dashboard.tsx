import React, { useEffect, useState } from "react";
import "./App.css";
import Card from 'react-bootstrap/Card';
import styled from "styled-components";
import { getPost, getAllPosts } from "../services/postService";
import Post from "./Post";
import Navigation from "./Navigation";

interface PostType {
    title: string,
    content: string
}

const StyledPost = styled(Card)`
    width: 50%;
    margin: auto;
    margin-top: 2rem;
    max-height: 100vh; /* Maximum height is the viewport height */
    overflow-y: auto;  /* Add vertical scrollbar if content overflows */
    &:hover {
        cursor: pointer;
    }
`;

const Dashboard = () => {
    const [posts, setPosts] = useState<PostType[]>([]);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        async function fetchAllPosts() {
            try {
                const { posts } = await getAllPosts();
                setPosts(posts);
            } catch (error) {
                // @ts-ignore
                console.error('Error fetching posts:', error.message);
            }
        }
        fetchAllPosts();
    }, [])

    const selectPost = async (post: any) => {
        console.log(post);
        setSelectedPost(post);
    }

    return (
        <div>
            {selectedPost ? (
                <Post post={selectedPost}/>
        ) : (
            <div>
                <Navigation />
                {posts.map(post => (
                    <StyledPost onClick={() => selectPost(post)}>
                        <Card.Body>
                            <Card.Title>{post.title}</Card.Title>
                            <Card.Text>{post.content}</Card.Text>
                        </Card.Body>
                    </StyledPost>
                ))}
            </div>
        )}
        </div>     
    )
}

export default Dashboard;
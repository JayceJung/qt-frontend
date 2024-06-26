import React, { useEffect, useState } from "react";
import "./App.css";
import Card from 'react-bootstrap/Card';
import styled from "styled-components";
import { getAllPosts } from "../services/postService";
import Navigation from "./Navigation";


interface PostType {
    title: string,
    content: string
}

interface DashboardProps {
    onSelectPost: (post: any) => void;
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

const Dashboard:React.FC<DashboardProps> = ({ onSelectPost }) => {
    const [posts, setPosts] = useState<PostType[]>([]);

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
        onSelectPost(post);
    }

    return (
        <div>
            <Navigation/>
            {posts.map(post => (
                <StyledPost onClick={() => selectPost(post)}>
                    <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        <Card.Text>{post.content}</Card.Text>
                    </Card.Body>
                </StyledPost>
            ))}
        </div>  
    )
}

export default Dashboard;
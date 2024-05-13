import React, { useEffect, useState } from "react";
import "./App.css";
import { getAllPosts } from "../services/postService";

interface Post {
    title: string,
    content: string
}

function PostView() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        async function fetchPost() {
            try {
                const { posts } = await getAllPosts();
                setPosts(posts);
            } catch (error) {
                // @ts-ignore
                console.error('Error fetching posts:', error.message);
            }
        }
        fetchPost();
    }, [])

    return (
        <div>
            {posts.map(post => (
                <div>
                    <h1>{post.title}</h1>
                    <span>{post.content}</span>
                </div>
            ))}
        </div>
    )
}

export default PostView;
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { getPost } from "../services/postService";

const Grid = styled.div`
    margin: 3rem;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
`

const Message = styled(Card)`
    margin: 1rem;
    grid-area: 1 / 1 / 6 / 4; 
    min-height: 80vh; /* Maximum height is the viewport height */
    overflow-y: auto;  /* Add vertical scrollbar if content overflows */
`

const Nanum = styled(Card)`
    margin: 1rem;
    grid-area: 1 / 4 / 3 / 7; 
` 

const Comment = styled(Card)`
    margin: 1rem;
    grid-area: 3 / 4 / 5 / 7;
`
interface PostPayload {
    comments: [{
        user: string,
        comment: string

    }],
    post: {
        content: string,
        title: string
    }
}

const Post:React.FC<any> = ({ post }) => {
    const [ postData, setPostData ] = useState<PostPayload>();
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        async function fetchPost() {
            try {
                setIsLoading(true);
                // @ts-ignore
                const { payload } = await getPost(post._id);
                setPostData(payload);
                setIsLoading(false);
            }
            catch (error) {
                // @ts-ignore
                console.error('Error fetching posts:', error.message);
            }
        }
        fetchPost()
        console.log("data2: ", postData)
    }, [])

    return (
        <>
            {isLoading ? (
                <div></div>
            ) : (
                <Grid>
                    <Message>
                        <Card.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla placerat mattis felis eu laoreet. Vestibulum in malesuada felis, at porttitor diam. Quisque sed magna semper, imperdiet nulla at, tristique metus. In tincidunt consequat ante, at laoreet velit placerat et. Donec viverra ante at nibh molestie, ut semper mauris varius. Cras suscipit nisi dictum metus facilisis, quis dignissim est mollis. Fusce efficitur blandit mattis. Sed eget urna eu lacus ultrices suscipit.
                        </Card.Body>
                    </Message>
                    {postData && (
                        <>
                            <Nanum>
                                <Card.Body>
                                    <Card.Title>{postData.post.title}</Card.Title>
                                    <Card.Text>{postData.post.content}</Card.Text>
                                </Card.Body>
                            </Nanum>
                            <Comment>
                                <Card.Body>
                                    {postData.comments.map(comment => (
                                        <>
                                            <Card.Title>{comment.user}</Card.Title>
                                            <Card.Text>{comment.comment}</Card.Text>
                                        </>
                                    ))}
                                </Card.Body>
                            </Comment>
                            
                        </> 
                    )}
                    
                </Grid>
            )}
        </>
        
    )
}

export default Post;
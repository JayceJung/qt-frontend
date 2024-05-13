export async function getAllPosts() {
    const API_URL = "http://localhost:8080";

    try {
        const response = await fetch(`${API_URL}/posts`);
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        return await response.json();
    } catch (error) {
        throw new Error('Failed to fetch posts');
    }
}
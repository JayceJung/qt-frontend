const API_URL = "http://localhost:8080";

export async function getAllPosts() {
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

export async function getPost(id:String) {
    const url = `${API_URL}/posts/${id}`;

    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }
          const userData = await response.json();
          console.log(userData);
        return userData;
    } catch (error) {
        throw new Error('Failed to fetch post');
    }
}
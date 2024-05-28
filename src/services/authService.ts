export async function loginUser(
  username: string,
  password: string
): Promise<Response> {
  const API_URL = "http://localhost:8080";

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      return response; // Login successful
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || "Login failed");
    }
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
}

export async function logoutUser(): Promise<Response> {
  const API_URL = "http://localhost:8080";

  try {
    const response = await fetch(`${API_URL}/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      return response; //logout successful
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message || "Logout failed");
    }
  } catch (error) {
    console.error("Logout error: ", error);
    throw error;
  }
}

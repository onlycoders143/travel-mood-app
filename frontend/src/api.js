// api.js — single place that knows how to talk to the backend.
// Change VITE_API_URL in .env if the backend runs somewhere other than localhost:4000.

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

async function request(path, options = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Request failed: ${res.status}`);
  }
  return res.json();
}

export const api = {
  getMoods: () => request("/moods"),
  getDestinations: (params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return request(`/destinations${qs ? `?${qs}` : ""}`);
  },
  getDestination: (id) => request(`/destinations/${id}`),
  getPosts: (sort = "new") => request(`/posts?sort=${sort}`),
  getPost: (id) => request(`/posts/${id}`),
  createPost: (data) => request("/posts", { method: "POST", body: JSON.stringify(data) }),
  upvotePost: (id) => request(`/posts/${id}/upvote`, { method: "POST" }),
  addComment: (id, data) =>
    request(`/posts/${id}/comments`, { method: "POST", body: JSON.stringify(data) }),
};

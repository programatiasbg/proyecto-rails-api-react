import { API_URL } from "../constants";

async function fetchAllPosts() {
  const resp = await fetch(`${API_URL}`);
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  return resp.json();
}

async function fetchPost(id) {
  const resp = await fetch(`${API_URL}/${id}`);
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  return resp.json();
}

async function deletePost(id) {
  const resp = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!resp.ok) {
    throw new Error(resp.statusText);
  }

  // 204 = Not content status (sin registros)
  if (resp.status === 204) {
    return null;
  } else {
    return resp.json;
  }
}

async function createPost(postData) {
  const resp = await fetch(`${API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }

  return resp.json();
}

async function updatePost(id, postData) {
  const resp = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    // Otra fortma de tre datos (post)
    body: JSON.stringify(postData),
  });

  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  return resp.json();
}

export { fetchAllPosts, deletePost, fetchPost, createPost, updatePost };

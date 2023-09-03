// API_URL para recueperar registros
import React, { useState, useEffect } from "react";
// Importar variables de entorno desde .env
import { API_URL } from "../../constants";
import { Link } from "react-router-dom";

function PostsList() {
  const [posts, setPosts] = useState([]);
  // config (opcional) estados de carga y error
  const [, setLoanding] = useState(true);
  const [, setError] = useState(null);

  // Fetch posts from the API
  // Se ejecutará en la carga inicial
  useEffect(() => {
    async function loadPosts() {
      try {
        const resp = await fetch(API_URL);
        if (resp.ok) {
          const json = await resp.json();
          setPosts(json);
        } else {
          throw resp;
        }
      } catch (e) {
        setError("A ocurrido un error...");
        console.log("A ocurrido un error:", e);
      } finally {
        setLoanding(false);
      }
    }
    loadPosts();
  }, []);

  const deletePost = async (id) => {
    try {
      // DELETE request to: http://localhost:3000/api/v1/posts/:id
      const resp = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (resp.ok) {
        setPosts(posts.filter((post) => post.id !== id));
      } else {
        throw resp;
      }
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="post-container">
          <h2>
            <Link to={`/posts/${post.id}`} className="post-title">
              {post.title}
            </Link>
          </h2>
          {/* <p>{post.body}</p> */}
          <div className="post-links">
            <Link to={`/posts/${post.id}/edit`}>Edit</Link>
            {" | "}
            <button onClick={() => deletePost(post.id)}>Delete </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostsList;

// API_URL para recueperar registros
import React, { useState, useEffect } from "react";
// Importar variables de entorno desde .env
import { Link } from "react-router-dom";
import { fetchAllPosts, deletePost } from "../../services/postService";

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
        const data = await fetchAllPosts();
        setPosts(data);
        setLoanding(false);
      } catch (e) {
        setError(e);
        setLoanding(false);
      }
    }
    loadPosts();
  }, []);

  const deletePostHandler = async (id) => {
    try {
      // DELETE request to: http://localhost:3000/api/v1/posts/:id
      await deletePost(id);
      setPosts(posts.filter((post) => post.id !== id));
      // Opcioón 2
      // setPosts((prevPost) => prevPost.filter((post) => posts.id !== id));
    } catch (e) {
      console.log("Failer delete the post: ", e);
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
            <button onClick={() => deletePostHandler(post.id)}>Delete </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostsList;

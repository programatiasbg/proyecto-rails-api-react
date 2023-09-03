import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { API_URL } from "../../constants";

function PostDetails() {
  const [post, setPost] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCurrentPost = async () => {
      try {
        const resp = await fetch(`${API_URL}/${id}`);
        if (resp.ok) {
          const json = await resp.json();
          setPost(json);
        } else {
          throw resp;
        }
      } catch (e) {
        console.log("A ocurriddo un error: ", e);
      }
    };
    fetchCurrentPost();
  }, [id]);

  const deletePost = async (id) => {
    try {
      // DELETE request to: http://localhost:3000/api/v1/posts/:id
      const resp = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (resp.ok) {
        navigate("/");
      } else {
        throw resp;
      }
    } catch (e) {
      console.error(e);
    }
  };

  if (!post) return <h2>Cargando...</h2>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Link to={`/posts/${post.id}/edit`}>Edit</Link>
      {" | "}
      <Link to="/">Back to Posts</Link>
      {" | "}
      <button onClick={deletePost}>Delete</button>
    </div>
  );
}

export default PostDetails;

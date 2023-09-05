import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPost, updatePost } from "../../services/postService";

function PostEditForm() {
  const [post, setPost] = useState();
  const { id } = useParams();
  const [, setLoading] = useState(true);
  const [, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the current post by id
    const fetchCurrentPost = async () => {
      try {
        const json = await fetchPost(id);
        setPost(json);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    fetchCurrentPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatePostData = {
      title: post.title,
      body: post.body,
    };

    try {
      const resp = await updatePost(id, updatePostData);
      navigate(`/posts/${resp.id}`);
    } catch (e) {
      console.log("Failed to update Post: ", e);
    }
  };

  if (!post) return <h2>Loanding...</h2>;

  return (
    <div>
      <h2> Edit Post</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title"></label>
          <br />
          <input
            type="text"
            id="post-title"
            value={post?.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="body"></label>
          <br />
          <input
            type="text"
            id="post-body"
            value={post?.body}
            onChange={(e) => setPost({ ...post, body: e.target.value })}
          />
        </div>
        <div className="">
          <button type="submit">Save </button>
        </div>
      </form>
    </div>
  );
}

export default PostEditForm;

import { Route, Routes } from "react-router-dom";
import PostsList from "../features/posts/PostsList";
import PostsDetails from "../features/posts/PostsDetails";
import NewPostForm from "../features/posts/NewPostForm";
import PostEditForm from "../features/posts/PostEditForm";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PostsList />} />

      <Route path="posts/:id" element={<PostsDetails />} />

      <Route path="posts/:id/edit" element={<PostEditForm />} />

      <Route path="/new" element={<NewPostForm />} />
    </Routes>
  );
}

export default AppRoutes;

// Posts List link (Root Patch) | Link to New Post (Post Form)
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <Link to="/">Post List |</Link>
      <Link to="/new"> New Post</Link>
    </nav>
  );
}

export default NavBar;

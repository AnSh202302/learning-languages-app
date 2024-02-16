import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/" end="true">
        Home
      </Link>
      <Link to="teachers">Teachers</Link>
      <Link to="favorites">Favorites</Link>
    </nav>
  );
};

export default Navigation;

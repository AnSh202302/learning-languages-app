import { Link } from "react-router-dom";
import { NavStyled } from "./Navigation.styled";

const Navigation = () => {
  return (
    <NavStyled>
      <Link to="/" end="true">
        Home
      </Link>
      <Link to="teachers">Teachers</Link>
      <Link to="favorites">Favorites</Link>
    </NavStyled>
  );
};

export default Navigation;

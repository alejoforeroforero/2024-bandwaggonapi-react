import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import Logout from "@/components/Logout";

import styles from "./NavBar.module.css";
import NavHub from "@/components/NavBar/NavHub";
import NavDropdown from "@/components/NavBar/NavDropdown";

const NavBar = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <nav className={styles["nav-bar"]}>
      <NavHub />
      <NavDropdown />
    </nav>
  );
};

export default NavBar;

{
  /* <div className="login-btn">
        <Link to="/">Home</Link>
      </div>
      {user && (
        <div className="login-btn">
          <Link to="/user-form">Edit Profile</Link>
        </div>
      )}
      {user && <Logout />}
      {!user && (
        <div className="login-btn">
          <Link to="/auth">Auth</Link>
        </div>
      )} */
}

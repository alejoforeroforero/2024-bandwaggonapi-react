import { useSelector } from "react-redux";
import UserInfo from "@/components/UserInfo";
import { Link } from "react-router-dom";

const HomePage = () => {
  const user = useSelector((state) => state.auth.user);

  console.log(user)

  return (
    <>
      <div>
        {user && <UserInfo />}
        {!user && <Link to="/auth">Sign in</Link>}
        </div>
    </>
  );
};

export default HomePage;

import { useDispatch, useSelector } from "react-redux";
import { googleLogout } from "@react-oauth/google";
import { logout } from "@/redux/states/authActions";
import { authUser } from "@/redux/states/authSlice";
import { toast } from 'react-toastify';

const Logout = () => {
  const dispatch = useDispatch();
  const { loading, googleUser } = useSelector((state) => state.auth);

  const confirmation = (res) => {
    toast(res.data.message);
    dispatch(authUser(false));
  };

  const handleLogout = () => {
    if (googleUser) {
      googleLogout();
    }
    dispatch(logout(confirmation));
  };

  return (
    <div className="logout-btn">
      <button onClick={handleLogout} disabled={loading}>
        {loading ? "Logging out..." : "Logout"}
      </button>
    </div>
  );
};

export default Logout;

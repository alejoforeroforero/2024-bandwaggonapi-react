import { GoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { googleSignIn } from "@/redux/states/authActions";
import { authUser } from "@/redux/states/authSlice";

const LoginGoogle = () => {
  const dispatch = useDispatch();

  const handleGoogleLoginSuccess = (credentialResponse) => {
    const confirmation = () => {
      dispatch(authUser(true));
    };

    const data = {
      token: credentialResponse.credential,
      callback: confirmation,
    };

    dispatch(googleSignIn(data));
  };

  return (
    <div id="signInButton">
      <GoogleLogin
        onSuccess={handleGoogleLoginSuccess}
        onError={() => {
          console.log("Login failed");
        }}
      />
    </div>
  );
};

export default LoginGoogle;

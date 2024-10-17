import { useState } from "react";
import Login from "@/components/Login";
import Register from "@/components/Register";
import LoginGoogle from "@/components/LoginGoogle";

import logoImg from "@/assets/logos/bw-logo.png";
import logoType from "@/assets/logos/bw-logotype.png";

import styles from "./AuthPage.module.css";

const AuthPage = () => {
  const [isSigningUp, setIsSigninup] = useState(false);

  return (
    <div className={styles["container"]}>
      <div className={styles['logo-session']}>
        <div>
          <img src={logoImg} alt="" />
        </div>
        <div>
          <img src={logoType} alt="" />
        </div>
      </div>
      {isSigningUp && (
        <>
          <Register />
          <div className="message">
            <p>Do you already have an account?</p>
            <a onClick={() => setIsSigninup(false)}>Login</a>
          </div>
        </>
      )}
      {!isSigningUp && (
        <>
          <Login />
          <div className="message">
            <p>Don t have an account?</p>
            <a onClick={() => setIsSigninup(true)}>Signup</a>
          </div>
        </>
      )}

      <LoginGoogle />
    </div>
  );
};

export default AuthPage;

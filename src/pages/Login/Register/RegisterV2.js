import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGooglePlusG,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import auth from "../../../firebase.init";
import Loading from "../../Shered/Loading/Loading";

const RegisterV2 = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user3, loading3, error3] = useSignInWithGoogle(auth);
  const [signInWithGithub, user4, loading4, error4] = useSignInWithGithub(auth);
  const [createUserWithEmailAndPassword, user1, loading1, error1] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, error5] = useUpdateProfile(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const [email, setEmail] = useState("");
  const [rightPanel, setRightPanel] = useState(false);
  const [displayNamesFor, setDisplayNamesFor] = useState(false);
  let errorElement;
  const navigate = useNavigate();
  const location = useLocation();
  let from = location?.state?.from?.pathname || "/";

  if (loading || updating || loading1 || loading3 || loading4) {
    return <Loading></Loading>;
  }
  if (user || user3 || user4 || user1) {
    navigate(from, { replace: true });
  }
  const handleSubmitLogin = (event) => {
    event.preventDefault();
    setEmail(event.target.email.value);
    const password = event.target.password.value;
    const emails = event.target.email.value;
    signInWithEmailAndPassword(emails, password);
  };
  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Send Your email");
    } else {
      toast("Enter your email address.");
    }
  };

  const handleSubmitSingUp = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const displayName = event.target.name.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
  };

  if (error || error1 || error3 || error4 || error5) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {error3?.message} {error4?.message} {error?.message}{" "}
          {error1?.message} {error5?.message}
        </p>
      </div>
    );
  }

  const handleRegister = () => {
    navigate("/loginV2");
  };
  return (
    <div className=" loginV2" id="scroll">
      <div className="container ">
        <ToastContainer />
        <div className="login">
          <div
            class={
              rightPanel
                ? `container login-container right-panel-active  `
                : `container login-container`
            }
            id="container"
          >
            <div class="form-container sign-up-container">
              <div className="login-btn-social">
                <div>
                  <h1>Create Account</h1>
                  <div class="social-container text-center">
                    <button
                      class="btn social"
                      onClick={() => signInWithGoogle()}
                    >
                      <FontAwesomeIcon icon={faGooglePlusG} />
                    </button>
                    <button
                      class="btn social"
                      onClick={() => signInWithGithub()}
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </button>
                  </div>
                  <span>or use your email for registration</span>
                </div>
              </div>
              <form action="" onSubmit={handleSubmitSingUp}>
                <input type="text" placeholder="Name" name="name" />
                <input type="email" placeholder="Email" name="email" required />
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  required
                />
                <button type="submit" className="button mt-4">
                  Sign Up
                </button>

                <button
                  class=""
                  id="signIn"
                  onClick={() => setRightPanel(false)}
                >
                  Sign In
                </button>
              </form>
            </div>
            <div class="form-container sign-in-container">
              {rightPanel ? (
                ""
              ) : (
                <>
                  {" "}
                  <div className="login-btn-social">
                    <div>
                      <h1>Sign in</h1>
                      <div class="social-container text-center">
                        <button
                          class="btn social"
                          onClick={() => signInWithGoogle()}
                        >
                          <FontAwesomeIcon icon={faGooglePlusG} />
                        </button>
                        <button
                          class="btn social"
                          onClick={() => signInWithGithub()}
                        >
                          <FontAwesomeIcon icon={faGithub} />
                        </button>
                      </div>
                      <span>or use your account</span>
                    </div>
                  </div>
                  <form action="" onSubmit={handleSubmitLogin}>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      name="email"
                    />
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      name="password"
                    />
                    {errorElement}
                    <button className="btn mt-3 mb-3" onClick={resetPassword}>
                      Forgot your password?
                    </button>
                    <button type="submit" className="button">
                      Sign In
                    </button>

                    <button
                      class=""
                      onClick={() => setRightPanel(true)}
                      id="signUp"
                    >
                      Sign Up
                    </button>
                  </form>
                </>
              )}
            </div>

            <div class="overlay-container">
              <div class="overlay">
                <div class="overlay-panel overlay-left">
                  <h1>Welcome Back!</h1>
                  <p>
                    To keep connected with us please login with your personal
                    info
                  </p>
                  <button
                    class="ghost button"
                    id="signIn"
                    onClick={() => setRightPanel(false)}
                  >
                    Sign In
                  </button>
                </div>
                <div class="overlay-panel overlay-right">
                  <h1>Hello, Friend!</h1>
                  <p>Enter your personal details and start journey with us</p>
                  <button
                    class="ghost button"
                    onClick={() => setRightPanel(true)}
                    id="signUp"
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterV2;

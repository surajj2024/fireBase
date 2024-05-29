import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import { useContext, useEffect } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { currUser, signWithGoogle } = useContext(AuthContext);

  console.log(currUser);
  const handleSignIn = async () => {
    try {
      await signWithGoogle();
    } catch (error) {
      console.log(error);
    }

    navigate("/chat", { replace: true });
  };

  useEffect(() => {
    if (currUser) navigate("/chat", { replace: true });
  }, [currUser]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Hello there 👋🏻</h1>
          <p className="py-6">
            Join the conversation, chat with your friends and meet new people
            and explore the world
          </p>
          <button
            onClick={() => {
              handleSignIn();
            }}
            className="btn btn-primary"
          >
            LOGIN ME
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

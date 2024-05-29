import { AuthContext } from "../context/AuthContext.jsx";
import { useContext } from "react";

const Navbar = () => {
  const { currUser, logOut } = useContext(AuthContext);

  const handleLogOut = async () => {
    try {
      await logOut();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="navbar fixed z-10 bg-slate-100 ">
      <div className="flex-1">
        <span className="btn btn-ghost text-xl cursor-default">
          👻GHOST CHAT👻
        </span>
      </div>
      <div className="flex-none gap-2">
        {currUser ? (
          <button className="btn bg-black text-white" onClick={handleLogOut}>
            LOGOUT
          </button>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};

export default Navbar;

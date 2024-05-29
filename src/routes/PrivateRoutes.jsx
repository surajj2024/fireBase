import { AuthContext } from "../context/AuthContext.jsx";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoutes = ({ children }) => {
  const { currUser } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(currUser);

  if (!currUser) {
    navigate("/");
    return null;
  }

  return children;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoutes;

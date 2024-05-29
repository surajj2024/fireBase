import { AuthContext } from "../context/AuthContext.jsx";
import { useContext } from "react";

const Message = ({ msgData }) => {
  const { currUser } = useContext(AuthContext);

  // console.log(msgData)
  return (
    <div>
      <div
        className={`chat ${
          msgData.uid === currUser.uid ? "chat-end" : "chat-start"
        } `}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={msgData.avatar}
            />
          </div>
        </div>
        <div className="chat-header">{msgData.name}</div>
        <div className="chat-bubble">{msgData.text}</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
    </div>
  );
};

export default Message;

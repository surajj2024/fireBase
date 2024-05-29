import Message from "./Message";
import { useEffect, useState, useRef } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "../firebase/Firebase.jsx";

const ChatBox = () => {
  const [msg, setMsg] = useState([]);
  const msgRef = useRef();

  const scrollBottom = () => {
    msgRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollBottom();
  }, [msg]);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("createAt"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });

      setMsg(messages);
    });

    return unsubscribe;
  }, []);
  return (
    <div className="max-w-[80%] m-auto pt-16 pb-[100px]">
      {msg.map((ele) => {
        return <Message key={ele.id} msgData={ele} />;
      })}

      <div ref={msgRef}></div>
    </div>
  );
};

export default ChatBox;

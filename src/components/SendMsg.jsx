import { AuthContext } from "../context/AuthContext.jsx";
import { useContext, useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/Firebase.jsx";

const SendMsg = () => {
  const [input, setInput] = useState("");
  const { currUser } = useContext(AuthContext);
  // console.log(currUser)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (input.trim() === "") {
      alert("Enter MESSAGE first");
      return;
    }

    try {
      const { uid, displayName, photoURL } = currUser;
      await addDoc(collection(db, "messages"), {
        text: input,
        name: displayName,
        avatar: photoURL,
        createAt: serverTimestamp(),
        uid,
      });
    } catch (e) {
      console.log(e);
    }
    // console.log(input)

    setInput("");
  };

  return (
    <div className=" fixed w-full bottom-0 bg-slate-100 p-4">
      <form className="w-full max-w-[80%] m-auto" onSubmit={handleSubmit}>
        <div className="flex items-center border-b border-gray-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your Message"
            aria-label="Full name"
          />
          <button
            className="flex-shrink-0 border-transparent border-4 text-black hover:text-blue-500 text-xl py-1 px-2 rounded"
            type="submit"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendMsg;


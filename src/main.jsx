import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ChatRoom from "./pages/ChatRoom";
import Login from "./pages/Login";
import PrivateRoute from "./routes/PrivateRoutes.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/chat",
        element: (
          <PrivateRoute>
            <ChatRoom />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);

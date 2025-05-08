import "./App.css";

import { Outlet } from "react-router-dom";

import ChatWidget from "./components/chat/ChatWidget";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Outlet />

      <ToastContainer position="top-right" autoClose={3000} />

      {/* <ChatWidget /> */}
    </>
  );
}

export default App;

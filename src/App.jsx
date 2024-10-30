import React from "react";
import Registration from "./Pages/Registration/Registration";
import { getAuth, sendEmailVerification } from "firebase/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <div>
      <ToastContainer />
      <Registration />
    </div>
  );
};

export default App;

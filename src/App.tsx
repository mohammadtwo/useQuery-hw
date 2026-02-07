import { ToastContainer } from "react-toastify";
import { RouterPages } from "./routers/router";

function App() {
  return (
    <>
      <RouterPages/>
      <ToastContainer position="top-center" autoClose={3000} className={""}/>
    </>
  );
}

export default App;

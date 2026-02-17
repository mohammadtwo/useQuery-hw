import { ToastContainer } from "react-toastify";
import { RouterPages } from "./routers/router";
import { QueryProvider } from "./hooks/queryClient";

function App() {
  return (
    <>
      <QueryProvider>
        <RouterPages />
        <ToastContainer position="top-center" autoClose={3000}  />
      </QueryProvider>
    </>
  );
}

export default App;

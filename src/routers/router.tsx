import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routesArray } from "./routes";


export function RouterPages() {
  return (
    <BrowserRouter>
      <Routes>
        {routesArray.map((page)=><Route key={page.path} path={page.path} element={page.element}/>)}
        <Route path="*" element={<div className="grid place-items-center text-5xl w-full h-screen"> 404</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

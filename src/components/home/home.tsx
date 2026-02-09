import { Link } from "react-router-dom";
import { pathRouters } from "../../routers/routes";

export function Home() {
  return (
    <div className="w-full h-screen p-10 bg-blue-500 ">
      <div className="flex flex-col gap-4 h-full">
        <div className="flex-1 overflow-y-auto">
          <div className="flex flex-col w-50 h-60 rounded-xl items-center p-3 bg-white">
            <div className="flex-1 flex flex-col gap-2 items-center ">
              <h2>test name</h2>
              <p>test email</p>
            </div>
            <div className="flex justify-between gap-3 w-full">
              <button className="text-white flex-1 hover:bg-pink-600 cursor-pointer bg-pink-700 rounded-2xl  p-2 ">
                edit
              </button>
              <button className="p-2  flex-1  hover:bg-red-500 cursor-pointer text-white  bg-red-700 rounded-2xl">
                remove
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-5 h-10">
          <Link to={pathRouters.createUser} className="p-2 flex-1 text-center hover:bg-green-500 cursor-pointer text-white bg-green-600 rounded-2xl">
            add
          </Link>
        </div>
      </div>
    </div>
  );
}

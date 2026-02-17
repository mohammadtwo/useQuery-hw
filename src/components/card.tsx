import { Link } from "react-router-dom";
import { pathRouters } from "../routers/routes";
import type { UserWithId } from "../types/types";
import { useRemoveUser } from "../hooks/useQuery";
import { toast } from "react-toastify";

export function Card(props:UserWithId) {
  const {isSuccess,mutate} = useRemoveUser()
  const handelDeleteUser = (user: UserWithId) => {
    mutate(user.id)
    if (isSuccess) toast.success(`user name:${user.name} has remove`);
  };
  return (
    <div className="flex flex-col w-50 h-60 rounded-xl items-center p-3 bg-white">
      <div className="flex-1 flex flex-col gap-2 items-center ">
        <h2>{props.name}</h2>
        <p>{props.emil}</p>
      </div>
      <div className="flex justify-between gap-3 w-full">
        <Link
          to={pathRouters.editeUser.replace(":id", props.id)}
          className="text-white flex-1 text-center hover:bg-pink-600 cursor-pointer bg-pink-700 rounded-2xl  p-2 "
        >
          edit
        </Link>
        <button onClick={()=>handelDeleteUser(props)} className="p-2  flex-1  hover:bg-red-500 cursor-pointer text-white  bg-red-700 rounded-2xl">
          remove
        </button>
      </div>
    </div>
  );
}
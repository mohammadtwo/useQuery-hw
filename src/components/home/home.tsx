import { pathRouters } from "../../routers/routes";
import { Card } from "../card";
import { useUsers } from "../../hooks/useQuery";
import { Link } from "react-router-dom";

export function Home() {
      const { data,isLoading } = useUsers();

  
  return (
    <div className="w-full h-screen p-10 bg-blue-500 ">
      <div className="flex flex-col gap-4 h-full">
        <div className="flex-1 flex w-full flex-wrap gap-3 overflow-y-auto">
          {isLoading?<div>{"isLoading..."}</div>:data?.map((item) =>{ 
              return  <Card id={item.id} key={item.id} name={item.name} emil={item.emil} />
          })}
        </div>
        <div className="flex gap-5 h-10">
          <Link
            to={pathRouters.createUser}
            className="p-2 flex-1 text-center hover:bg-green-500 cursor-pointer text-white bg-green-600 rounded-2xl"
          >
            add
          </Link>
        </div>
      </div>
    </div>
  );
}

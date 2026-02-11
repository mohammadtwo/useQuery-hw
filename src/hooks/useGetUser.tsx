import { useQuery } from "@tanstack/react-query";
import { deleteUser, getUser, postUser, putUser } from "../services/api";
import type { User, UserWithId } from "../types/types";

export function useUser(){
    const respons=useQuery({
        queryKey:["user"],
        queryFn:getUser,
        
    })
    return respons
}
export function useEditeUser(user: UserWithId) {
  const respons = useQuery({
    queryKey: ["user", user.id],
    queryFn: ()=>putUser(user),
    
  });
  return respons;
}

export function useAddUser(user:User){
    const request = useQuery({
      queryKey: ["user"],
      queryFn:()=>postUser(user)
    });

    return request
}
export function useRemoveUser(id: string) {
  const query = useQuery({
    queryKey: ["user"],
    queryFn: () => deleteUser(id),
  });
  return query
}
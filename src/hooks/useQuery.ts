
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteUser, getUser, getUserById, postUser, putUser } from "../services/api";

// import { deleteUser, getUser, getUserById, postUser, putUser } from "../services/api";
// import type { User, UserWithId } from "../types/types";

export function useUsers(){
    const respons=useQuery({
        queryKey:["users"],
        queryFn:()=>getUser(),
        
    })
    return respons
}
export function useUserById(id:string) {

    const {data,isError,isLoading} = useQuery({
      queryKey: ["users",id],
      
      queryFn:()=> getUserById(id),
      enabled:!!id
    }  );
    
    return { data, isError, isLoading };
}
// user: UserWithId;
export function useEditeUser() {
  const queryClient = useQueryClient()
  return  useMutation({ mutationFn: putUser,
        onSuccess() {
            queryClient.invalidateQueries({ queryKey: ["users"] });
        },
     });

}

export function useAddUser(){
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postUser,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}
export function useRemoveUser() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteUser,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
}
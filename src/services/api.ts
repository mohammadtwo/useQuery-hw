import type { User, UserWithId } from "../types/types";
import { http } from "./http";

export async function getUser() {

  return (await http.get<Array<UserWithId>>("users")).data;
}
export async function getUserById(id:string) {
  if(undefined===id)return new Error ("id not fund");
  return (await http.get<UserWithId>(`users/${id}`)).data;
}
export async function postUser(user: User) {
  return (await http.post<User>("users", user)).data;
}
export async function putUser(user: UserWithId) {
  return (await http.put<UserWithId>(`users/${user.id}`, user)).data;
}
export async function deleteUser(id:string) {
  return (await http.delete<string>(`users/${id}`)).data
}

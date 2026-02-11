import type { User, UserWithId } from "../types/types";
import { http } from "./http";

export async function getUser() {
  return (await http.get<Array<UserWithId>>("users")).data;
}
export async function postUser(user: User) {
  return (await http.post<User>("users", user)).data;
}
export async function putUser(user: UserWithId) {
  return (await http.put<UserWithId>("users", user)).data;
}
export async function deleteUser(id:string) {
  return (await http.delete<string>(`users/${id}`)).data
}

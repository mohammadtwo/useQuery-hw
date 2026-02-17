import { useForm, type FieldErrors } from "react-hook-form";
import type { User } from "../../types/types";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useAddUser, useEditeUser, useUserById } from "../../hooks/useQuery";
import { useEffect } from "react";
import { isValidNumericId } from "../../hooks/ChekParams";

export function CreateUser() {
  const userSchema = z.object({
    name: z.string("name not empty").trim().min(2, "name langer two character"),
    emil: z.email("email not validate"),
  });
  const { register, handleSubmit, reset } = useForm<User>({
    resolver: zodResolver(userSchema),
    defaultValues: { name: "", emil: "" },
  });
  const { id } = useParams();
  const { data: user } = useUserById(id!);
  const { mutate } = useEditeUser();
  const { mutate: addUser, isSuccess } = useAddUser();
  const navigat = useNavigate();
  useEffect(() => {
    if (user && "emil" in user && user.emil) {
      reset({
        name: user?.name,
        emil: user?.emil,
      });
    }
  }, [user, reset]);
  const submit = (data: User) => {
    const idValid = isValidNumericId(id);
    if (idValid) {
      mutate({ ...data, id: String(id) });
    } else {
      addUser(data);
      if (isSuccess) {
        navigat("/");
        toast.success("success");
      }
    }
    reset();
  };

  const onError = (formErrors: FieldErrors<User>) => {
    Object.values(formErrors).forEach((error) => {
      if (error?.message) {
        toast.error(String(error.message));
      }
    });
  };

  return (
    <div className="w-full h-screen bg-blue-400   grid place-items-center">
      <form
        autoComplete="on"
        onSubmit={handleSubmit(submit, onError)}
        className=" flex flex-col items-center justify-center gap-5"
      >
        <input
          type="text"
          className="bg-blue-300 p-3 rounded-2xl outline-none"
          {...register("name")}
          placeholder="name"
        />
        <input
          type="email"
          className="bg-blue-300 p-3 rounded-2xl outline-none"
          {...register("emil")}
          placeholder="email"
        />
        <button
          type="submit"
          className="bg-violet-600 cursor-pointer p-3 rounded-2xl"
        >
          {user ? "edit" : "submit"}
        </button>
      </form>
    </div>
  );
}

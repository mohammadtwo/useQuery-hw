import { useForm, type FieldErrors } from "react-hook-form";
import type { User } from "../../types/types";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
export function CreateUser() {
  const userSchema = z.object({
    name: z.string("name not empty").trim().min(2, "name langer two character"),
    emil: z.email("email not validate"),
  });
  const {
    register,
    handleSubmit,
    
    reset,
    
  } = useForm<User>({ resolver: zodResolver(userSchema) });
  const submit = (data: User) => {
    console.log(data);
    reset()
  };
const onError = (formErrors: FieldErrors<User>) => {
  Object.values(formErrors).forEach((error) => {
    if (error?.message) {
      toast.error(String(error.message));
    }
  });
};

  return (<div className="w-full h-screen bg-green-700">

    <form autoComplete="on"
      onSubmit={handleSubmit(submit, onError)}
      className="w-full h-full bg-blue-400 flex flex-col items-center justify-center gap-5"
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
      >submit</button>
    </form>
  </div>
  );
}

import Button from "../ui/button";

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ criteriaMode: "all" });

  const onSubmit = (data) => {
    console.log(data);
    reset()
  };

  return (
    <form
      className={(errors?.email ? "ring-[1px] ring-red-500 ring-inset" : null)+ " flex-center max-sm:flex-col justify-between bg-white sm:rounded-[32.5px] rounded-[10px] p-2"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        placeholder="Your email address"
        className="ml-2 w-full py-2 outline-none"
        {...register("email", {
          required: "Please, add your Email!",
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: "Please Add the correct Email",
          },
        })}
      />


      <ErrorMessage
        errors={errors}
        name="email"
        render={({ messages }) => {
          return messages
            ? Object.entries(messages).map(([type, message]) => (
                <p className="text-left px-2 text-[15px] font-outfit py-1 text-red-600"key={type}>
                  {message}
                </p>
              ))
            : null;
        }}
      />

      <button
        type="submit"
        className="py-[10px] px-8 text-[18px] font-outfit text-white rounded-[26px] bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-l z-10 transition-all ease-in-out duration-300 hover:shadow-md hover:shadow-primary"
      >
        Subscribe
      </button>
    </form>
  );
}

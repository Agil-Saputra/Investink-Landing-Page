import Button from "../ui/button"

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function form() {
    const {register, handleSubmit, formState:{ errors }, reset} = useForm({ criteriaMode: "all" })

    const onSubmit = () => {
      lg
    }

  return (
    <div className='flex-center justify-between bg-white rounded-[32.5px] p-2'>
        <input placeholder='Your email address' className="ml-2 w-full py-2 outline-none" />
        <Button link='' title='Subscribe' />
    </div>
  )
}

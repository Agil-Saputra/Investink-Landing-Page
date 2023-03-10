import {BsArrowRight} from "react-icons/bs"

export default function learnMore({href}) {
  return (
    <a href={href} className=" z-10 flex items-end gap-2 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">Learn more <BsArrowRight size={20}/></a>
  )
}

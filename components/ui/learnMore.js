import {BsArrowRight} from "react-icons/bs"

export default function learnMore({href}) {
  return (
    <a href={href} className="flex items-end gap-2">Learn more <BsArrowRight size={20}/></a>
  )
}

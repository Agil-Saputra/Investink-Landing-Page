import Image from "next/image"
import { motion } from "framer-motion"

export default function card({icon, title, desc}) {
  return (
    <motion.div className="grid place-items-center" >
    <Image
        src={"https:" + icon.url}
        width={icon.details.image.width}
        height={icon.details.image.height}
        alt={title}
        className="mb-10"
    />
    <h2 className="h4 mb-6">{title}</h2>
    <p className="paraf w-[23ch]">{desc}</p>
    </motion.div>
  )
}

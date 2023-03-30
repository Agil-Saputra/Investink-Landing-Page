import Form from "./form"
import Image from "next/image"

import {motion} from "framer-motion"
import { container, set, itemUp} from "@/utils/motion"

export default function subs({data}) {
    const {subsText, image} = data[0].fields
  return (
    <motion.div  
    {...set} 
    variants={itemUp(0.1)}
    className="flex items-end max-mlg:items-start max-mlg:flex-col max-sm:p-2 p-8 gap-4 justify-between font-outfit subs-bg md:m-10 mx-4 rounded-2xl overflow-hidden">

     <Image 
    src={"https:" + image.fields.file.url}
    width={520}
    height={469}
    alt={image.fields.title}
    priority={true}
    className='w-auto'
   />

   <div   className="xl:px-12 p-2">
   <h2 className="h2 mb-8 text-white">{subsText}</h2>
   <Form/>
   </div>
    </motion.div>
  )
}
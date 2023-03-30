import Image from "next/image";
import check from "../../icon/iconChecks.svg"

import {motion} from "framer-motion"
import { container, set, item, imageX} from "@/utils/motion"

export default function savings({data}) {
    const {title, desc, image, lists} = data[0].fields

  return (
    <section className='font-outfit md:mr-24 flex items-end lg:items-center max-lg:flex-col-reverse lg:gap-20 mt-20 justify-between'>

    <motion.div variants={imageX(-100)} {...set} className="max-lg:self-start gradient-bg">
   <Image 
    src={"https:" + image.fields.file.url}
    width={710}
    height={710}
    alt={image.fields.title}
   />
    </motion.div>

    <motion.div variants={container} {...set} className="max-md:m-4 md:max-w-[50ch]">
     <motion.ah1 className='h2' variants={item(0.1)}>{title}</motion.ah1>
     <motion.p variants={item(0.2)} className='max-w-[48ch] paraf my-4'>{desc}</motion.p>
     <motion.ul variants={item(0.3)}>
        {lists.map(list => {
            return (
            <li key={list} className="flex-center gap-2 my-6 font-medium">
            <Image 
                width={22}
                height={22}
                src={check}
                alt='heck icon'
                priority={true}

            />
            {list}</li>
            )
            })}
     </motion.ul>
    </motion.div>
    </section>
  )
}

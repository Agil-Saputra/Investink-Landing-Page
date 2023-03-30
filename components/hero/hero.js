import Image from "next/image"

// impor all ui elements
import LearnMore from "../ui/learnMore"
import Button from "../ui/button"
import Stats from "../ui/stats"

import {motion} from "framer-motion"
import { container, set, item, imageX} from "@/utils/motion"

export default function hero({data}) {
    const {title, desc, image} = data[0].fields

  return (
    <motion.section variants={container} {...set} className='font-outfit md:ml-24 flex items-end lg:items-center max-lg:flex-col justify-between w-full'>
    <motion.div variants={item(0.1)} className="max-md:m-4 gradient-bg max-lg:self-start">
     <div className='flex-center gap-2 mb-8 max-sm:flex-col max-md:items-start'>
      <p className='py-[8px] px-[14px] font-medium bg-slate-200 rounded-[17px]'>Coming Soon</p>
      <p className='paraf'>Investink will have mobile app soon!</p>
     </div>

     <motion.h1 variants={item(0.2)}  className='text-6xl font-bold max-w-[15ch] leading-[5rem] max-md:text-4xl'>{title}</motion.h1>
     <motion.p variants={item(0.3)}  className='vsm:max-w-[48ch] paraf my-4 max-w-[20ch]'>{desc}</motion.p>
     <motion.div variants={item(0.4)} className="flex-center gap-4 max-md:flex-col ">
        <Button link="" title="Discover Now"/>
        <LearnMore/>
     </motion.div>

     <motion.div variants={item(0.5)}  className="flex-center gap-4 max-sm:flex-col max-sm:items-start max-sm:gap-0">
     <Stats amount="12k" desc="Years of<br> experience"/>
     <Stats amount="24k" desc="Statisfied<br>and happy user"/>
     </motion.div>
    </motion.div>

    <motion.div variants={imageX(100)} className="gradient-bg">
   <Image 
    src={"https:" + image.fields.file.url}
    width={683}
    height={710}
    alt={image.fields.title}
    priority={true}
   />
    </motion.div>
    </motion.section>
  )
}

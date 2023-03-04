import Image from "next/image";
import Button from "../ui/button";
import LearnMore from "../ui/learnMore";

import {motion} from "framer-motion"
import { container, set, imageX, itemUp} from "@/utils/motion"

export default function contact({ data }) {
  const { title, desc, heroImg } = data[0].fields;
  return (
    <section className="font-outfit md:ml-24 flex items-end lg:items-center max-lg:flex-col justify-between">
      <motion.div variants={container} {...set} className="flex-col flex max-lg:self-start">
        <motion.div variants={itemUp(0.4)} className="max-md:m-4 gradient-bg md:max-w-[55ch]">
          <h1 className="h2">{title}</h1>
          <p className="max-w-[48ch] paraf my-4">{desc}</p>
        </motion.div>

        <motion.div variants={itemUp(0.5)} className="flex-center gap-4  max-md:flex-col max-md:m-4">
          <Button link="" title="Contact Now" />
          <LearnMore />
        </motion.div>
      </motion.div>

      <motion.div variants={imageX(100)} {...set} className="gradient-bg">
        <Image
          src={"https:" + heroImg.fields.file.url}
          width={710}
          height={710}
          alt={heroImg.fields.title}
          priority={true}
        />
      </motion.div>
    </section>
  );
}

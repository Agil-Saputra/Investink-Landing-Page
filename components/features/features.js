import Card from "./card";
import { motion } from "framer-motion";
import { container, itemUp, set } from "@/utils/motion";

export default function features({ data }) {
  return (
    <motion.section
      variants={container}
      {...set}
      className="md:mx-24 mx-2 text-center flex-center flex-col font-outfit mt-28 max-sm:mt-5"
    >
      <motion.h2 variants={itemUp(0.1)} className="h2">
        Why should choose us
      </motion.h2>
      <motion.p variants={itemUp(0.2)} className="paraf my-6 mb-16">
        Because we always think of user needs and provide the best
      </motion.p>
      <motion.div
        variants={itemUp(0.3)}
        className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-center"
      >
        {data.map((item) =>  (
            <Card
              key={item.fields.title}
              icon={item.fields.icon.fields.file}
              title={item.fields.title}
              desc={item.fields.desc}
            />
          )
        )}
      </motion.div>
    </motion.section>
  );
}

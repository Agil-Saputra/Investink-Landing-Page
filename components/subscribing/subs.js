import Form from "./form"
import Image from "next/image"

export default function subs({data}) {
    const {subsText, image} = data[0].fields
  return (
    <div className="flex-center max-lg:flex-col p-8 gap-4 justify-between font-outfit bg-contact  md:m-10 m-4 rounded-2xl">
     <Image 
    src={"https:" + image.fields.file.url}
    width={710}
    height={710}
    alt={image.fields.title}
    priority={true}
   />
   <div className="lg:px-12">
   <h2 className="h2 mb-8 text-white">{subsText}</h2>
   <Form/>
   </div>
    </div>
  )
}
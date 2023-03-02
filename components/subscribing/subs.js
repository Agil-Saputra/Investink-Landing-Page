import Form from "./form"
import Image from "next/image"

export default function subs({data}) {
    const {subsText, image} = data[0].fields
  return (
    <div className="flex items-end max-mlg:items-start max-mlg:flex-col max-sm:p-2 p-8 gap-4 justify-between font-outfit subs-bg md:m-10 mx-4 rounded-2xl">
     <Image 
    src={"https:" + image.fields.file.url}
    width={520}
    height={469}
    alt={image.fields.title}
    priority={true}
    style={{width: 'auto'}}
   />
   <div className="xl:px-12">
   <h2 className="h2 mb-8 text-white max-sm:text-[2.5rem]">{subsText}</h2>
   <Form/>
   </div>
    </div>
  )
}
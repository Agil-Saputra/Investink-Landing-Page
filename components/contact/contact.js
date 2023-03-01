import Image from "next/image"

export default function contact({data}) {
    const {title, desc, heroImg}  = data[0].fields
  return (
    <section className='font-outfit md:ml-24 flex items-end lg:items-center max-lg:flex-col justify-between'>
    <div className="max-md:m-4 gradient-bg max-lg:self-start md:max-w-[55ch]">
     <h1 className='h2'>{title}</h1>
     <p className='max-w-[48ch] paraf my-4'>{desc}</p>
    </div>

    <div className="gradient-bg">
   <Image 
    src={"https:" + heroImg.fields.file.url}
    width={710}
    height={710}
    alt={heroImg.fields.title}
    priority={true}
   />
    </div>
    </section>
  )
}

import Image from "next/image";
import check from "../../icon/iconChecks.svg"


export default function savings({data}) {
    const {title, desc, image, lists} = data[0].fields

  return (
    <section className='font-outfit md:mr-24 flex items-end lg:items-center max-lg:flex-col-reverse lg:gap-20 mt-20'>

    <div className="max-lg:self-start gradient-bg">
   <Image 
    src={"https:" + image.fields.file.url}
    width={710}
    height={710}
    alt={image.fields.title}
   />
    </div>

    <div className="max-md:m-4 md:max-w-[50ch]">
     <h1 className='h2 '>{title}</h1>
     <p className='max-w-[48ch] paraf my-4'>{desc}</p>
     <ul>
        {lists.map(list => {
            return (
            <li key={list} className="flex-center gap-2 my-6">
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
     </ul>
    </div>
    </section>
  )
}

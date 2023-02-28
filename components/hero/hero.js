import Image from "next/image"

// impor all ui elements
import LearnMore from "../ui/learnMore"
import Button from "../ui/button"
import Stats from "../ui/stats"

export default function hero({data}) {
    const {title, desc, image} = data[0].fields

  return (
    <section className='font-outfit md:ml-24 flex-center max-md:flex-col justify-between gradient-bg'>
    <div className="max-md:m-4">
     <div className='flex-center gap-2 mb-8'>
      <p className='py-[8px] px-[14px] font-medium bg-slate-200 rounded-[17px]'>Coming Soon</p>
      <p className='paraf'>Investink will have mobile app soon!</p>
     </div>

     <h1 className='text-6xl font-bold max-w-[20ch] leading-[5rem]'>{title}</h1>
     <p className='max-w-[48ch] paraf my-4'>{desc}</p>

     <div className="flex-center gap-4">
        <Button link="" title="Discover Now"/>
        <LearnMore/>
     </div>

     <div className="flex-center gap-4">
     <Stats amount="12k" desc="Years of<br> experience"/>
     <Stats amount="24k" desc="Statisfied<br>and happy user"/>
     </div>
    </div>

    <div className="max-w-[]">
   <Image 
    src={"https:" + image.fields.file.url}
    width={683}
    height={710}
    alt={image.fields.title}
   />
    </div>
    </section>
  )
}

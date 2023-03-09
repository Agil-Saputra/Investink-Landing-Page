
export default function button({link, title}) {
  return (
    <a href={link} className='py-[10px] px-8 text-[18px] font-outfit text-white rounded-[26px] bg-gradient-to-r hover:bg-gradient-to-l z-10 transition-all ease-in-out duration-300 hover:shadow-lg hover:shadow-primary from-primary to-secondary max-md:w-full text-center'>{title}</a>
  )
}

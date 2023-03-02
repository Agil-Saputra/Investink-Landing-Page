import Image from 'next/image'
import arrow from '../../icon/haruki-icons.svg'

export default function learnMore({href}) {
  return (
    <a href={href} className="flex items-end gap-2">Learn more <Image src={arrow} alt="arrow" width={18} height={18} /> </a>
  )
}

import Image from "next/image"
import logo from "../../icon/investink-logo.svg"
import Button from "../ui/button"


export default function navbar() {
const menus = ["Home", "About", "Pricing", "Service", "Testimonials"]

  return (
    <header className="flex-center justify-between font-outfit md:px-24 px-4 py-10">
    <Image
        src={logo}
        width={170}
        height={40}
        alt="Investink Logo"
        priority={true}
        className="w-auto h-auto"
    />
    <nav className="flex-center gap-10 max-md:hidden">
        {menus.map(menu => <a href="#" className="hover:text-slate-400 smooth" key={menu}>{menu}</a>)}
    </nav>

    <div className="flex-center gap-8">
        <a href="#" className="hover:text-slate-400 smooth">Login</a>
        <Button link="#" title="Register"/>
    </div>
    </header>
  )
}
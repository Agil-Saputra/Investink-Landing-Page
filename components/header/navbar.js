import { useState, useEffect } from "react"
import Image from "next/image"
import logo from "../../icon/investink-logo.svg"
import Login from "./login"
import { FaBars } from "react-icons/fa"
import { GrClose } from "react-icons/gr"

export default function Navbar() {
const [showNav, setShowNav] = useState(false)
const menus = ["Home", "About", "Pricing", "Service", "Testimonials"] 
const setIcon = {
  size: 25,
  className: "lg:hidden z-10",
  onClick: handleToggle,
}

function handleToggle() {
  setShowNav(!showNav)
}

  useEffect(() => {
    document.body.classList = (showNav ? "max-lg:overflow-hidden" : "overflow-unset")
}, [showNav]) 

  return (
    <header className="flex-center gap-8 justify-between font-outfit md:px-24 px-4 py-10">
    <Image
        src={logo}
        width={170}
        height={40}
        alt="Investink Logo"
        priority={true}
    />

    <nav className={(showNav ? " translate-y-0 max-lg:bg-secondary" : "max-lg:-translate-y-full") + " flex gap-8 items-center max-lg:bg-opacity-95 tracking-[1.2px] max-lg:fixed max-lg:flex-col top-0 right-0 max-lg:z-10 max-lg:w-full max-lg:h-full max-lg:justify-center max-lg:smooth"} onClick={handleToggle}>
    {menus.map(menu => <a href="#" className="hover:text-slate-400 smooth" key={menu}>{menu}</a>)}
    <Login style={"flex-center gap-8 lg:hidden"}/>

    </nav>
    <Login style={"lg:flex items-center gap-8 hidden"}/>
    {showNav ? <GrClose {...setIcon} /> : <FaBars {...setIcon} />}
    </header>
  )
}

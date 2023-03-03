import Button from "../ui/button"

export default function login({style}) {
  return (
    <div className={"max-lg:flex-col " + style}>
    <a href="#" className="hover:text-slate-400 smooth">Login</a>
    <Button link="#" title="Register"/>
</div>
  )
}

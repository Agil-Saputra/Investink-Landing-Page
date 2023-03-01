import Button from "../ui/button"

export default function form() {
  return (
    <div className='flex-center justify-between bg-white rounded-[32.5px] p-2'>
        <input placeholder='Your email address' className="ml-2"/>
        <Button link='' title='Subscribe' />
    </div>
  )
}

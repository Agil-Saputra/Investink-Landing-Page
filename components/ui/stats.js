import React from 'react'

export default function stats({amount, desc}) {
  return (
    <div className='flex-center gap-2 sm:my-8 my-4'>
        <h2 className='md:text-4xl font-bold text-2xl'>{amount}</h2>
        <p className='text-[15px] w-[] leading-4' dangerouslySetInnerHTML={{__html: desc}}></p>
    </div>
  )
}

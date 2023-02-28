import React from 'react'

export default function stats({amount, desc}) {
  return (
    <div className='flex-center gap-2 my-8'>
        <h2 className='text-4xl font-bold'>{amount}</h2>
        <p className='text-[15px] w-[] leading-4' dangerouslySetInnerHTML={{__html: desc}}></p>
    </div>
  )
}

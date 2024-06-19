/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ChannelHeader = ({channel}) => {
  return (
    <div className='mt-12 ml-12 flex items-center gap-4 border-2 border-black p-2 rounded-md w-[70%]'>
        <img src={channel?.thumbnails?.default.url} alt={channel?.title} className="w-12 h-12 object-contain rounded-[50%]"/>
        <p className="text-[1.25rem] font-bold">{channel?.title}</p>
    </div>
  )
}

export default ChannelHeader
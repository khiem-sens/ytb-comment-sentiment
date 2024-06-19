/* eslint-disable @next/next/no-img-element */
import React from 'react'

const VideoHeader = ({video}) => {
  return (
    <div className='mt-12 ml-12 flex-col justify-center gap-4'>
        <img src={video?.thumbnails?.maxres?.url} alt={video?.title} className="object-cover w-[420px] rounded-md"/>
        <p className="text-[1.25rem] font-bold mt-4">{video?.title}</p>
    </div>
  )
}

export default VideoHeader
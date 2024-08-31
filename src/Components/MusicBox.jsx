import React from 'react'
import { MdMusicNote, MdMusicOff } from "react-icons/md";

const MusicBox = ({music,setMusic}) => {
  return (
    <div className='fixed bottom-5 left-5 z-50  bg-blue-950 rounded-full p-2 w-10 h-10 flex items-center justify-center cursor-pointer'
    onClick={() => setMusic(!music)}
    >

      {music ? <MdMusicNote className='text-xl text-white' /> : <MdMusicOff className='text-xl text-white' />}
    </div>
  )
}

export default MusicBox
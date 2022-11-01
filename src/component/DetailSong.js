import React, { useContext } from 'react'
import { Songs } from '../Context'

export default function DetailSong() {
  const {song} = useContext(Songs)
  return (
    <div className='col-span-5 sm:col-span-1 relative sm:h-full h-[60vh]'>
       <h2 className='text-cyan-500 font-bold absolute top-0 z-10 p-3'>Now playing</h2>
       <h2 className='text-neutral-200 text-2xl absolute top-0 z-10 pl-3 pt-10'>{song.name}</h2>
       <div className='w-[100%] absolute top-0'>
          <img className='w-full h-[60vh] sm:h-full brightness-50 object-cover' src={song.links.images[1].url} />
       </div>
       <div className='flex justify-evenly items-center mt-10'>
       <img className='img_author w-[70px] h-[70px] rounded-full m-4 absolute bottom-0 left-0 z-10' src={song.links.images[0].url} />
        <span className='text-xl text-white absolute bottom-9 left-[7rem] z-10'>{song.author}</span>
       </div>
    </div>
  )
}

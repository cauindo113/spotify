import React, { useContext, useState, useEffect } from 'react'
import { Songs } from '../Context'

export default function ListSong() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setIdSong] = useState(0);
  const handlePlaySong = (idSong) => {
    setIdSong(idSong);
    handleSetSong(idSong);
  }
  useEffect(() => {
    setIdSong(song.id)
  }, [song])

  return (
    <div className='bg-slate-800 col-span-5 sm:col-span-2 mb-[6rem] sm:mb-0 sm:overflow-y-scroll overflow-y-visible'>
    <div className='sticky top-0 z-30 w-full block h-13 bg-slate-900 p-1'>
      <form className="flex items-center">   
    <label for="voice-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="voice-search" className="bg-slate-800 border border-gray-300 text-white text-sm block w-full pl-10 p-2.5" placeholder="Search Song..." required/>
        <button type="button" className="flex absolute inset-y-0 right-0 items-center pr-3">
            <svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path></svg>
        </button>
    </div>
    <button type="submit" className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white border bg-cyan-500 border-cyan-500 hover:bg-cyan-500 focus:ring-4 focus:outline-none focus:ring-blue-300">
        <svg aria-hidden="true" className="mr-2 -ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>Search
    </button>
</form>
      </div>
    <div className='sm:h-auto h-[400px] overflow-y-scroll sm:overflow-y-visible'>
      <table className='table-auto w-full'>
          <thead className='text-white sticky sm:top-[3.1rem] top-0 bg-slate-900'>
          <tr style={{height: "3rem"}}>
            <th className='w-[10%]'>#</th>
            <th className='text-left'>Title</th>
            <th className='w-[10%]'>Author</th>
            <th className='w-[10%]'><i className='fa fa-download'></i></th>
          </tr>
        </thead>
        <tbody>
          {
            DataSongs.map((song, index) => (
              <tr key={index}
                className={`cursor-pointer bg-slate-800 h-12 text-gray-400 hover:bg-slate-600 ${idSong === song.id && 'text-teal-400 bg-slate-600'}`}
                onClick={() => handlePlaySong(song.id)}>
                <td className='text-center'>{index + 1}</td>
                <td>{song.name}</td>
                <td className='text-center'>{song.author}</td>
                <td className='text-center'><a href={song.url}><i className="hover:animate-bounce fa fa-download"></i></a></td>
              </tr>
            ))
          }


        </tbody>
      </table>
    </div>
    </div>
  )
}

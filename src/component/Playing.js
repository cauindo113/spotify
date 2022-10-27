import React, { useContext } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../Context';

export default function Playing() {
    const {song, handleSetSong} = useContext(Songs)
    const handleClickNext = () => {
        handleSetSong(song.id + 1)
    }
    const handleClickPrev = () => {
        handleSetSong(song.id - 1)
    }
  return (
    <div>
        <AudioPlayer
        className='player-music'
        src={song.url} 
        showSkipControls={true}
        showJumpControls={true}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrev}
        onEnded={handleClickNext}
         />
    </div>
  )
}

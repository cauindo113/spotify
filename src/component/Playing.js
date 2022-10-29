import React, { useContext } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import { Songs } from '../Context';

export default function Playing() {
  const { song, handleSetSong } = useContext(Songs)
  const handleClickNext = () => {
    handleSetSong(song.id + 1)
  }
  const handleClickPrev = () => {
    handleSetSong(song.id - 1)
  }
  const handlePlay = () => {
    let animateImgAuthor = document.querySelector(".img_author");
    animateImgAuthor.classList.add("animate-spin");
  }
  const handlePause = () => {
    let animateImgAuthor = document.querySelector(".img_author");
    animateImgAuthor.classList.remove("animate-spin");
  }
  return (
    <div>
      <AudioPlayer
        className='player-music fixed bottom-0 z-20'
        src={song.url}
        showSkipControls={true}
        showJumpControls={true}
        onPlay={handlePlay}
        onPause={handlePause}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrev}
        onEnded={handleClickNext}
      />
    </div>
  )
}

import React from 'react'
import MacWindow from './MacWindow'
import "./soptify.css"
import Title from '../../templates/Title'
const Spotify = ({windowName,windowsState, setwindowsState}) => {
  return (
   <MacWindow windowName={windowName} windowsState={windowsState} setwindowsState={setwindowsState}>
        <div className='spotify-window'>
          <Title title="Music" />
        <iframe data-testid="embed-iframe" style={{borderRadius : "12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1E4vqXjPu7Hg0z?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        <iframe data-testid="embed-iframe" style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/track/3RmFPuTTAjSQ2pbEd2j9oA?utm_source=generator" width="100%" height="352" frameBorder="0" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
   </MacWindow>
  )
}

export default Spotify
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoPlayer from './Player'

function App() {

  let src = "https://www.youtube.com/watch?v=pPzVV2kkGHc&list=PLF2K2xZjNEf97A_uBCwEl61sdxWVP7VWC"
  return (
    <>
      <h1 className='title'>E-Learning Platform</h1>
      <div className='video'>
        <VideoPlayer src={src}/>
      </div>
    </>
  )
}

export default App

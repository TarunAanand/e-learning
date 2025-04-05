import { useState } from 'react'
import { Page1, Page2, Page3 } from './os/Pages'
import './App.css'
import VideoPlayer from './Player'
import Header from './Header'
import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleTestRedirect = () => {
    navigate("/test");  // Redirects to /test
  };
  let src = "https://www.youtube.com/watch?v=pPzVV2kkGHc&list=PLF2K2xZjNEf97A_uBCwEl61sdxWVP7VWC"
  const vtitle = "What is an Operating System? ";

  return (
    <>

      <div className="app-container">
        <Header isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <h1 className='chapter-name'>{vtitle}</h1>
          <div className='video'>
            <VideoPlayer src={src} />
          </div>
          <Page3 />
        </div>
      </div>
      <Navbar />
      <button onClick={handleTestRedirect}>Take test</button>
    </>
  )
}

export default App





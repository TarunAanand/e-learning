import { useState } from 'react'
import { Page1, Page2, Page3 } from './Pages'
import '../styles/App.css'
import HeaderNew from './Header/HeaderNew'
import Navbar from './Navbar'
import { useNavigate } from "react-router-dom";
import Courses from './courses/Courses'

function App() {
//  <h1 className='chapter-name'>{vtitle}</h1>
//          <div className='video'>
//            <VideoPlayer src={src} />
//          </div>
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const handleTestRedirect = () => {
    navigate("/test");  // Redirects to /test
  };

  //<Header isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
  return (
    <>
      <HeaderNew />
      <Courses />
      <div className="app-container">
        
      </div>
      <Navbar />
      <button style={{margin: "0 auto",
        display: 'block',
        padding: "10px 30px",
        marginBottom: "50px"
      }}  onClick={handleTestRedirect}>Take test</button>
    </>
  )
}

export default App





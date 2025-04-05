import { useState } from 'react'
import './header.css';

function Header ({ isOpen, setIsOpen}) {
    //const [isOpen, setIsOpen] = useState(false);
  return (
    <>
        <div className={`sidebar ${isOpen ? "open": "close"}`}>
            <h2 className='courses'>COURSES</h2>
            <h3 className='course-1'>Operating Systems</h3>
            <h3 className='course-2'>Web Technology</h3>
            <h3 className='course-3'>Software construction</h3>
            <h3 className='course-4'>Optimization techniques</h3>
        </div>
        <div className="header-container">
            <button className='menu-icon' onClick={() => setIsOpen(!isOpen)}><svg aria-hidden="true" fill="none" focusable="false" height="24" viewBox="0 0 20 20" width="24" id="cds-react-aria-:Rqd9cql9qj4q:" class="css-1u8qly9"><path d="M3.75 14.5a.728.728 0 01-.534-.214.72.72 0 01-.216-.532c0-.21.072-.39.216-.535A.72.72 0 013.75 13h12.5c.212 0 .39.072.534.214a.72.72 0 01.216.532c0 .21-.072.39-.216.535a.72.72 0 01-.534.219H3.75zm0-3.75a.728.728 0 01-.534-.214.72.72 0 01-.216-.532c0-.21.072-.39.216-.535a.72.72 0 01.534-.219h12.5c.212 0 .39.071.534.214a.72.72 0 01.216.532c0 .21-.072.39-.216.535a.72.72 0 01-.534.219H3.75zm0-3.75a.728.728 0 01-.534-.214A.72.72 0 013 6.254c0-.21.072-.39.216-.535A.72.72 0 013.75 5.5h12.5c.212 0 .39.071.534.214a.72.72 0 01.216.532c0 .21-.072.39-.216.535A.72.72 0 0116.25 7H3.75z" fill="currentColor"></path></svg></button>
            <h1 className='title'>E-Learning Platform</h1>
            <button className='search-icon'><svg aria-hidden="true" fill="none" focusable="false" height="24" viewBox="0 0 20 20" width="24" id="cds-react-aria-:R6jadal9qj4q:" class="css-1u8qly9"><path d="M8 13c-1.389 0-2.57-.486-3.542-1.458C3.486 10.569 3 9.389 3 8c0-1.389.486-2.57 1.458-3.542C5.431 3.486 6.611 3 8 3c1.389 0 2.57.486 3.542 1.458C12.514 5.431 13 6.611 13 8.001a4.78 4.78 0 01-.26 1.587 5.204 5.204 0 01-.72 1.37l4.46 4.459c.152.152.228.326.228.52a.718.718 0 01-.229.521.73.73 0 01-1.062 0l-4.459-4.437a5.204 5.204 0 01-1.37.719A4.78 4.78 0 018 13zm0-1.5c.972 0 1.799-.34 2.48-1.02.68-.681 1.02-1.508 1.02-2.48s-.34-1.799-1.02-2.48C9.798 4.84 8.971 4.5 8 4.5s-1.799.34-2.48 1.02C4.84 6.202 4.5 7.029 4.5 8s.34 1.799 1.02 2.48c.681.68 1.508 1.02 2.48 1.02z" fill="currentColor"></path></svg></button> 
        </div>
    </>
  )
}

export default Header
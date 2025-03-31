import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VideoPlayer from './Player'
import Header from './Header'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  let src = "https://www.youtube.com/watch?v=pPzVV2kkGHc&list=PLF2K2xZjNEf97A_uBCwEl61sdxWVP7VWC"
  const vtitle = "What is an Operating System? ";

  return (
    <>
  
    <div className="app-container">
      <Header isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      <div className={`main-content ${isSidebarOpen ? 'sidebar-open': ''}`}>
        <h1 className='chapter-name'>{vtitle}</h1>
        <div className='video'>
          <VideoPlayer src={src}/>
        </div>
        <div class="chapter-content">
  <h1>Chapter 1: What is an Operating System?</h1>
  
  <section class="learning-section">
    <h2>📌 Definition and Introduction to OS</h2>
    <p>An <strong>Operating System (OS)</strong> is system software that acts as an intermediary between computer hardware and users. It manages hardware resources, provides essential services for software applications, and ensures a smooth computing experience.</p>
    <p>Without an OS, every program would need to handle hardware operations independently, making computing inefficient and complex. Examples of popular operating systems include <strong>Windows, macOS, Linux, Android, and iOS</strong>.</p>
  </section>

  <section class="learning-section">
    <h2>🌍 The Importance of Operating Systems</h2>
    <p>Operating systems are crucial because:</p>
    <ul>
      <li>They enable users to interact with computers without needing deep hardware knowledge.</li>
      <li>They allow multiple applications to run simultaneously.</li>
      <li>They provide a consistent environment for software development.</li>
      <li>They ensure stability, security, and performance across different devices.</li>
    </ul>
    <p>Without an OS, modern computing—from smartphones to supercomputers—would not be possible.</p>
  </section>

  <section class="learning-section">
    <h2>⚙️ Resource Management and Abstraction</h2>
    <p>An OS efficiently manages hardware resources such as:</p>
    <ul>
      <li><strong>CPU (Processor):</strong> Allocates computing power to different tasks.</li>
      <li><strong>Memory (RAM):</strong> Ensures programs have enough space to run.</li>
      <li><strong>Storage (HDD/SSD):</strong> Manages file systems and data access.</li>
      <li><strong>Input/Output (I/O) Devices:</strong> Controls peripherals like keyboards, mice, and printers.</li>
    </ul>
    <p><strong>Abstraction</strong> simplifies complexity—users and applications don't need to know hardware details. Instead, the OS provides easy-to-use interfaces (APIs).</p>
  </section>

  <section class="learning-section">
    <h2>🔒 Security and Protection</h2>
    <p>The OS ensures:</p>
    <ul>
      <li><strong>User Authentication:</strong> Verifies identities via passwords/biometrics.</li>
      <li><strong>Access Control:</strong> Restricts unauthorized file or system access.</li>
      <li><strong>Process Isolation:</strong> Prevents one program from crashing the entire system.</li>
      <li><strong>Malware Defense:</strong> Includes firewalls, encryption, and antivirus integration.</li>
    </ul>
    <p>Security is critical in today's connected world, where cyber threats are constantly evolving.</p>
  </section>

  <section class="learning-section">
    <h2>📈 Scalability and Performance Challenges</h2>
    <p>As computing needs grow, an OS must:</p>
    <ul>
      <li>Handle multiple users and tasks efficiently.</li>
      <li>Optimize resource usage to prevent slowdowns.</li>
      <li>Support new hardware (e.g., multi-core CPUs, GPUs, SSDs).</li>
      <li>Adapt to cloud computing and distributed systems.</li>
    </ul>
    <p>Performance tuning (e.g., caching, scheduling algorithms) is key to a responsive system.</p>
  </section>

  <section class="learning-section">
    <h2>🧩 Collaboration in Learning</h2>
    <p>Studying OS concepts helps in:</p>
    <ul>
      <li><strong>Computer Science Fundamentals:</strong> Understanding how software interacts with hardware.</li>
      <li><strong>Problem-Solving:</strong> Debugging system-level issues.</li>
      <li><strong>Team Projects:</strong> Learning how different OS components work together.</li>
      <li><strong>Open-Source Contributions:</strong> Many OSs (like Linux) are community-driven.</li>
    </ul>
  </section>

  <section class="learning-section">
    <h2>📚 Real-World Applications</h2>
    <p>OS knowledge is essential for:</p>
    <ul>
      <li><strong>Software Development:</strong> Writing efficient, hardware-aware code.</li>
      <li><strong>Cybersecurity:</strong> Protecting systems from vulnerabilities.</li>
      <li><strong>Cloud Computing:</strong> Managing virtual machines and containers.</li>
      <li><strong>Embedded Systems:</strong> Powering IoT devices, cars, and medical equipment.</li>
    </ul>
  </section>

  <section class="learning-section">
    <h2>💡 Innovation and Evolution of Technology</h2>
    <p>Operating systems have evolved from simple batch processing (1950s) to modern AI-integrated systems. Key milestones:</p>
    <ul>
      <li><strong>Multitasking OS (1960s):</strong> Allowed multiple programs to run.</li>
      <li><strong>Graphical User Interfaces (1980s):</strong> Made computing user-friendly.</li>
      <li><strong>Mobile & Cloud OS (2000s):</strong> Enabled smartphones and remote computing.</li>
      <li><strong>AI & Quantum OS (Future):</strong> Next-gen systems will leverage machine learning and quantum computing.</li>
    </ul>
  </section>

  <div class="chapter-summary">
    <h3>🔹 Summary</h3>
    <p>An operating system is the backbone of computing, managing resources, ensuring security, and enabling innovation. Understanding OS principles is fundamental for anyone in tech.</p>
    <p>In the next chapter, we'll explore <strong>"History and Evolution of Operating Systems."</strong></p>
  </div>
</div>
      </div>
    </div>
    </>
  )
}

export default App

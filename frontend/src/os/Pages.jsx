import React from 'react'
import './Pages.css'

export const Page1 = () => {
    return (
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
    )
}

export const Page2 = () => {
    return (
        <div class="chapter-container">
            <header class="chapter-header">
                <h1 class="chapter-title">Chapter 2: Four Fundamental OS Concepts</h1>
                <p class="chapter-subtitle">Core principles that define modern operating systems</p>
            </header>

            <section class="concept-card">
                <h2 class="concept-heading">🧵 Threads</h2>
                <div class="concept-content">
                    <h3 class="subtopic">What are Threads?</h3>
                    <p class="concept-text">Threads are the smallest units of execution within a process. A single process can contain multiple threads that share the same memory space and resources.</p>

                    <h3 class="subtopic">Key Characteristics</h3>
                    <ul class="feature-list">
                        <li><strong>Lightweight:</strong> Require fewer resources than full processes</li>
                        <li><strong>Shared Memory:</strong> All threads in a process share the same address space</li>
                        <li><strong>Concurrent Execution:</strong> Enable parallel task processing</li>
                    </ul>

                    <h3 class="subtopic">Real-World Applications</h3>
                    <div class="example-box">
                        <p>Web browsers use separate threads for:</p>
                        <ul>
                            <li>UI rendering</li>
                            <li>Network requests</li>
                            <li>JavaScript execution</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="concept-card">
                <h2 class="concept-heading">🗺️ Address Space</h2>
                <div class="concept-content">
                    <h3 class="subtopic">Memory Organization</h3>
                    <p class="concept-text">An address space is the range of memory addresses that a process can use, providing each program with the illusion of having its own dedicated memory.</p>

                    <h3 class="subtopic">Core Components</h3>
                    <div class="architecture-diagram">
                        <div class="memory-segment">
                            <span class="segment-label">Code Segment</span>
                            <span class="segment-desc">Executable instructions</span>
                        </div>
                        <div class="memory-segment">
                            <span class="segment-label">Data Segment</span>
                            <span class="segment-desc">Global variables</span>
                        </div>
                        <div class="memory-segment">
                            <span class="segment-label">Heap</span>
                            <span class="segment-desc">Dynamic memory allocation</span>
                        </div>
                        <div class="memory-segment">
                            <span class="segment-label">Stack</span>
                            <span class="segment-desc">Function calls/local variables</span>
                        </div>
                    </div>

                    <h3 class="subtopic">Protection Benefits</h3>
                    <p class="concept-text">Address spaces prevent processes from accessing each other's memory, ensuring stability and security.</p>
                </div>
            </section>

            <section class="concept-card">
                <h2 class="concept-heading">⚙️ Processes</h2>
                <div class="concept-content">
                    <h3 class="subtopic">Process Definition</h3>
                    <p class="concept-text">A process is an instance of a running program, consisting of:</p>
                    <ul class="feature-list">
                        <li>Executable code</li>
                        <li>Allocated memory</li>
                        <li>System resources</li>
                        <li>Security attributes</li>
                    </ul>

                    <h3 class="subtopic">Process vs Thread</h3>
                    <table class="comparison-table">
                        <tr>
                            <th></th>
                            <th>Process</th>
                            <th>Thread</th>
                        </tr>
                        <tr>
                            <td>Memory</td>
                            <td>Independent</td>
                            <td>Shared</td>
                        </tr>
                        <tr>
                            <td>Creation Cost</td>
                            <td>High</td>
                            <td>Low</td>
                        </tr>
                        <tr>
                            <td>Communication</td>
                            <td>IPC required</td>
                            <td>Direct sharing</td>
                        </tr>
                    </table>
                </div>
            </section>

            <section class="concept-card highlight-card">
                <h2 class="concept-heading">🛡️ Dual Mode Execution</h2>
                <div class="concept-content">
                    <h3 class="subtopic">Protection Mechanism</h3>
                    <p class="concept-text">Modern CPUs support two privilege levels:</p>

                    <div class="mode-container">
                        <div class="mode-box kernel-mode">
                            <h4>Kernel Mode</h4>
                            <ul>
                                <li>Full hardware access</li>
                                <li>Privileged instructions</li>
                                <li>OS operates here</li>
                            </ul>
                        </div>
                        <div class="mode-box user-mode">
                            <h4>User Mode</h4>
                            <ul>
                                <li>Restricted access</li>
                                <li>Applications run here</li>
                                <li>System calls transition to kernel</li>
                            </ul>
                        </div>
                    </div>

                    <h3 class="subtopic">Why It Matters</h3>
                    <p class="concept-text">This separation prevents applications from crashing the system or accessing unauthorized resources.</p>
                </div>
            </section>

            <footer class="chapter-footer">
                <div class="summary-box">
                    <h3>Key Takeaways</h3>
                    <ol>
                        <li>Threads enable efficient concurrency within processes</li>
                        <li>Address spaces provide memory isolation and protection</li>
                        <li>Processes encapsulate running programs with resources</li>
                        <li>Dual mode execution ensures system stability</li>
                    </ol>
                </div>
                <p class="next-chapter">Next: <strong>Process Management and Scheduling</strong></p>
            </footer>
        </div>
    )
}

export const Page3 = () => {
    const code = `
    // Example race condition
    if (balance &gt;= amount) {  
        balance -= amount; // Danger zone! 
    } 

`;
    return (
        <div class="medium-style-container" >
            <article class="os-article">
                <header class="article-header">
                    <h1 class="article-title">Threads & Processes: The Engines of Modern Computing</h1>
                    <p class="article-subtitle">How operating systems manage parallel execution</p>
                </header>

                <section class="concept-section">
                    <h2 class="section-title">🔖 Fundamental Concepts</h2>

                    <div class="comparison-grid">
                        <div class="concept-card">
                            <h3 class="concept-title">Page Tables</h3>
                            <p>The OS's address translation system that maps virtual memory to physical memory</p>
                            <div class="analogy-box">
                                <p>Like a book's index that shows where each topic is physically located</p>
                            </div>
                        </div>

                        <div class="concept-card">
                            <h3 class="concept-title">Modern OS Architecture</h3>
                            <ul class="modern-os-features">
                                <li>Microkernel vs Monolithic</li>
                                <li>Virtualization support</li>
                                <li>Containerization</li>
                                <li>Security subsystems</li>
                            </ul>
                        </div>

                        <div class="concept-card">
                            <h3 class="concept-title">System Calls</h3>
                            <p>The interface between user applications and the OS kernel</p>
                            <table class="call-examples">
                                <tr><td>read()</td><td>File operations</td></tr>
                                <tr><td>fork()</td><td>Process creation</td></tr>
                                <tr><td>mmap()</td><td>Memory management</td></tr>
                            </table>
                        </div>
                    </div>
                </section>

                <section class="deep-dive-section">
                    <h2 class="section-title">🧵 Understanding Threads</h2>

                    <div class="definition-box">
                        <h3 class="definition-title">What Are Threads?</h3>
                        <p>The smallest sequence of programmed instructions that can be managed independently by a scheduler</p>
                    </div>

                    <div class="motivation-box">
                        <h3>Why Threads Matter</h3>
                        <div class="benefits-grid">
                            <div class="benefit">
                                <div class="benefit-icon">🚀</div>
                                <p>Responsive UIs</p>
                            </div>
                            <div class="benefit">
                                <div class="benefit-icon">⚖️</div>
                                <p>Resource efficiency</p>
                            </div>
                            <div class="benefit">
                                <div class="benefit-icon">🔄</div>
                                <p>Concurrent operations</p>
                            </div>
                        </div>
                    </div>

                    <figure class="thread-diagram">
                        <div class="process-box">
                            Process
                            <div class="thread-cluster">
                                <div class="thread">Thread 1</div>
                                <div class="thread">Thread 2</div>
                                <div class="thread">Thread 3</div>
                            </div>
                        </div>
                        <figcaption>Multiple threads within a single process</figcaption>
                    </figure>
                </section>

                <section class="parallel-section">
                    <h2 class="section-title">⚡ Parallelism vs Concurrency</h2>

                    <table class="comparison-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Parallelism</th>
                                <th>Concurrency</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Definition</td>
                                <td>Actual simultaneous execution</td>
                                <td>Apparent simultaneous execution</td>
                            </tr>
                            <tr>
                                <td>Requires</td>
                                <td>Multiple CPUs/cores</td>
                                <td>Task switching</td>
                            </tr>
                            <tr>
                                <td>Analogy</td>
                                <td>Multiple chefs cooking different dishes</td>
                                <td>Single chef switching between dishes</td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="multiprocessing-box">
                        <h3>Multiprocessing Approaches</h3>
                        <ol class="approach-list">
                            <li><strong>Symmetric (SMP):</strong> All CPUs equal, shared memory</li>
                            <li><strong>Asymmetric:</strong> Master-slave relationship</li>
                            <li><strong>NUMA:</strong> Non-uniform memory access</li>
                        </ol>
                    </div>
                </section>

                <section class="challenge-section">
                    <h2 class="section-title">⚠️ Race Conditions & Synchronization</h2>

                    <div class="warning-box">
                        <h3>The Race Condition Problem</h3>
                        <p>When multiple threads access shared data simultaneously, leading to unpredictable results</p>
                        <pre class="code-example">
                            {code}
                        </pre>
                    </div>

                    <div class="solution-cards">
                        <div class="solution-card">
                            <h4>Mutual Exclusion</h4>
                            <p>Ensuring only one thread accesses critical sections at a time</p>
                            <ul>
                                <li>Mutex locks</li>
                                <li>Semaphores</li>
                                <li>Monitors</li>
                            </ul>
                        </div>

                        <div class="solution-card">
                            <h4>Synchronization Methods</h4>
                            <table class="sync-methods">
                                <tr><td>🔒</td><td>Locking</td></tr>
                                <tr><td>🚦</td><td>Barriers</td></tr>
                                <tr><td>📮</td><td>Message passing</td></tr>
                            </table>
                        </div>
                    </div>
                </section>

                <footer class="article-footer">
                    <div class="key-takeaways">
                        <h3>Key Takeaways</h3>
                        <ul>
                            <li>Threads enable efficient concurrent execution within processes</li>
                            <li>Proper synchronization prevents race conditions</li>
                            <li>Modern OSes use sophisticated scheduling for parallelism</li>
                        </ul>
                    </div>
                    <div class="next-chapter">
                        Next: <strong>Memory Management Techniques</strong>
                    </div>
                </footer>
            </article>
        </div >
    )
}
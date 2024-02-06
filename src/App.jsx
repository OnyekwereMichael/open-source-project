import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <header>
      {/* navbar begins */}
      <section class="navbar">
        <img src="asseset/youtube.png" alt="" width="40px" />
        <div>
          <a href="">Home</a>
          <a href="">about</a>
          <a href="">marketplace</a>
          <a href="">maps</a>
        </div>

        <div>
          <button class="tricks">Tips & Tricks</button>
        </div>
      </section>


     {/* navbar end */}
      
   
 {/* header styling begins */}
    <section class="hero-sec" data-aos="zoom-in-up">
      <div>
        <h1>Web developent is for you</h1>
        <p class="lorem">
          Becoming a successful front-end developer requires a combination of
          technical skills, creativity, and a commitment to continuous learning.
          Here are ten tips to help you thrive in this dynamic field:
        </p>
        <div>
          <button class="tips">Tips & Tricks</button>
        </div>
      </div>

      <div>
        <img src="asseset/dev-removebg-preview.png" alt="" class="dev" />
      </div>
    </section>

    <section>
      <p class="ten">TEN THINGS YOU NEED TO KNOW ABOU WEB DEVELOPMENT</p>
    </section>
  </header>
  )
}

export default App

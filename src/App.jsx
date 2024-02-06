import { useState } from 'react'
import systemicon from "./assets/systemicon.png"
import system from "./assets/system.jpg"


function App() {
  return (
      <header>
        <section className='overall_header'>
      <section class="navbar">
        <img src={systemicon} alt="" width="50px" />
        <div>
          <a href="">Home</a>
          <a href="">about</a>
          <a href="">marketplace</a>
          <a href="">maps</a>
        </div>
          <button class="tricks">Tips & Tricks</button>
      </section>
 
   
    <section class="hero-sec" data-aos="zoom-in-up">
      <div>
        <h1>Web developent is for you</h1>
        <p class="lorem">
          Becoming a successful front-end developer requires a combination of
          technical skills, creativity, and a commitment to continuous learning.
          Here are ten tips to help you thrive in this dynamic field:
        </p>
        <button class="tricks">Tips & Tricks</button>
      </div>
        <img src={system} alt="" class="dev"/>
    </section>
    </section>

          <main>
            <section className='overall_main'>
                 <p>Lorem ipsum dolor, sit amet<br/> consectetur adipisicing elit.<br/> Temporibus tempore, quo faci</p>

                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus aperiam molestias quae harum provident perspiciatis amet nihil facere veritatis corrupti ab, ad atque. Consequuntur eaque sit nobis perspiciatis sed nihil!</p>
                 </section>
          </main>
  </header>
  )
}

export default App

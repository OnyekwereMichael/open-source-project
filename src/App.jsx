import { useState } from 'react'
import systemicon from "./assets/systemicon.png"
import system from "./assets/system.jpg"
import { FaCartPlus, FaMailBulk, FaTicketAlt, FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";
import { movies } from "../src/mapped";
import { motion} from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function App() {
  const conitaner = {
    hidden: {
      y: 800, opacity: 0
    },
    visible:{
      y: 0, opacity: 1,
      transition:{
        duration: 1.6, ease: "easeInOut",
      }
    }
  }
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
        <button class="tips">Tips & Tricks</button>
      </div>
        <img src={system} alt="" class="dev"/>
    </section>
    </section>

          <main>
            <section className='overall_main'>
              <img src={system} alt="" className='dev'/>
                 <div>
                   <h2>Tips to become a Dev</h2>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quae quidem in provident, adipisci minima. Dolores aperiam minima explicabo impedit reprehenderit, ratione facilis amet at obcaecati doloribus, odio alias? Porro?</p>
                   <button>Tips & Tricks</button>
                   </div>
                 </section>

                 <section>
                      <p>Sevices</p>
                 </section>

                 <section>
                 <Swiper
        className="mySwiper"
        spaceBetween={1}
        slidesPerView={1}
        breakpoints={{
          540: {
            slidesPerView: 1,
          },
          600: {
            slidesPerView: 3,
          },
          1000: {
            slidesPerView: 4,
          },
        }}
      >
        {movies.map((item, ivx) => (
          <div key={ivx}>
            <SwiperSlide>
              <div className="swipers">
                <img
                  src={item.img}
                  alt=""
                  className="services_img"
                />
                <h1>{item.name}</h1>
                <p>
                  {item.text}
                </p>
                <button>{item.button}</button>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
                 </section>
          </main>

          {/* footer stying begins */}

          <motion.footer
            variants={conitaner}
            initial= "hidden"
            whileInView= "visible"
            transition={{duration: 0.6, delay: 0.23, ease: "easeInOut"}}
            viewport={{
              once: true
            }}
    >
      <section class="white">
        <h1 class="veta mar">MetaV</h1>
        <p>
          Adipiscing at in tellus integer. Pellentesque massa<br />
          placerat duis ultricies lacus. Nisi porta lorem mollis<br />
          aliquam ut porttitor
        </p>
      </section>

      <section class="white">
        <p>About Us</p>
        <p>About MetaV</p>
        <p>Contact Us</p>
        <p>FAQS</p>
        <p>privacy Policies</p>
        <p>Terms of policies</p>
      </section>

      <section class="white">
        <p>Services</p>
        <p>NFT marketplace</p>
        <p>Virtual Concert</p>
        <p>Gaming</p>
        <p>Artwork</p>
        <p>Online Services</p>
      </section>

      <section class="white">
        <p>Contact</p>
        <span><img src="assesets/LinkedIn.svg" alt="" class="imj" /></span>
        <span><img src="assesets/Twitter Squared.svg" alt="" /></span>
        <span><img src="assesets/Instagram.svg" alt="" /></span>
        <span><img src="assesets/Facebook.svg" alt="" /></span>
        <p>2022 © MetaV.com All right reserved.</p>
      </section>
    </motion.footer>

  </header>
  )
}

export default App

import React from 'react'
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id='home'>
      <main>
        <h1>Innovate IT Solutions</h1>
        <p>Solution to all your problems</p>
      </main>
    </div>

    <div className='home2'>
        <img src={vg} alt="graphics"/>
        <div>
            <p>Welcome to Innovate IT Solutions, your gateway to cutting-edge technology and innovative IT services.
                 In an era defined by digital transformation and technological breakthroughs, Innovate IT Solutions stands at the forefront, poised to elevate your business to new heights.    </p>
        </div>
    </div>

    <div className='home3' id='about'>
        <div>
            <h1>Who we Are</h1>
            <p>At Innovate IT Solutions, we are architects of digital evolution, creators of transformative technology solutions, and champions of innovation. Our identity is rooted in a profound commitment to redefine the landscape of IT services, offering more than just solutions – we offer a vision for the future.</p>
        </div>
    </div>

    <div className='home4' id='brands'>
        <div>
            <h1>Brands</h1>
            <article>
                <div style={{
                    animationDelay:"0.3s",
                }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style={{
                    animationDelay:"0.5s",
                }}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                <div style={{
                    animationDelay:"0.7s",
                }}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
                <div style={{
                    animationDelay:"0.9s",
                }}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
            </article>
        </div>
    </div>
    </>
  )
}

export default Home

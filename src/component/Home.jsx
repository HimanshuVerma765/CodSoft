import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/Resume.pdf'
import Typed from "typed.js";


const Home = () => {
  const typedRef = useRef(null)
  useEffect(() => {

    const options = {
      strings: ["Welcom to my Portfolio", "My Name is Himanshu Verma", "I am a Web Developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    }

    const typed = new Typed(typedRef.current, options)

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <>
      <div className="conatiner home" id='home'>
        <div className="left"
          data-aos="fade-up-right"
          data-aos-duration="1000">
          <h1 ref={typedRef}>

          </h1>

          <a href={pdf} download="resume.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
        </div>
        <div className="right">
          <div className="img"
            data-aos="fade-up-left"
            data-aos-duration="1000">
            <img src={`/assets/hero/hero.avif`} alt="hero" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;
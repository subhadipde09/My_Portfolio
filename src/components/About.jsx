import React from 'react'

function About() {
  return (
    <>
      <div name="About" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-8 md:my-16'>
        <h1 className="text-xl md:text-2xl font-bold mb-5">About</h1>
        <p className="text-justify ">Hello, I'm Shubhdip De — an enthusiastic software developer with a passion for Java full stack.
          I strive to create impactful and visually appealing software solutions that leave a lasting impression.</p>
        <br></br>
        <h1 className="text-green-500 font-bold text-xl">Education</h1>
        <span className="text-justify">Bachelor of Technology (B.Tech)</span>
        <br></br>
        <span className="text-justify">Electronics and Communication Engineering</span>
        <br></br>
        <span className="text-justify">College of Engineering and Management, Kolaghat – West Bengal, India</span>
        <br></br>
        <span>CGPA: 7.58 | 2022 – 2025</span>
        <br></br>
        <h1 className="text-green-500 font-bold text-xl mt-5">Certification</h1>
        <span className="text-justify">Java Fullstack Developer Training</span>
        <br></br>
        <span classNamr='text-justify'>QSpiders | JSpiders, Kolkata – West Bengal</span>
        <br></br>
        <span>Jun 2025 - Present</span>
        <br></br>
        <h1 className="text-green-500 font-bold text-xl mt-5 text-justify">Mission Statement</h1>
        <p className="text-justify ">My mission is to leverage my skills and creativity to deliver innovative Java Full Stack solutions that exceed client
          expectations and contribute meaningfully to the digital landscape.
          I am committed to continuous learning and growth,
          always seeking new challenges and opportunities to expand my horizons as a developer.
          By combining a strong foundation in engineering with modern technologies, I aim to create impactful,
          efficient, and user-centric software that makes a difference.</p>
      </div>
      <hr></hr>
    </>
  )
}

export default About
import React from 'react'
import img from '../images/avatar.jpg'
import './body.css'

export default function Body() {
    return (
        <div className='body'>
            <img src={img} alt='' />
            <h1>Muhammad Ahsan</h1>
            <div id='divider'></div>
            <br />
            <p>As an Electrical Engineer with two years of experience in PCB test programming, I have developed a keen eye for detail and a passion for problem-solving. In addition to my role as a test programming engineer, I have also developed a software to automate the operations, which has significantly improved the efficiency and accuracy of our testing processes and reduced hours worth of time for each project.
                <br />
                <br />
                <br />
                I am a lifelong learner and believe in the importance of continuous learning, which is why I recently completed a bootcamp in MERN stack development offered by TechLift in collaboration with Contour Software. With a focus on delivering high-quality work and exceeding expectations, I am committed to making a positive impact in any role that I take on.
            </p>
        </div>
    )
}

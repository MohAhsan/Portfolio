import React from 'react'
import './footer.css'
import linkedin from '../images/linkedin.png'
import email from '../images/email.png'

export default function Footer() {
    return (
        <div id='footer'>
            <h1>Contact </h1>
            <a href='https://www.linkedin.com/in/ahsan104' target="_blank" rel="noreferrer" >
                <img src={linkedin} alt='' />
            </a>
            <a href='mailto:mo.ahsaen@gmail.com' target="_blank" rel="noreferrer">
                <img src={email} alt='' />
            </a>
        </div>
    )
}

import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='foot'>
            <div className='upperFooter'>
                <ul>
                    <p>Open Source</p>
                    {/* TODO: Add code link here */}
                    <li><a href="https://github.com/avneets2103/BlogSite">Github</a></li>
                </ul>
                <ul>
                    <p>Creator</p>
                    <li><a href="https://github.com/avneets2103">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/avneets2103/">Linkedin</a></li>
                </ul>
            </div>
            <div className="lowerFooter">
                &copy; Avneet singh
                2024
            </div>
        </div>
    )
}

export default Footer

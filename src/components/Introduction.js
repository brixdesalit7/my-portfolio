import React from 'react'

const Introduction = () => {
    const gitAnim = {
        width : "100%",
        height : "100%",
        paddingBottom : "56%",
        position : "relative"
    }
    const Iframe = {
        width: "100%",
        height : "300px"
    }
return (
    <div className='Introduction'  id="header-section">
        <div className='intro-flexbox'>
            <div className='intro-box-1'>
                <h1>Hi, I'm Bryxx</h1>
                <p>A Web Developer</p>
            </div>
            <div className='intro-box-2'>
                <iframe src="https://giphy.com/embed/26tn33aiTi1jkl6H6" 
                width="400" 
                height="300"
                frameBorder="0" 
                className="giphy-embed" 
                allowFullScreen></iframe><p></p>            
            </div>
        </div>
    </div>   
)
}

export default Introduction;
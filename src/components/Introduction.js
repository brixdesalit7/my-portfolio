import React from 'react'

const Introduction = (props) => {
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
                <img src={props.codingImg} alt="coding-image"/>
            </div>
        </div>
    </div>   
)
}

export default Introduction;
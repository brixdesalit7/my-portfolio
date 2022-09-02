import React from 'react'
import { useInView } from 'react-intersection-observer';
const Introduction = (props) => {
    const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView();
return (
    <div className='Introduction'  id="header-section">
        <div className='intro-flexbox'>
            <div className={`${'intro-box-1'} ${magicSectionIsVisible ? 'rotate-down-left' : ''}`} ref={magicSectionRef}>
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
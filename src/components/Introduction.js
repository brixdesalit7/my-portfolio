import React from 'react'
//  Intersection Observer API to tell you when an element enters or leaves the viewport
import { useInView } from 'react-intersection-observer';
const Introduction = (props) => {
    // ref : assign the element to monitor
    // inView : inView status and the current entry
    const { ref: magicSectionRef, inView: magicSectionIsVisible } = useInView();
return (
    <div className='Introduction'  id="introduction">
        <div className='intro-flexbox'>
            <div className={`${'intro-box-1'} ${magicSectionIsVisible ? 'rotate-down-left' : ''}`} ref={magicSectionRef}>
                <h1>Hi, I'm Bryxx</h1>
                <p>A Web Developer</p>
            </div>
            <div className='intro-box-2'>
                <img src={props.codingImg} alt="coding-img"/>
            </div>
        </div>
    </div>   
)
}

export default Introduction;
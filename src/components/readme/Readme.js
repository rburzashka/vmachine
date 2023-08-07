import React, {useState} from 'react';
import Requirements from './Requirements';
import ApplicationDescription from "./ApplicationDescription";

const Readme = () => {
    const [controlButton, setControlButton] = useState({isHidden: true, text: "Show readme page"});

    const handleClick = ()=>{
        setControlButton((prev)=>({
            ...prev,
            isHidden: !prev.isHidden,
            text: "Hide readme page"
        }))
    }
    return(
        <>
            <div className='btn-section'>
                <button type="button" onClick={handleClick}>
                    <span>{controlButton.text}</span>
                </button>
            </div>
            {!controlButton.isHidden && 
                <section id="container-readme" className={controlButton.isHidden ? 'hidden' : ''}>
                    <Requirements />
                    <ApplicationDescription />
                </section>
            }
            
        </>
    )
} 
export default Readme;
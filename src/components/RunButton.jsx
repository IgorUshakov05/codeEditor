import { useState } from 'react';
import style from './style/RunButton.module.css'
const Run = () => {

    let [start, setStart] = useState(false)
    return (
        <>
            <button onClick={() => setStart(!start)} className={`${style.button} ${start?style.presed:''}`}>
                Run
                {!start ?
                    <svg style={{ marginLeft: "10px", width: "20px", height: "20px" }} xmlns="http://www.w3.org/2000/svg">
                        <polygon points="5,3 5,17 15,10" fill="white" opacity="1" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: "10px", width: "20px", height: "20px" }} viewBox="0 0 50 50">
                        <circle cx="25" cy="25" r="20" stroke="white" strokeWidth="5" fill="none" strokeLinecap="round" strokeDasharray="126.92" strokeDashoffset="0">
                            <animateTransform
                                attributeName="transform"
                                type="rotate"
                                from="0 25 25"
                                to="360 25 25"
                                dur="1s"
                                repeatCount="indefinite" />
                        </circle>
                    </svg>
                }
            </button>

        </>
    );
};
export default Run;
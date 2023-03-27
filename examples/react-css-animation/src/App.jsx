import {useRef, useState} from 'react'
import useCssAnimate from 'css-animations/react';
import "./App.css"
function App() {
    const elementRef = useRef();
    const [animationName, setAnimationName] = useState('swing');
    const [duration, setDuration] = useState(1);
    const animations = useCssAnimate({elementRef, animationName, duration:`${duration}s`,deps:[animationName,duration]});
    return (
        <div className="grid">
            <h1>CSS Animations Preview (React)</h1>
            <div>
                <select onChange={(e) => {
                    setAnimationName(e.target.value)
                }
                }>
                    <option>Select animation</option>
                    {animations.map(animation => <option key={animation} value={animation}>{animation.replace("-"," ")}</option>)}
                </select>
                <input onChange={e=>setDuration(`${e.target.value}`)} title="Control Animation Speed" type="range" value={duration} min="1" max="10" name="animation-duration"/>
                <div>Adjust slider to control animation speed</div>
            </div>

            <div id={"elem"} ref={elementRef}>{animationName.replaceAll("-"," ")} will take {duration}s</div>
        </div>
    );
}

export default App

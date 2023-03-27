import { useEffect } from 'react';
import applyAnimation from '../animations';
import Animations from "../css/animate.module.css";
const useCssAnimate = ({elementRef, animationName, duration, cb, deps=[]}) => {
    useEffect(() => {
        if(!animationName)
            return;
        if (elementRef.current) {
            const key = Animations[animationName.replace(/-[a-z]/g,(str)=>str.toUpperCase().replace("-",""))]
            applyAnimation({
                element:elementRef.current,
                animationName:key,
                className:animationName,
                duration,
                callback:cb
            });
        }
    }, deps);
};

export default useCssAnimate;

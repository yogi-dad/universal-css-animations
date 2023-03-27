import applyAnimation from '../animations';

function cssAnimate({selector, animationName, duration,callback}) {
    const element = document.querySelector(selector);
    if (element) {
        applyAnimation({element, animationName, duration,callback});
    }
}

export default cssAnimate;
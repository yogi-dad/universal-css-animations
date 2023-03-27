import './css/animate.module.css';

function applyAnimation({element, animationName,className, duration = '1s', callback}) {
    element.style.animation = `${animationName} ${duration}`;
    element.classList.add(className);

    const onAnimationEnd = () => {
        element.classList.remove(className);
        element.style.animation = '';
        element.removeEventListener('animationend', onAnimationEnd);

        if (callback) {
            callback();
        }
    };
    element.addEventListener('animationend', onAnimationEnd);
}

export default applyAnimation;
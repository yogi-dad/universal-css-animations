import applyAnimation from '../animations';
import Styles from "../css/animate.module.css"
const animate = (el,binding)=>{
    const {animationName, animationDuration=1} = binding.value;
    applyAnimation({
        element: el,
        animationName: Styles[animationName.replace(/-[a-z]/g, (str) => str.toUpperCase().replace("-", ""))],
        className: animationName,
        duration: `${animationDuration}s`,
    });
}
export default {
    install(Vue) {
        Vue.directive('css-animate', {
            created(el, binding) {
                animate(el,binding)
            },
            updated(el,binding){
                animate(el,binding)
            }
        });
    },
};
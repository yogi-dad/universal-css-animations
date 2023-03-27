
import Styles from "./css/animate.module.css";

export const Animations = Array
    .from(new Set(Object
        .keys(Styles)
        .map(item => item
            .replace(/([A-Z]+)/g, str => `-${str.toLowerCase()}`))));

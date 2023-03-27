# CSS-Animations

A lightweight and easy-to-use CSS animations library for web applications.

### Table of Contents

1. [Introduction](#introduction)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Vanilla JavaScript](#vanilla-javascript)
5. [React](#react)
7. [Vue.js](#vuejs)
8. [Available Animations](#available-animations)
9. [Customization](#customization)
10. [Contributing](#contributing)
11. [License](#license)

### Introduction

CSS-Animations is a versatile library that offers a collection of pre-built CSS animations for use in web applications.
It provides seamless integration with popular frameworks such as React and Vue.js as well as compatibility
with vanilla JavaScript projects.

### Installation

To install the library, use the npm package manager:

```
npm install universal-css-animations
```

Alternatively, you can include the animations.css file in your project and link it in your HTML file:

```
<link rel="stylesheet" href="path/to/animations.css" />
```

### Usage

#### Vanilla JavaScript

Import the css-animate function:

```
import { cssAnimate } from 'universal-css-animations/vanilla';
```

Apply an animation to an element:

```
const element = document.querySelector('.your-element');
cssAnimate({
    element:element, 
    animationName:'fadeIn', 
    duration:1, //in seconds
    callbackFunction:callbackFunction
});
```

### React

Import the css-animate function:

```
import { cssAnimate } from 'universal-css-animations';
```

Apply an animation to a React component:

```
import {useRef, useState} from 'react'
import useCssAnimate from 'universal-css-animations/react';
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

```


### Vue.js
Bind the css-animate to app (main.js):
```
import { createApp } from 'vue'
import './style.css'

import App from './App.vue'
import cssAnimateDirective from "universal-css-animations/vue";

let app = createApp(App);

app.use(cssAnimateDirective);

app.mount('#app')
```
Apply an animation to a Vue component:

```
<script setup>
import {ref} from 'vue'
import {Animations as options} from "universal-css-animations";

const animationName = ref("swing");
const animationDuration = ref(1);
</script>
<template>
  <div className="grid">
    <h1>CSS Animations Preview (Vue)</h1>
    <div>
      <select @change="(e)=>animationName=e.target.value">
        <option>Select Animation</option>
        <option v-for="option in options" :value="option">
          {{ option }}
        </option>
      </select>
      <input :min="1" :max="10" :value="animationDuration" type="range" @change="e=>animationDuration=e.target.value"/>
      <div>Adjust slider to control animation speed</div>
    </div>

    <div id="elem" v-css-animate="{animationName,animationDuration}">{{ animationName }}</div>
  </div>

</template>


```

### Available Animations
Here is a list of the animations included in the library:
- fadeIn 
- fadeOut 
- slideIn 
- slideOut 
- bounce 
- rotate
...

For a complete list, please refer to the animations.css file.

### Customization
You can customize the animations by either overriding the existing CSS classes or creating your own custom animations.
Simply modify the animations.css file or create a new CSS file with your desired animation properties.

### Contributing
Contributions are welcome! If you would like to improve the library or add new animations, please follow these steps:

- Fork the repository on GitHub. 
- Clone your forked repository to your local machine. 
- Create a new branch for your changes: git checkout -b your-feature-branch-name. 
- Make your changes or additions to the codebase. Be sure to follow the existing coding style and conventions. 
- Test your changes to ensure they work as expected and do not introduce any new bugs. 
- Commit your changes, making sure to write clear and descriptive commit messages. 
- Push your changes to your forked repository on GitHub. 
- Create a pull request against the original repository, detailing the changes you made and why they are beneficial. 
- Wait for your pull request to be reviewed and merged. 

If you find any issues or have suggestions, please create an issue on the GitHub repository.

### License
CSS-Animations is licensed under the MIT License. This means you are free to use, modify, and distribute the library as
long as you include the original copyright and license notice in any copy of the software or its derivatives. For more
information, please refer to the LICENSE file in the repository.




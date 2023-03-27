<script setup>
import {ref} from 'vue'
import {Animations as options} from "css-animations";

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


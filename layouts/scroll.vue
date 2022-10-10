<script setup lang="ts">
import {ref, onMounted} from 'vue';
import gsap from "gsap";
import LocomotiveScroll from 'locomotive-scroll';
import ScrollTrigger from "gsap/ScrollTrigger";
provide('scroll', scroll);

onMounted(() => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    reloadOnContextChange: true,
    getSpeed: true,
    getDirection: true,
    offset:["15%",0]
  });

  new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"))


});
  </script>
  
  <template>
    <main class="main" data-scroll-container>
      <Nav />

      <slot />
    </main>
  </template>
  <style scoped>

   .main {
    position: relative;
  overflow: hidden;
    }

    </style>
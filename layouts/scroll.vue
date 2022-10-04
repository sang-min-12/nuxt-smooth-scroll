<script setup lang="ts">
import {ref, onMounted} from 'vue';
import gsap from "gsap";
import LocomotiveScroll from 'locomotive-scroll';
import ScrollTrigger from "gsap/ScrollTrigger";

onMounted(() => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    reloadOnContextChange: true,
  });
  scroll.on("scroller", ScrollTrigger.update)
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
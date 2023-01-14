<script setup lang="ts">
import {onMounted} from 'vue';
import LocomotiveScroll from 'locomotive-scroll';
onMounted(() => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    lerp: 0.03, // Linear Interpolation, 0 > 1 // Try 0.01
    multiplier: 1.4, // Effect Multiplier
    reloadOnContextChange: true,
    touchMultiplier: 2,
    smoothMobile: 0,
    smartphone: {
        smooth: !0,
    }
  });
  new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"))
});
</script>
  
  <template>
    <main class="main background" data-scroll-container>
        <Nav />
<slot />
    </main>
  </template>
  <style scoped>

   .main {
   position: fixed;
    }
    .background{
   background-color:#F5EFEB;
}
    </style>
<script setup lang="ts">
import LocomotiveScroll from 'locomotive-scroll';
onMounted(() => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    reloadOnContextChange: true,
  });
  provide('scroll', scroll);
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
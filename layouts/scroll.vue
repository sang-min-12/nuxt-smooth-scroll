<script setup lang="ts">
import {onMounted} from 'vue';
import LocomotiveScroll from 'locomotive-scroll';
provide('scroll', scroll);
onMounted(() => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
  });
  new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"))
});
</script>
  
  <template>
    <main class="main background" data-scroll-container>
      <div data-scroll-section>
        <Nav /><slot />
      </div>
    </main>
  </template>
  <style scoped>

   .main {
    position: relative;
  overflow: hidden;
    }
    .background{
   background-color:#F5EFEB;
}
    </style>
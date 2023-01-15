<script setup lang="ts">
import {onMounted} from 'vue';
import LocomotiveScroll from 'locomotive-scroll';
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
        <Nav />
<slot />
    </main>
  </template>
  <style scoped>
    .background{
   background-color:#F5EFEB;
}
    </style>
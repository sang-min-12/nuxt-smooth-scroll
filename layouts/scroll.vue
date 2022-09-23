<script setup lang="ts">
const scroll = ref();
provide('scroll', scroll);

  onMounted(() => {
  setTimeout(async () => {
    // @ts-ignore
    const locomotiveScroll = await import('locomotive-scroll');
    // eslint-disable-next-line new-cap
    scroll.value = new locomotiveScroll.default({
      el: document.querySelector('#main'),
      smooth: true,
      multiplier: 0.8,
    });
  }, 400);
});
onUnmounted(() => {
  scroll.value.destroy();
});
  </script>
  
  <template>
    <main class="main">
      <Nav />
      <slot />
    </main>
  </template>
  <style scoped>
    </style>
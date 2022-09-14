<template>
<div id="app">
    <NuxtLoadingIndicator />
    <VBSmooth>
    <NuxtLayout name="default">
        <NuxtPage />
     </NuxtLayout>
    </VBSmooth>
</div>
</template>
<script setup lang="ts">
   
import VBSmooth from 'vb-smooth';
import { onMounted } from 'vue';


</script>

<style scoped>
  #app{
    height: 100 vh;
    width: 100%;
    overflow: auto;
  }
</style>
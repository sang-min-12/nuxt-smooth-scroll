<template>
<div id="app">
    <NuxtLoadingIndicator />
    <NuxtLayout name="scroll">
        <NuxtPage />
     </NuxtLayout>
</div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';

import Scrollbar from 'smooth-scrollbar';


</script>

<style scoped>

</style>
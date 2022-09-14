<template>
 <div>   
    <div @mouseover="showCartItems=!showCartItems">
<h1>tekst</h1>

    </div>
   <div v-if="showCartItems">
    <h1>tekst</h1>
    </div> 
</div>   
</template>

<script setup>

const showHistory = ref([]);
const showCartItems= ref();
</script>

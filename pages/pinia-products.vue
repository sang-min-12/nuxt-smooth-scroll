<template>
  <div class="mx-auto px-20">
        <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ProductCard 
          v-for="product in products" 
          :key="product.id" 
          :product="product" 
          />
        </div>
        <div v-if="!productStore.loaded">
       ŁADOWANIE
      </div>
      <div class="mx-20 my-20" v-for="product in products" 
          :key="product.id" >
        <h1>Tekst</h1>
        {{product.title}}
      </div>
 </div>
</template>

<script setup lang="ts">

import { computed, onMounted } from 'vue'

import { useProductStore } from '../stores/products'
const productStore = useProductStore()
productStore.fetchAll()
const products = computed(() => productStore.list)


</script>

<style scoped>

</style>
<template>
        <div class="">
          <ProductCard v-for="product in products" :key="product.id" :product="product" />
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
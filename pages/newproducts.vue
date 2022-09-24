<template><div>
            <div v-if="!productState.loading">
       ŁADOWANIE
      </div>
<div v-for="product in products"  :key="product.id" >
<h1>{{product.title }}</h1>
</div>
</div></template>

<script setup lang="ts">
import {useProductNewState} from '../stores/product-new'
import {computed} from 'vue'

const productState = useProductNewState()
productState.fetchAll()
const products = computed(()=>productState.list)

</script>


<style scoped>

</style>
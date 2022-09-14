<template>
<div>
    <div v-for="(item, index) in products" :key="index">
<h1 class="text-re">{{item.title}}</h1>
{{error}}
<img :src="item.image" />
    </div>
</div>
</template>

<script setup lang="ts">
import {Product} from '@/api/types';

const {data,error} = await useFetch< Array <Product>>("https://fakestoreapi.com/products");
const products:Array<Product> = data.value; 
console.log(products)
</script>


<style scoped>

</style>
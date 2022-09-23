<template>
      <div class=" border-2 px-5 py-5 mb-12 flex relative overflow-hidden flex-col">
        <figure class="object-contain  w-full h-64 mb-7 mt-10">
          <img
            :src="product.images[0]"
            alt="Card Image"
            class="object-contain  w-full h-64"
          />
        </figure>
        <div class="flex relative overflow-hidden flex-col">
          <h2 class="font-semibold mb-4">
         <p class="hover:underline"><a :href="`${product.title}`"> {{ product.title }}</a></p>
          </h2>
          <p>{{ product.price }} zł</p>
          <div class="justify-end flex flex-wrap items-start mx-2">
            <button class="">add to card</button>
          </div>
        </div>
      </div>
  </template>
  
  <script setup lang="ts">

  import type { Product } from '../stores/products'
  defineProps<{ product: Product}>()

  </script>


<style scoped>

  </style>
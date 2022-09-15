<template>
    <Suspense>
      <template #fallback>
        <div op70 italic>
          <span animate-pulse>Загрузка данных...</span>
        </div>
      </template>
      <div class="flex flex-col justify-between border border-gray-300 rounded-xl w-full sm:w-[45%] lg:w-[28%] m-2 p-4">
        <figure class="p-6">
          <img
            :src="product.image"
            alt="Card Image"
            class="object-contain w-full h-64"
          />
        </figure>
        <div>
          <h2 class="font-semibold mb-4">
         <p><a :href="`${product.title}`"> {{ product.title }}</a></p>
          </h2>
          <p>{{ product.price }} руб</p>


        </div>
      </div>
    </Suspense>
  </template>
  
  <script setup lang="ts">
  import type { Product } from '../stores/products'
  defineProps<{
    product: Product
  }>()
  </script>
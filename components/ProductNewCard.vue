<template>
    <div class=" border-2 px-5 py-5 mb-12 flex relative overflow-hidden flex-col">
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
import {AllProducts} from 'api/types'
defineProps<{ product: AllProducts}>()

</script>

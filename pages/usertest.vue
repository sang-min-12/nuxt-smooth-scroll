<template>
<div class="mt-20 mb-32 px-20 mx-aute gap-20" data-scroll-section>
  <div class="mt-20 mb-20">
      <form>
      <label>Enter Title</label>
      <input type="text" v-model="title"/>
      <button class="ng-bt-pri" @click="update">Send Message</button>
      </form>
  {{title}}
  </div>                        
  {{data}}                                     
</div>
</template>


<script setup lang="ts">
import { $fetch } from 'ohmyfetch'
import { Input } from 'postcss';
import { ref, onMounted } from "vue";

var title = ref("");

const update = async() => await $fetch( "https://api.escuelajs.co/api/v1/products/5", {
        headers: {
           "Content-Type": "application/json",
                  },
        method: "put",
        body: ({ 
          title: title.value
         })
    });
    
const {data} = await useFetch('https://api.escuelajs.co/api/v1/products/5')
</script>
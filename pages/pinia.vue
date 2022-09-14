<template>
<div>

</div>    
</template>




<script setup lang="ts">
 import axios from 'axios';

interface iResponse {
id: number,
uid: string,
valid_card: string,
token: string,
month:string,
year:string,
ccv:string,
ccv_amex:string,
}

axios.get('https://random-data-api.com/api/stripe/random_stripe?size=5').then ((res) => { 
    res.data.forEach((element: iResponse) => {
      const {id, token} = element
      console.log(element)
    });
    console.log(arrayId(res.data))
  })

const arrayId = (arr:iResponse []):any[]=>{
  return arr.map((element)=>{
    return (element.id)
  })
}

</script>



<style scoped>

</style>

export { };

<template>
<div>
    <div class="bg-black fixed h-screen w-screen flex md:hidden" ref="m_screen_menu">
            <div class="absolute flex flex-col bottom-14 gap-4">
                    <NuxtLink to=""><h3 class="text-white" ref="m_page1">Page1</h3></NuxtLink>
                    <NuxtLink to=""><h3 class="text-white" ref="m_page2">Page1</h3></NuxtLink>
                    <NuxtLink to=""><h3 class="text-white" ref="m_page3">Page1</h3></NuxtLink>
                    <NuxtLink to=""><h3 class="text-white" ref="m_page4">Page1</h3></NuxtLink>
    </div>
    </div>


    <div class="columns-2 w-full mx-auto px-10 flex py-6">
        <div class=" z-100 text-2xl font-medium absolute text-red-800">LOGO</div>
        <div class="md:hidden flex absolute  right-10"><button ref="m_menu_button" @click="open()"><p class="text-red-800">{{msg}}</p></button></div>
        <div class="columns-4 w-full md:flex justify-end gap-12 hidden">
            <NuxtLink to=""><h3>Page1</h3></NuxtLink>
            <NuxtLink to=""><h3>Page1</h3></NuxtLink>
            <NuxtLink to=""><h3>Page1</h3></NuxtLink>
            <NuxtLink to=""><h3>Page1</h3></NuxtLink>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import gsap from 'gsap';

const m_screen_menu = ref();
const m_menu_button = ref();
const m_page1 = ref();
const m_page2 = ref();
const m_page3 = ref();
const m_page4 = ref();

if (process.client) {
  var m_header_open_animation = gsap.timeline({paused: true})
}

const msg = 'Menu'

onMounted(()=>{
m_header_open_animation.from(m_screen_menu.value,{
duration: 0.6,
opacity: 0,
display: "none",
})
.from(m_menu_button.value,{
duration: 0.6,
},"<+=0.12")
.from(m_page1.value,{
duration: 0.6,
opacity: 0,
},"<+=0.12")
.from(m_page2.value,{
duration: 0.6,
opacity: 0,
},"<+=0.12")
.from(m_page3.value,{
duration: 0.6,
opacity: 0,
},"<+=0.12")
.from(m_page4.value,{
duration: 0.6,
opacity: 0,
},"<+=0.12")

})

const open = () => {
    m_header_open_animation.reversed() ? m_header_open_animation.play() : m_header_open_animation.reverse()
    }

</script>

<style scoped>

</style>
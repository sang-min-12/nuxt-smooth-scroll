<template>
<div>
    <div class="bg-black fixed min-h-screen w-screen flex md:hidden overflow-hidden" ref="m_screen_menu">
        <div class="md:hidden flex absolute  right-5 top-4"><h3 ref="m_menu_button_close" @click="close"><p class="text-white border border-white  rounded-full px-4 py-1">Zamkij</p></h3></div>
        <div class="md:hidden flex absolute left-5 top-4" ref="m_menu_button_close" @click="close"><p class="text-white text-2xl font-mediu">LOGO</p></div>
            <div class="absolute flex flex-col mb-24 gap-4 inset-10 justify-end">
                    <NuxtLink to=""><h3 class="text-white" ref="m_page1" @click="close">Page1</h3></NuxtLink>
                    <NuxtLink to=""><h3 class="text-white" ref="m_page2" @click="close">Page2</h3></NuxtLink>
                    <NuxtLink to=""><h3 class="text-white" ref="m_page3" @click="close">Page3</h3></NuxtLink>
                    <NuxtLink to=""><h3 class="text-white" ref="m_page4" @click="close">Page4</h3></NuxtLink>
    </div>
    </div>
    <div class="columns-2 w-full mx-auto md:px-10 flex md:py-6 px-5 py-4">
        <div class="text-2xl font-medium text-black md:flex hidden" ref="logo">LOGO</div>
         <div class="text-2xl font-medium flex md:hidden  text-black" ref="m_logo">LOGO</div>
        <div class="md:hidden flex w-full justify-end"><h3 ref="m_menu_button_open" @click="open" ><p class="text-black border border-gray-200 rounded-full px-4 py-1">Menu</p></h3></div>
        <div class="columns-4 w-full md:flex justify-end gap-12 hidden">
            <NuxtLink to=""><h3 ref="d_page1">Page1</h3></NuxtLink>
            <NuxtLink to=""><h3 ref="d_page2">Page2</h3></NuxtLink>
            <NuxtLink to=""><h3 ref="d_page3">Page3</h3></NuxtLink>
            <NuxtLink to=""><h3 ref="d_page4">Page4</h3></NuxtLink>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import gsap from 'gsap';

const m_screen_menu = ref();
const m_menu_button_close = ref();
const m_menu_button_open = ref();
const m_page1 = ref();
const m_page2 = ref();
const m_page3 = ref();
const m_page4 = ref();
const m_logo = ref();
const logo = ref();

if (process.client) {
  var m_header_open_animation = gsap.timeline({paused: true})
}
if (process.client) {
  var m_header_start_animation = gsap.timeline({onComplete: changeposition})
}

    onMounted(()=>{

            m_header_open_animation.to(m_logo.value,{
                             display: "none"
                                })
                            .from(m_screen_menu.value,{
                            duration: 0.6,
                            opacity: 0,
                            display: "none",
                            })
                            .from(m_menu_button_open.value,{
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
                            },"<+=0.12");

            m_header_start_animation.from(m_logo.value,{
y: -50,
opacity: 0,
duration: 0.4,

            })

})

function changeposition (){
gsap.to(m_logo.value,{
  
})
}

const open = () => { m_header_open_animation.play();
    document.body.style.overflow = "hidden";
    document.body.style.userSelect = "none";
  }
const close = () => { m_header_open_animation.reverse();
    document.body.style.overflow = "auto";
    document.body.style.userSelect = "auto"; 
 }

</script>

<style scoped>
.logocolor{
color: 'black';
}
</style>
<template>
    <div @scroll="scrollHandle"
        class=" hero-bg h-50 md:h-screen lg:h-screen bg-black w-screen items-center text-[#10e956] md:flex-row lg:flex-row flex-col  flex justify-center sm:flex-col md:flex-row lg:flex-row ">
        <div class="max-w-[500px]  md:border-r-4 lg:border-r-4 hero-left border-main-color pl-3 py-4 mt-[2rem] md:mt-5">
            <h1 class="text-3xl mb-4 font-monton hero-h1">Than Htike Zaw ;</h1>
            <p class="text-2xl font-jose">Passionate Web Developer | Creative Thinker | Problem Solver</p>
            <button
                class="bg-black text-main-color border-main-color border hero-btn mt-4 p-2 hover:bg-main-color hover:text-black">Read
                More</button>
        </div>
        <div class="hero-right">
            <img class="hidden sm:block md:block lg:block" src="../assets/hero.png " style="height: 350px;" alt="" />
        </div>
    </div>
</template>

<script setup>
import { defineProps, ref, onMounted } from 'vue';
const scrollSet = ref(false)
onMounted(() => {

    window.addEventListener('scroll', scrollHandle)

})
let scrollHandle = (event) => {
    console.log(window.innerHeight)
    console.log(window.outerHeight)

}
const props = defineProps({
    name: {
        type: String,

    }
})
</script>

<style>
@keyframes heroBtn {
    0% {
        scale: 1;
    }

    50% {
        scale: 1.2;
    }

    100% {
        scale: 1;
    }

}

.hero-btn {
    animation-name: heroBtn;
    animation-duration: 1s;
    animation-iteration-count: infinite;

}

@keyframes myAnim {
    0% {
        opacity: 0;
        transform: translateX(-250px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes myAnim2 {
    0% {
        opacity: 0;
        transform: translateX(250px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.hero-left {
    animation: myAnim 3s ease 0s 1 normal forwards;
}

.hero-right {
    animation: myAnim2 3s ease 0s 1 normal forwards;
}
</style>

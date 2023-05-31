<template>
    <div class="flex flex-col justify-center text-main-color">
        <h2 class="text-4xl text-center py-5">My Projects</h2>
        <div
            class="flex flex-col md:flex-row lg:flex-row sm:flex-col  sm:justify-center md:justify-around  lg:justify-around  mx-auto space-x-0 md:space-x-4 lg:space-x-5">

            <div class="flex flex-col p-5 ">
                <h1 class="text-center text 2xl bg-main-color text-black">POS</h1>
                <div class="relative overflow-hidden group" style="width: 400px;">
                    <img src="../assets/project1.png" alt="">
                    <div
                        class="absolute w-full h-full left-0 flex flex-col justify-center items-center bg-black/50 bottom-72 group-hover:bottom-0 transition-all ">
                        <div class="flex flex-col items-center ">
                            <h1 class="text-main-color font-bold ">POS Website Made by Vue.js and
                                Laravel</h1>
                            <a href="http://www.posclient.zcoder.cloud"
                                class="text-main-color my-3 border border-main-color text-center btn relative z-100">
                                <span class="relative z-10">visit</span>

                            </a>

                        </div>
                    </div>
                </div>


            </div>
            <div class="flex flex-col p-5 ">
                <h1 class="text-center text 2xl bg-main-color text-black">Pizza Order System</h1>
                <div class="relative overflow-hidden group" style="width: 400px;">
                    <img src="../assets/project2.png" alt="">
                    <div
                        class="absolute w-full h-full left-0 flex flex-col justify-center items-center bg-black/50 bottom-72 group-hover:bottom-0 transition-all ">
                        <div class="flex flex-col items-center ">
                            <h1 class="text-main-color font-bold ">Pizza Order System</h1>
                            <a href="http://www.pizza.zcoder.cloud"
                                class="text-main-color my-3 border border-main-color text-center btn relative z-100">
                                <span class="relative z-10">visit</span>

                            </a>

                        </div>
                    </div>
                </div>


            </div>


        </div>
    </div>
</template>

<script setup>

</script>

<style >
.btn {
    position: relative;
    width: 40%;
    overflow: hidden;
    z-index: 100;
    transition: all;
}

.btn::before,
.btn::after {
    content: '';
    position: absolute;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 0%;
    background: black;
    opacity: 0;
    color: #10e956;
    transition: ease-in 200ms;
}

.btn::before {
    bottom: -50%;
}

.btn::after {
    top: -50%;
}

.btn:hover::before,
.btn:hover::after {
    height: 100%;
    opacity: 1;
}
</style>



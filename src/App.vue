<script setup>
import { ref } from 'vue';
import Hero from './components/Hero.vue'
import Skill from './components/Skill.vue'
import MyProjects from './components/MyProjects.vue'
import AboutMe from './components/AboutMe.vue'
import Contact from './components/Contact.vue'
let name = ref('than htike zaw')
</script>

<template>
    <div class="bg-black h-screen overflow-y-scroll scroll-smooth">
        <nav class="bg-[#10e956] ">
            <div class="flex justify-between p-3 items-center ">
                <h2 class="text-lg">THZ</h2>
                <ul class="list-none flex space-x-6">
                    <li class="cursor-pointer hover:underline"><a href="#myProjects">My Projects</a></li>
                    <li class="cursor-pointer hover:underline"><a href="#aboutMe">About Me</a></li>
                    <li class="cursor-pointer hover:underline"><a href="#contactMe">Contact Me</a></li>

                </ul>
            </div>
        </nav>
        <Hero :name="name" />
        <Skill />
        <MyProjects id="myProjects" />
        <AboutMe id="aboutMe" />
        <div id="contactMe">
            <Contact />
        </div>
        <footer class="mt-12 bg-main-color text-black h-20 items-center flex justify-center">
            <h1 class="text-center">@Copy right By Than Htike Zaw</h1>
        </footer>
    </div>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

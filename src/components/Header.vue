<script setup>
import { RouterLink, RouterView } from "vue-router";
import Logo from "./Logo.vue";
</script>

<template>
    <header>
        <div class="bg-[#222] text-white">
            <div class="flex justify-between px-4 py-4">
                <div>
                    <RouterLink to="/Projet">Projet</RouterLink>
                </div>
                <div>
                    <RouterLink to="/"><Logo></Logo></RouterLink>
                </div>
                <div>
                    <RouterLink to="/Contact">Contact</RouterLink>
                </div>
            </div>
            <hr class="bg-gradient-to-r from-red-600 to-white " />
        </div>
    </header>
</template>
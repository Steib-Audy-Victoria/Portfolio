<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <header>
        <div class="bg-[#222] text-white">
            <div class="flex justify-between px-4 py-4">
                <div>
                    <RouterLink to="/Projet">Projet</RouterLink>
                </div>
                <div>
                    <h1><RouterLink to="/">LOGO</RouterLink></h1>
                </div>
                <div>
                    <RouterLink to="/Contact">Contact</RouterLink>
                </div>
            </div>
            <hr class="bg-gradient-to-r from-red-600 to-white " />
        </div>
    </header>
</template>
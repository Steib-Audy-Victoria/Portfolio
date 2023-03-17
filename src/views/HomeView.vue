<script setup>
import { RouterLink } from 'vue-router';
import LogoG from "../components/LogoG.vue";
</script>
<template>
    <div class="text-sm breadcrumbs pl-1">
        <ul>
            <li>
                <RouterLink to="#">Accueil</RouterLink>
            </li>
        </ul>
    </div>

    <section class="grid grid-cols-1 md:grid-cols-2 place-items-center py-40">
        <div>
            <LogoG></LogoG>
        </div>
        <div class="text-center">
            <p class="text-xl font-bold">Victoria Steib-Audy</p>
            <p>Étudiante en 2ème année du BUT Métier du Multimédia et de l'Internet </p>
        </div>

    </section>

    <section class="py-10">
        <h2 class="text-center font-bold text-xl">Présentation de mes projets :</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 place-items-center">

            <!--Projet Plume-->
            <div class="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="../assets/Plume.jpg" alt="Illustration du projet Plume" /></figure>
                <div class="card-body">
                    <h2 class="card-title">Plume</h2>
                    <p>Projet collectif, création d'une landing page et d'une application web.</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary">
                        <RouterLink to="/Plume">Voir plus</RouterLink>
                    </button>
                    </div>
                </div>
            </div>

            <!--Projet jpo-->
            <div class="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="../assets/Photo_IUT.webp" alt="Photo du départemenbt MMI de Montbéliard" /></figure>
                <div class="card-body">
                    <h2 class="card-title">JPO MMI</h2>
                    <p>Organisation de la Journée porte ouverte du département MMI de Montbéliard.
                            Avec maquettage et création du site web.</p>
                    <div class="card-actions justify-end">
                    <button class="btn btn-primary">
                        <RouterLink to="/JPO">Voir plus</RouterLink>
                    </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center items-center py-4">
            <button class="border border-white p-2 font-bold ">
                <RouterLink to="/Projet">Voir plus de projets</RouterLink>
            </button>
        </div>
    </section>
</template>

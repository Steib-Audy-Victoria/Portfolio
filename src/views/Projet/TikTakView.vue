<template>
    <div class="text-sm breadcrumbs pl-1">
        <ul>
            <li>
                <RouterLink to="/">Accueil</RouterLink>
            </li>
            <li>
                <RouterLink to="/Projet">Projet</RouterLink>
            </li>
            <li>
                <RouterLink to="/TikTak">Tik Tak</RouterLink>
            </li>
        </ul>
    </div>

    <div>
        <h1 class="text-center font-bold text-6xl">Tik Tak</h1>
        <div class="flex justify-center">
            <img class="py-10 w-10/12 " src="../../assets/LogoTikTak.png" alt="">
        </div>
    </div>

    <section>
        <h2 class="text-2xl pl-10">Présentation du projet</h2>
        <div class="pl-5 py-2">
            <p>Site réaliser lors d'une SAÉ (examen) dans le cadre de ma formation, lors du troisième semestre.</p>
            <p>L'objectif de ce site étant de personnaliser une montre connectée, avec inscription, connexion et enregistrement de la personnalisation des montres.</p>
            <p> </p>
        </div>
    </section>

    <section class="my-10 ">
        <div>
            <h2 class="text-2xl pl-10 py-2">Réalisation de la maquette du site Tik Tak</h2>
            <div class="pl-5 ">

            </div>
        </div>

        <div class="flex justify-center ">
            <img src="../../assets/MaquetteTikTak.png" alt="Maquette du site Tik Tak">
        </div>
    </section>

    <section class="my-10 ">
        <h2 class="text-2xl pl-10 py-2">Réalisation du site Tik Tak</h2>
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="bg-base-200/10 flex flex-col justify-center items-center">
                <div class="pl-5 ">
                    <p>Ce projet à été réaliser à l'aide du Framework VueJS, pour la création de l'interface du site web, et du Framework CSS Tailwind. </p>
                    <p>Le backend utiliser pour ce projet est Supabase, pour l'inscription, la connection et l'enregistrement de la personnalisation.</p>
                    <div class="flex justify-center items-center py-4 ">
                        <img class="w-24" src="../../assets/vuejs.png" alt="Logo du Framework VueJS">
                        <img class="w-32" src="../../assets/tailwindCss.svg" alt="Logo du Framework Tailwind CSS">
                        <img class="w-32" src="../../assets/Supabase.png" alt="Logo du backend Supabase">
                    </div>
                </div>
            </div>
            <div class="mockup-window border bg-base-300">
                <div class="flex justify-center  bg-base-200">
                    <img src="../../assets/SiteTikTakAccueil.png" alt="mockup du site Tik Tak">
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2">

            <div class="mockup-window border bg-base-300">
                <div class="flex justify-center  bg-base-200">
                    <img src="../../assets/SiteTikTak.png" alt="mockup du site Tik Tak">
                </div>
            </div>

            <div class="flex flex-col justify-center items-center px-3">
                <p>L'objectif de la création de ce site est la personnalisation, et l'enregistrement de cette personnalisation, via un back-end.</p>
                <p>Supabase permet la création d'un tableau d'enregistrement de donnée.</p>
            </div>
        </div>

        <div class="flex flex-col text-center text-xl py-10">
            <a href="https://github.com/MMI-SAE-301/sae-301-2022-Steib-Audy-Victoria" target="_blank" class="underline hover:text-purple-500 hover:no-underline">Lien vers le repository Github du site Tik Tak</a>
            <a href="https://tiktak.steib-audy.fr" target="_blank" class="underline hover:text-purple-500 hover:no-underline">Lien vers le site Tik Tak</a>
        </div>
    </section>

</template>
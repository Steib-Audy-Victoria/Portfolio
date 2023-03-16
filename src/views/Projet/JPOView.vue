
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
                <RouterLink to="/JPO">JPO</RouterLink>
            </li>
        </ul>
    </div>

    <div>
        <h2 class="text-center font-bold text-6xl">Journée Porte Ouverte</h2>
        <div class="flex justify-center">
            <img class="py-10 w-10/12 " src="../assets/Photo_IUT.webp" alt="">
        </div>
    </div>

    <section>
        <h3 class="text-2xl pl-10">Présentation du projet</h3>
        <div class="pl-5 py-2">
            <p>L'organisation de la Journée Porte Ouverte, du département MMI de montbéliard, est un projet réalisé lors du troisième semestre de ma formation en BUT MMI.</p>
            <p> Ce projet était un projet collectif.</p>
            <p>L'objectif de ce projet était d'organiser la journée portes ouvertes du département MMI se trouvant à l'IUT Nord Franche-Comté. </p>
        </div>
    </section>

    <section class="my-10 bg-base-200/10">
        <h3 class="text-2xl pl-10 py-2">Réalisation du site de la JPO</h3>
        <div class="pl-5">
            <p>Ce projet à été réaliser à l'aide du Framework VueJS, pour la création de l'interface du site web, et du Framework CSS Tailwind. </p>
            <p>Le backend utiliser pour ce projet est Supabase.</p>
            <div class="flex justify-center items-center py-4 ">
                <img class="w-24" src="../assets/images/vuejs.png" alt="Logo du Framework VueJS">
                <img class="w-32" src="../assets/images/tailwindCss.svg" alt="Logo du Framework Tailwind CSS">
                <img class="w-32" src="../assets/images/Supabase.png" alt="Logo du backend Supabase">
            </div>
        </div>
        <div class="mockup-window border bg-base-300">
            <div class="flex justify-center  bg-base-200">
                <img src="../assets/accueil_jpo.png" alt="mockup du site de la jpo">
            </div>
        </div>
    </section>

    <div class="py-10">
        <div class="flex flex-col text-center text-xl">
            <p>Voici le liens vers le site de la JPO : </p>
            <a href="https://jpo-mmi.steib-audy.fr" target="_blank" class="underline"> Site de la JPO</a>
        </div>
    </div>
</template>
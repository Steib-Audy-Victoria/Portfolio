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
                <RouterLink to="/Festival">Festival</RouterLink>
            </li>
        </ul>
    </div>

    <div>
        <h1 class="text-center font-bold text-6xl">Festival</h1>
        <div class="flex justify-center">
            <img class="py-10 w-10/12 " src="../../assets/LogoFestival.png" alt="Logo du projet festival">
        </div>
    </div>

    <section>
        <h2 class="text-2xl pl-10">Présentation du projet</h2>
        <div class="pl-5 py-2">
            <p>Site réaliser lors d'une SAÉ (examen) dans le cadre de ma formation, lors du deuxième semestre.</p>
            <p>L'objectif était de créer un site pour un festival de musique, avec présentation du lieu, des artistes, des concerts, du programme, des dates et des heures.</p>
            <p>Sur le site, il y avait la possibilité de créer, de modifier ou de supprimer les fiches des concerts et des artistes.</p>
        </div>
    </section>

    <section class="my-10 ">
        <div>
            <h2 class="text-2xl pl-10 py-2">Réalisation des maquettes du site du Festival</h2>
            <div class="pl-5 ">

            </div>
        </div>

        <div class="flex justify-center ">
            <img src="../../assets/MaquetteOrdiFestival.png" alt="Maquette du site Festival - version ordinateur">
        </div>

        <div class="flex justify-center  pt-10">
            <img src="../../assets/MaquetteMobileFestival.png" alt="Maquette du site Festival - version téléphone">
        </div>
    </section>

    <section class="my-10 ">
        <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="bg-base-200/10 flex flex-col justify-center items-center">
                <h2 class="text-2xl pl-10 py-2">Réalisation du site Festival</h2>
                <div class="pl-5 ">
                    <p>Ce projet à été réaliser à l'aide du Framework VueJS, pour la création de l'interface du site web, et du Framework CSS Tailwind. </p>
                    <p>Le backend utiliser pour ce projet est Firebase, pour la création, la modification et la suppression des fiche artiste et concerts</p>
                    <div class="flex justify-center items-center py-4 ">
                        <img class="w-24" src="../../assets/vuejs.png" alt="Logo du Framework VueJS">
                        <img class="w-32" src="../../assets/tailwindCss.svg" alt="Logo du Framework Tailwind CSS">
                        <img class="w-32" src="../../assets/firebase.png" alt="Logo du backend Firebase">
                    </div>
                </div>
            </div>
            <div class="mockup-window border bg-base-300">
                <div class="flex justify-center  bg-base-200">
                    <img src="../../assets/FestivalAccueil.png" alt="mockup du site du Festival">
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2">

            <div class="mockup-window border bg-base-300">
                <div class="flex justify-center  bg-base-200">
                    <img src="../../assets/FestivalArtiste.png" alt="mockup du site du Festival">
                </div>
            </div>

            <div class="flex flex-col justify-center items-center px-3">
                <p>L'objectif de la création de ce site est la création, la modification et la suppression, via un back-end, les fiches des artistes et des concerts.</p>
                <p>Firebase permet l'enregistrement de ces données.</p>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2">

            <div class="bg-base-200/10 flex flex-col justify-center px-3">
                <p>L'objectif de cette SAE, était d'innover, en créant un festival, avec les concerts et les artistes.</p>
                <p>Et de créer une identité graphique pour ce festival.</p>
                <p>Mais également de mettre en pratique la création d'un site avec un framework et avec un back-end.</p>

            </div>

            <div class="mockup-window border bg-base-300">
                <div class="flex justify-center  bg-base-200">
                    <img src="../../assets/FestivalProgramme.png" alt="mockup du site du Festival">
                </div>
            </div>

        </div>

        <div class="flex flex-col text-center text-xl py-10">
            <a href="https://github.com/Steib-Audy-Victoria/Festival" target="_blank" class="underline hover:text-purple-500 hover:no-underline">Lien vers le repository Github du site du Festival</a>
            <a href="https://sae203-festival.netlify.app" target="_blank" class="underline hover:text-purple-500 hover:no-underline">Lien vers le site du Festival</a>
        </div>
    </section>

</template>
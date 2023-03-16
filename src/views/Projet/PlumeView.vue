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
                <RouterLink to="/Plume">Plume</RouterLink>
            </li>
        </ul>
    </div>

    <div>
        <h2 class="text-center font-bold text-6xl">Plume</h2>
        <div class="flex justify-center">
            <img class="py-10 w-10/12 " src="./assets/Plume.jpg" alt="">
        </div>
    </div>

    <section>
        <h3 class="text-2xl pl-10 py-10">Présentation du projet</h3>
        <div class="pl-5">
            <p>Plume est un projet réalisé lors du second semestre de ma formation en BUT MMI.</p>
            <p>Le projet Plume est une plateforme sur laquelle tout utilisateur pourra voir son dessin ou celui d’un proche transformer en réelle œuvre d’art par des artistes présents sur la plateforme. 
                Elle met en relation client et artiste, le client recevra son dessin transformé selon des critères qu’il aura définis au préalable avec l’artiste, lors du paiement. </p>
        </div>

        <div class="grid grid-cols-1 xl:grid-cols-2">
            <div class=" m-2 mx-5 py-2 bg-base-200/10 flex flex-col justify-center items-center gap-8">
                <h4 class="text-center">Présentation du logo : </h4>
                <div class="flex justify-around gap-12"> 
                    <img class="w-24" src="./assets/Logo_Plume_Blanc.svg" alt="Logo du projet Plume version Blanc">
                    <img class="w-24" src="./assets/Logo_Plume_Couleur.svg" alt="Logo du projet Plume version Couleur">
                    <img class="w-24" src="./assets/Logo_Plume_Noir.svg" alt="Logo du projet Plume version Noir">
                </div>
            </div>
            <div class=" m-2 mx-5 py-2 bg-base-200/10">
                <h4 class="text-center">Présentation de la mascotte : </h4>
                <div class="pt-2 flex justify-center"> 
                    <img src="./assets/phenix2.svg" alt="Mascotte du projet Plume - Phénix">

                </div>
            </div>
        </div>
    </section>

    <section class="pt-10">
        <h3 class="text-2xl pl-10 py-10" >Landing Page</h3>
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-3">
            <div class="mockup-window border bg-base-300">
                <div class="flex justify-center  bg-base-200">
                <img src="./assets/LP_Plume_1.png" alt="Landing page du projet Plume">
                </div>
            </div>
            <div class="flex flex-col justify-center items-center text-center bg-base-200/10">
                <p>La landing page du projet plume à été crée en :</p>
                <div class="flex justify-center items-center py-4">
                    <img class="w-1/2" src="./assets/images/HTML_CSS_JS.png" alt="">
                </div>
            </div>

        </div>
    </section>

    <section class="pt-10">
        <h3 class="text-2xl pl-10 py-10">Application web</h3>

        <div class="grid grid-cols-1 xl:grid-cols-2 gap-3 place-items-center">
            <div>
                <p>Page d'accueil :</p>
                <div class="mockup-phone">
                    <div class="camera"></div> 
                    <div class="display">
                        <div class="artboard artboard-demo phone-1">
                            <img src="./assets/AppPlume_1.png" alt="Application du projet Plume">
                        </div>
                    </div>
                </div>         
            </div>
            <div class="flex flex-col justify-center items-center bg-base-200/10 w-full h-full">
                <p>L'application web du projet plume à été crée en :</p>
                <div class="flex justify-center items-center py-4">
                    <img class="w-32" src="./assets/images/vuejs.png" alt="Logo du Framework VueJS">
                    <img class="w-32" src="./assets/images/tailwindCss.svg" alt="Logo du Framework Tailwind Css">
                    <img class="w-32" src="./assets/images/firebase.png" alt="Logo du backend Firebase">

                </div>
            </div>
        </div>
    </section>

    <div class="py-10">
        <div class="flex flex-col text-center text-xl">
            <p>Voici les liens vers les sites : </p>
            <a href="https://plume.steib-audy.fr" target="_blank" class="underline">Landing Page de Plume</a>
            <a href="https://plume-app.steib-audy.fr" target="_blank" class="underline">Application Mobile Web - Plume</a>
        </div>
    </div>
</template>
<template>
    <div class="text-sm breadcrumbs pl-1">
        <ul>
            <li>
                <RouterLink to="/">Accueil</RouterLink>
            </li>
            <li>
                <RouterLink to="/Projet">Projet</RouterLink>
            </li>
        </ul>
    </div>

    <div class="py-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center min-h-screen">

        <!--Projet Plume-->
        <div class=" m-2 card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="../assets/Plume.jpg" alt="Illustration du projet Plume" /></figure>
            <div class="card-body text-black">
                <h2 class="card-title">Plume</h2>
                <p>Projet collectif, création d'une landing page et d'une application web.</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">
                        <RouterLink to="/Plume">Voir plus</RouterLink>
                    </button>
                </div>
            </div>
        </div>

        <!--Projet JPO-->
        <div class="m-2 card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="../assets/Photo_IUT.webp" alt="Photo du département MMI de Montbéliard" /></figure>
            <div class="card-body text-black">
                <h2 class="card-title">JPO MMI</h2>
                <p>Organisation de la Journée porte ouverte du département MMI de Montbéliard.
                    Avec maquettage et création du site web.
                </p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">
                        <RouterLink to="/JPO">Voir plus</RouterLink>
                    </button>
                </div>
            </div>
        </div>

        <!--Projet Tik Tak-->
        <div class="m-2 card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="../assets/LogoTikTak.png" alt="Logo du projet TikTak" /></figure>
            <div class="card-body text-black">
                <h2 class="card-title">Tik Tak </h2>
                <p>Site de personalisation de montre connecter.</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">
                        <RouterLink to="/TikTak">Voir plus</RouterLink>
                    </button>
                </div>
            </div>
        </div>

        <!--Projet Festival-->
        <div class="m-2 card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="../assets/LogoFestival.png" alt="Logo du projet festival" /></figure>
            <div class="card-body text-black">
                <h2 class="card-title">Festival </h2>
                <p>Site pour un festival électronique.</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">
                        <RouterLink to="/Festival">Voir plus</RouterLink>
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>

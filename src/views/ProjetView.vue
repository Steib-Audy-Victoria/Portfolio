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

    <div class="py-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center">

        <!--Projet Plume-->
        <div class=" m-2 card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="src/assets/images/Plume/Plume.jpg" alt="Illustration du projet Plume" /></figure>
            <div class="card-body text-black">
                <h2 class="card-title">Plume</h2>
                <p>Projet collectif, création d'une landing page et d'une application web.</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-neutral">
                        <RouterLink to="/Plume">Voir plus</RouterLink>
                    </button>
                </div>
            </div>
        </div>

        <!--Projet JPO-->
        <div class="m-2 card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="src/assets/images/JPO/Photo_IUT.webp" alt="Photo du départemenbt MMI de Montbéliard" /></figure>
            <div class="card-body text-black">
                <h2 class="card-title">JPO MMI</h2>
                <p>Organisation de la Journée porte ouverte du département MMI de Montbéliard.
                    Avec maquettage et création du site web.
                </p>
                <div class="card-actions justify-end">
                    <button class="btn btn-neutral">
                        <RouterLink to="/JPO">Voir plus</RouterLink>
                    </button>
                </div>
            </div>
        </div>


        <div class="m-2 card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="/images/imgProjet.jpg" alt="Shoes" /></figure>
            <div class="card-body text-black">
                <h2 class="card-title">Nom Projet</h2>
                <p>Description projet</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-neutral">
                        <RouterLink to="#">Voir plus</RouterLink>
                    </button>
                </div>
            </div>
        </div>
        <div class="m-2 card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="/images/imgProjet.jpg" alt="Shoes" /></figure>
            <div class="card-body text-black">
                <h2 class="card-title">Nom Projet</h2>
                <p>Description projet</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-neutral">
                        <RouterLink to="#">Voir plus</RouterLink>
                    </button>
                </div>
            </div>
        </div>
        <div class="m-2 card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src="/images/imgProjet.jpg" alt="Shoes" /></figure>
            <div class="card-body text-black">
                <h2 class="card-title">Nom Projet</h2>
                <p>Description projet</p>
                <div class="card-actions justify-end">
                <button class="btn btn-neutral">
                    <RouterLink to="#">Voir plus</RouterLink>
                </button>
            </div>
        </div>
    </div>
</div></template>

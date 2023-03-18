<template>
    <div class="text-sm breadcrumbs pl-1">
        <ul>
            <li>
                <RouterLink to="/">Accueil</RouterLink>
            </li>
            <li>
                <RouterLink to="/Contact">Contact</RouterLink>
            </li>
        </ul>
    </div>

    <section class="py-32">
        <form class="flex flex-col gap-10 justify-center items-center border-2 border-white p-10 mx-40" action="https://api.web3forms.com/submit" method="POST">

            <input type="hidden" name="access_key" value="7910f823-6521-4306-bedd-b21809468bc9">

            <p class="text-center font-semibold text-xl">Vous pouvez me contacter ici !</p>

            <input class="w-1/2 px-2 placeholder:text-black bg-gray-100 text-purple-900" type="text" name="name" placeholder="Votre prénom et/ou nom" required>
            <input class="w-1/2 px-2 placeholder:text-black bg-gray-100 text-purple-900" type="email" name="email" placeholder="Votre adresse-mail" required>
            <textarea class="w-1/2 px-2 placeholder:text-black bg-gray-100 text-purple-900" name="message" placeholder="Votre message" required></textarea>


            <input type="hidden" name="redirect" value="https://web3forms.com/success">

            <button class="border border-white p-2 font-bold " type="submit">Envoyer</button>

        </form>
    </section>
</template>
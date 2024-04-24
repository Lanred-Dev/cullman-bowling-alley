<script lang="ts">
    const LINKS = [
        {
            name: "Home",
            url: "",
        },
        {
            name: "About",
            url: "",
        },
        {
            name: "Hours and Rates",
            url: "",
        },
        {
            name: "Contact and Reservations",
            url: "",
        },
        {
            name: "Valley Tavern and Grille",
            url: "",
        },
    ];
</script>

<header class="flex w-full select-none flex-col items-center justify-center gap-4 bg-transparent py-12">
    <p class="text-3xl font-bold">Cullman Bowling Center</p>

    <nav class="flex list-none gap-8 text-base font-medium text-black">
        {#each LINKS as link}
            <li><a href={link.url} class="text-lg">{link.name}</a></li>
        {/each}
    </nav>
</header>

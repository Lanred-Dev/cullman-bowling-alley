<script lang="ts">
    const SOCIALS = [
        {
            name: "Facebook",
            icon: "/icons/facebook.svg",
            url: "https://www.facebook.com/CullmanBowlingCenter/",
        },
        {
            name: "Valley Tavern And Grill",
            icon: "/icons/valleyTavernAndGrill.webp",
            url: "https://valleytavernandgri.wixsite.com/cullman",
        }
    ];
</script>

<footer class="flex flex-col w-screen items-center justify-between px-36 py-24 text-lg font-semibold bg-dark text-light mt-12 gap-12">
    <nav class="flex list-none gap-8 text-base font-medium">
        {#each SOCIALS as social}
            <a href={social.url}><img src={social.icon} alt={social.name} class="aspect-square w-10" /></a>
        {/each}
    </nav>

    <div>
        <p><span class="text-light-950">©2024</span> Cullman Bowling Center</p>
        <p class="mt-0.5"><span class="text-light-950">Developed by</span> <a href="https://github.com/Lanred-Dev">Landon Redmond</a></p>
    </div>
</footer>

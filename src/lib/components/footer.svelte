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

<footer class="flex flex-col w-screen items-center justify-between px-36 py-24 mt-12 gap-8">
    <nav class="flex list-none gap-3 text-base font-medium">
        {#each SOCIALS as social}
            <a href={social.url} class="p-3 bg-secondary-700 rounded-full"><img src={social.icon} alt={social.name} class="aspect-square w-6" /></a>
        {/each}
    </nav>

    <div class="flex gap-4 font-semibold">
        <p>©2024 Cullman Bowling Center</p>
        <p>Design by <a href="https://github.com/Lanred-Dev">Landon Redmond</a></p>
    </div>
</footer>

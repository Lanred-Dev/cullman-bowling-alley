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
        },
    ];
</script>

<footer class="mt-12 flex w-screen flex-col items-center justify-between gap-8 px-3 py-12 md:py-24">
    <nav class="flex list-none gap-3 text-base font-medium">
        {#each SOCIALS as social}
            <a href={social.url} class="rounded-full bg-secondary-700 p-3"><img src={social.icon} alt={social.name} class="aspect-square w-6" /></a>
        {/each}
    </nav>

    <div class="flex flex-col gap-2 font-semibold md:flex-row md:gap-4">
        <p>©2024 Cullman Bowling Center</p>
        <p>Design by <a href="https://github.com/Lanred-Dev">Landon Redmond</a> & Kimberly Wilt</p>
    </div>
</footer>

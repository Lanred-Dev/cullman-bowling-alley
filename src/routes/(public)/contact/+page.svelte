<script lang="ts">
    import Hero from "$lib/components/infoPage/hero.svelte";

    import Location from "$lib/pages/contact/location.svelte";
    import Info from "$lib/pages/contact/info.svelte";
</script>

<Hero title="Get in Touch" description="Got a question or ready to plan your birthday bash? Reach out to us here! We're here to assist with any inquiries or requests you may have. Get in touch today!" mini={true} />

<div class="grid grid-cols-1 grid-rows-2 px-4 sm:px-[4%] md:grid-cols-2 md:grid-rows-1 md:px-[9%] lg:px-[15%]">
    <Location />
    <Info />
</div>

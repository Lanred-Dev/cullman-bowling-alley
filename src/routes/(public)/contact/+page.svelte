<script lang="ts">
    import Hero from "$lib/components/infoPage/hero.svelte";

    import Location from "$lib/pages/contact/location.svelte";
</script>

<Hero title="Contact Us" mini={true} />

<div class="grid grid-cols-1 grid-rows-1">
    <Location />
</div>

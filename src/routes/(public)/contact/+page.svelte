<script lang="ts">
    import Hero from "$lib/components/infoPage/hero.svelte";

    import Location from "$lib/pages/contact/location.svelte";
    import Info from "$lib/pages/contact/info.svelte";
    import Form from "$lib/pages/contact/form.svelte";
</script>

<Hero title="Contact Us" mini={true} />

<div class="grid grid-cols-1 grid-rows-3 px-4 sm:px-[4%] md:grid-cols-3 md:grid-rows-1 md:px-[9%] lg:px-[15%]">
    <Location />
    <Info />
    <Form />
</div>

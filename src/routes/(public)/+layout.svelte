<script lang="ts">
    import Header from "$lib/header.svelte";
    import Footer from "$lib/footer.svelte";
</script>

<div class="pageViewport h-screen w-full overflow-x-hidden overflow-y-scroll">
    <Header />

    <main class="h-fit w-full">
        <slot />
    </main>

    <Footer />
</div>

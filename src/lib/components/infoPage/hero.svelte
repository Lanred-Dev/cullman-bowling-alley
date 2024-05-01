<script lang="ts">
    import HeroBackground from "../heroBackground.svelte";

    export let title: string;
    export let description: string = "";
    export let actions: { text: string; url: string; type: "primary" | "secondary" }[] = [];
    export let mini: boolean = false;
</script>

<div class="relative top-10 mb-[0vh] w-screen md:pt-24 {mini ? 'mb-[15vh] min-h-[20vh] md:h-[30vh] md:min-h-0' : 'h-screen md:mb-[15vh] md:h-[80vh] lg:mb-[20vh]'}">
    <div class="flex w-screen flex-col items-center justify-center px-4 md:px-[16%]">
        <h1 class="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">{@html title}</h1>

        {#if description.length > 0}
            <p class="mt-5 w-full px-5 text-lg sm:px-10 md:text-xl lg:w-fit lg:max-w-3xl lg:px-0">{@html description}</p>
        {/if}

        {#if actions.length > 0}
            <div class="mt-10 flex gap-2">
                {#each actions as action}
                    <a class="{action.type} flex items-center gap-0.5" href={action.url}>
                        {action.text}

                        {#if action.type === "secondary"}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#212121" viewBox="0 0 24 24" stroke-width="1" stroke="#212121" class="aspect-square h-[1.15rem] pt-0.5">
                                <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                            </svg>
                        {/if}
                    </a>
                {/each}
            </div>
        {/if}
    </div>

    <div class="absolute left-0 top-0 z-[-1] w-full {mini ? 'h-screen md:h-[80vh]' : 'h-full w-full'}">
        <HeroBackground />
    </div>
</div>

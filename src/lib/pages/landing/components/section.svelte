<script lang="ts">
    export let id: string;
    export let title: string;
    export let description: string;
    export let actions: { text: string; url: string; type: "primary" | "secondary" }[] = [];
</script>

<span {id} class="relative" />

<div class="section relative flex h-fit min-h-screen w-full flex-col items-center justify-center px-5 sm:px-10 lg:px-0 lg:h-screen lg:flex-row lg:justify-between gap-2" id="section-{id}">
    <div class="flex h-full w-full flex-col items-center justify-center text-center lg:w-[50%] lg:items-start lg:pl-[16%] lg:text-left">
        <h1 class="text-5xl font-bold">{@html title}</h1>
        <p class="mt-5 text-lg">{description}</p>

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
    </div>

    <div class="relative h-fit w-full lg:h-full lg:w-auto lg:flex-grow">
        <slot />
    </div>
</div>


<script lang="ts">
    export let id: string;
    export let title: string;
    export let description: string;
    export let actions: { text: string; url: string; type: "primary" | "secondary" }[] = [];
    export let direction: "horizontal" | "vertical" = "horizontal";
</script>

<span {id} class="relative" />

<div class="section relative mb-[20vh] flex h-fit w-full flex-col justify-start gap-2 px-5 sm:px-10 md:mb-[15vh] lg:min-h-[60vh] {direction === 'horizontal' ? 'lg:flex-row' : ''} lg:items-center lg:justify-between" id="section-{id}">
    <div class="flex h-full w-full flex-col items-center justify-center text-center {direction === 'horizontal' ? 'lg:w-[50%] lg:items-start lg:pl-[16%] lg:text-left' : ''}">
        <h1 class="text-4xl font-bold md:text-5xl">{@html title}</h1>
        <p class="mt-5 text-lg md:text-xl {direction === 'vertical' ? 'w-full px-5 sm:px-10 lg:w-fit lg:max-w-3xl lg:px-0' : ''}">{description}</p>

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

    <div class="relative h-fit w-full lg:h-full lg:w-auto lg:flex-grow">
        <slot />
    </div>
</div>

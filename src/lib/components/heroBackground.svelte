<div class="absolute left-0 top-0 z-[-1] flex h-full w-full">
    {#each Array(3) as _value}
        <div class="backgroundCircle absolute h-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand opacity-40" />
    {/each}
</div>

<style lang="postcss">
    .backgroundCircle {
        filter: blur(300px);
    }

    .backgroundCircle:nth-child(1) {
        width: 33%;
        padding-top: 33%;
        left: 20%;
        top: 40%;
    }

    .backgroundCircle:nth-child(2) {
        width: 2%;
        padding-top: 2%;
        left: 52%;
        top: 50%;
    }

    .backgroundCircle:nth-child(3) {
        width: 42%;
        padding-top: 27%;
        left: 80%;
        top: 50%;
    }

    @media (max-width: 768px) {
        .backgroundCircle {
            filter: blur(150px) brightness(200%);
        }

        .backgroundCircle:nth-child(1) {
            top: 12%;
            width: 40%;
        }

        .backgroundCircle:nth-child(2) {
            width: 22%;
            top: 35%;
            padding-top: 22%;
        }
    }
</style>

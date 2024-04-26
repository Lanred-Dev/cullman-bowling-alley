<div class="relative h-[80vh] w-screen">
    <div class="absolute left-1/2 top-[15%] flex w-screen -translate-x-1/2 flex-col items-center justify-center px-[16%]">
        <h1 class="text-5xl font-bold">Fun For Everyone<br />Young or Old</h1>
        <p class="mt-5 max-w-[70%] text-lg">The Cullman Bowling Center offers upgraded bowling lanes with projector screens and TV monitors, complemented by a full-scale restaurant, arcade area, and family-friendly activities such as Birthday Parties, Leagues, and Glow Bowling on weekends.</p>

        <div class="mt-10 flex gap-2">
            <a class="primary" href="/contact">Make a Reservation</a>

            <a class="secondary flex gap-0.5 items-center" href="/hours-and-rates">
                Our Hours

                <svg xmlns="http://www.w3.org/2000/svg" fill="#212121" viewBox="0 0 24 24" stroke-width="1" stroke="#212121" class="aspect-square h-[1.15rem] pt-0.5">
                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                </svg>
            </a>
        </div>
    </div>

    <div class="absolute w-full h-full top-0 left-0 flex grow z-[-1]">
        {#each Array(3) as _value}
            <div class="backgroundCircle absolute rounded-full h-0 opacity-40 -translate-x-1/2 -translate-y-1/2 bg-brand" />
        {/each}
    </div>
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
</style>

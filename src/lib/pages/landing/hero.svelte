<div class="relative h-screen w-screen md:h-[80vh]">
    <div class="absolute left-1/2 top-[5%] flex w-screen -translate-x-1/2 flex-col items-center justify-center px-4 md:top-[15%] md:px-[16%]">
        <h1 class="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Fun For Everyone<br />Young or Old</h1>
        <p class="mt-5 w-full px-5 text-lg sm:px-10 md:text-xl lg:w-fit lg:max-w-3xl lg:px-0">The Cullman Bowling Center offers upgraded bowling lanes with TV monitors, complemented by a full-scale restaurant, arcade area, and family-friendly activities such as Birthday Parties, Leagues, and Glow Bowling on weekends.</p>

        <div class="mt-10 flex gap-2">
            <a class="primary" href="/contact">Make a Reservation</a>

            <a class="secondary flex items-center gap-0.5" href="/hours-and-rates">
                Our Hours

                <svg xmlns="http://www.w3.org/2000/svg" fill="#212121" viewBox="0 0 24 24" stroke-width="1" stroke="#212121" class="aspect-square h-[1.15rem] pt-0.5">
                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                </svg>
            </a>
        </div>
    </div>

    <div class="absolute left-0 top-0 z-[-1] flex h-full w-full">
        {#each Array(3) as _value}
            <div class="backgroundCircle absolute h-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand opacity-40" />
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

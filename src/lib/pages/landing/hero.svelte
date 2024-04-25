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

    <div class="background">
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>

<style lang="postcss">
    .background {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        display: flex;
        flex-grow: 1;
        z-index: -1;
    }

    .background div {
        position: absolute;
        border-radius: 100%;
        height: 0;
        filter: blur(240vw);
        opacity: 0.4;
    }

    .background div:nth-child(1) {
        background: linear-gradient(132deg, #4fd400 0%, #4fd500 100%);
        width: 33%;
        padding-top: 33%;
        left: 20%;
        top: 40%;
        transform: translateX(-50%) translateY(-50%);
    }

    .background div:nth-child(2) {
        background: linear-gradient(132deg, #4fd400 0%, #4fd400 100%);
        width: 2%;
        padding-top: 2%;
        left: 52%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
    }

    .background div:nth-child(3) {
        background: linear-gradient(132deg, #4fd400 0%, #4fd400 100%);
        width: 47%;
        padding-top: 47%;
        left: 80%;
        top: 80%;
        transform: translateX(-50%) translateY(-50%);
    }
</style>

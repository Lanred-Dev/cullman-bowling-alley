<script lang="ts">
    import Section from "./components/section.svelte";

    const TROPHY_COLORS: string[] = ["#C0C0C0", "#FFD700", "#CD7F32"];
</script>

<Section
    id="leagues"
    title="Ready to Roll Strikes?<br>Join a League Today!"
    description="Ready to Roll? Join Our Bowling Leagues for a Blast! Experience the thrill of league play in our vibrant venue. From friendly competition to great vibes, there's a league for everyone. Sign up now and let the good times roll!"
    actions={[
        {
            text: "Join now!",
            type: "primary",
            url: "/leagues",
        },
        {
            text: "Learn more",
            type: "secondary",
            url: "/leagues#about",
        },
    ]}
>
    <div class="absolute left-1/2 top-[52.5%] flex -translate-x-1/2 -translate-y-1/2 items-end justify-center">
        {#each Array(3) as _value, index}
            <div class="podium" data-id={index}>
                <div class="stand" />

                <svg class="trophy" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={TROPHY_COLORS[index]}>
                    <path fill-rule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 0 0-.584.859 6.753 6.753 0 0 0 6.138 5.6 6.73 6.73 0 0 0 2.743 1.346A6.707 6.707 0 0 1 9.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 0 0-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 0 1-1.112-3.173 6.73 6.73 0 0 0 2.743-1.347 6.753 6.753 0 0 0 6.139-5.6.75.75 0 0 0-.585-.858 47.077 47.077 0 0 0-3.07-.543V2.62a.75.75 0 0 0-.658-.744 49.22 49.22 0 0 0-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 0 0-.657.744Zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 0 1 3.16 5.337a45.6 45.6 0 0 1 2.006-.343v.256Zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 0 1-2.863 3.207 6.72 6.72 0 0 0 .857-3.294Z" clip-rule="evenodd" />
                </svg>

                <p class="number">{index === 0 ? "2" : index === 1 ? "1" : "3"}</p>
            </div>
        {/each}
    </div>
</Section>

<style lang="postcss">
    .podium {
        width: 150px;
        @apply relative;
    }

    .podium[data-id="0"] {
        height: 200px;
        box-shadow: inset -6px 6px rgba(129, 129, 129, 0.3);
        @apply rounded-bl-md;
    }

    .podium[data-id="0"],
    .podium[data-id="0"] .stand {
        @apply bg-[#dadada];
    }

    .podium[data-id="1"] {
        height: 280px;
        box-shadow: inset 0px 6px rgba(129, 129, 129, 0.3);
        @apply z-[2];
    }

    .podium[data-id="1"],
    .podium[data-id="1"] .stand {
        @apply bg-[#dfdfdf];
    }

    .podium[data-id="2"] {
        height: 140px;
        box-shadow: inset 6px 6px rgba(129, 129, 129, 0.3);
        @apply rounded-br-md;
    }

    .podium[data-id="2"],
    .podium[data-id="2"] .stand {
        @apply bg-[#cccccc];
    }

    .podium .stand {
        width: calc(100% + 15px);
        @apply absolute bottom-full left-1/2 z-[1] h-3 -translate-x-1/2 rounded-md;
    }

    .podium .trophy {
        bottom: calc(100% + 1px);
        @apply absolute;
    }

    .podium .trophy:before {
        content: "";
        position: absolute;
        top: 25px;
        left: 25px;
        right: 25px;
        bottom: 25px;
        border: 6px solid white;
        border-left-color: transparent;
        border-radius: 50%;
    }

    .podium .trophy:after {
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        background:
            linear-gradient(#fff, #fff) left/6px 100% no-repeat,
            linear-gradient(#fff, #fff) bottom/100% 6px no-repeat;
        top: 22px;
        left: 29px;
    }

    .podium .number {
        @apply absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-7xl font-bold text-primary text-opacity-30;
    }
</style>

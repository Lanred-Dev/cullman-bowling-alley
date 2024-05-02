<script lang="ts">
    import Day from "./components/day.svelte";
    import type { day, hours, prices } from "./types";

    const WEEKDAY_HOURS: hours = [10, 1];
    const WEEKDAY_PRICES: prices = [
        {
            hours: [10, 16],
            prices: [
                [1, 6],
                [2, 8],
            ],
        },
        {
            hours: [17, 23],
            prices: [
                [1, 10],
                [2, 15],
            ],
        },
    ];

    const HOURS: day[] = [
        {
            day: "Monday",
            hours: WEEKDAY_HOURS,
            prices: WEEKDAY_PRICES,
        },
        {
            day: "Tuesday",
            hours: WEEKDAY_HOURS,
            prices: WEEKDAY_PRICES,
        },
        {
            day: "Wednesday",
            hours: WEEKDAY_HOURS,
            prices: WEEKDAY_PRICES,
        },
        {
            day: "Thursday",
            hours: WEEKDAY_HOURS,
            prices: WEEKDAY_PRICES,
        },
        {
            day: "Friday",
            hours: [10, 23],
            prices: [
                {
                    hours: [10, 16],
                    prices: [
                        [1, 6],
                        [2, 8],
                    ],
                },
                {
                    hours: [17, 23],
                    prices: [
                        [1, 10],
                        [2, 15],
                    ],
                },
            ],
            glowBowling: {
                hours: [21, 1],
                prices: [
                    [1, 10],
                    [2, 15],
                ],
            },
        },
    ];
</script>

<div class="grid grid-cols-3 grid-rows-[auto] gap-8 px-4 sm:px-[4%] md:px-[9%] lg:px-[15%]">
    {#each HOURS as day}
        <Day {day} />
    {/each}
</div>

<script lang="ts">
    import Section from "./components/section.svelte";
</script>

<Section
    id="parties"
    title="Ready to Celebrate?<br>Book Your Party Now!"
    description="Is a birthday coming up? Let's make it unforgettable! Book your party with us and experience the ultimate celebration. Our venue offers everything you need for a fantastic time, from exciting activities to delicious food. Get in touch today to start planning!"
    actions={[
        {
            text: "Book now!",
            type: "primary",
            url: "/contact",
        },
        {
            text: "Learn more",
            type: "secondary",
            url: "/birthdays",
        },
    ]}
>
    <div class="flex justify-center items-end">
        {#each Array(3) as _value, index}
            <div class="present" style="--color: #f75d4c;" data-id={index}>
                <div class="lid" />
                <div class="box" />

                <div class="bow">
                    {#each Array(3) as _value}
                        <div />
                    {/each}
                </div>

                <div class="ribbon" />
            </div>
        {/each}
    </div>
</Section>

<style lang="postcss">
    .present {
        width: 120px;
        height: 120px;
        @apply relative flex flex-col items-center scale-150;
    }

    .present[data-id="0"] {
        right: -20px;
        width: 120px;
        height: 130px;
    }

    .present[data-id="1"] {
        width: 160px;
        height: 180px;
    }

    .present[data-id="2"] {
        left: -20px;
        width: 100px;
        height: 110px;
    }

    .present .lid {
        width: calc(100% + 10px);
        @apply z-[2] h-1/5 rounded-md border-4 border-black bg-[--color];
    }

    .present .box {
        background-position:
            0px 0px,
            20px 20px;
        background-size: 40px 40px;
        box-shadow: inset 0px 6px rgba(0, 0, 0, 0.3);
        @apply z-[1] h-full w-full rounded-b-md border-4 border-t-0 border-black bg-[--color];
    }

    .present .ribbon {
        top: -4px;
        width: 30px;
        height: calc(100% + 4px);
        @apply absolute z-[3] rounded-md border-4 border-black bg-[--color];
    }

    .present .ribbon::before {
        content: "";
        height: 5px;
        top: 21%;
        @apply absolute block w-full bg-black bg-opacity-30;
    }

    .present .bow {
        top: -20px;
        height: 35px;
        @apply absolute flex w-full items-end justify-center;
    }

    .present .bow div {
        @apply relative aspect-square rounded-full border-4 border-black bg-[--color];
    }

    .present .bow div:nth-child(1),
    .present .bow div:nth-child(3) {
        @apply h-full;
    }

    .present .bow div:nth-child(2) {
        bottom: 8px;
        @apply z-[1] h-2/3;
    }

    .present .bow div:nth-child(1) {
        right: -8px;
    }

    .present .bow div:nth-child(3) {
        left: -8px;
    }
</style>

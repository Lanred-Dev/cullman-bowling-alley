<script lang="ts">
    import type { review } from "../types";

    export let review: review;
</script>

<li class="w-full text-left text-sm">
    <div class="relative flex w-full flex-col rounded-md bg-primary-200 p-8">
        <div class="flex items-center space-x-4">
            <img src={review.icon} alt={review.name} class="aspect-square h-10 flex-none rounded-full object-cover" loading="lazy" decoding="async" />

            <div class="flex-auto leading-tight">
                <a href={review.url} class="text-base font-semibold">{review.name}</a>
                <p>{review.rating} stars</p>
            </div>
        </div>

        <p class="mt-4">{review.text}</p>
    </div>
</li>

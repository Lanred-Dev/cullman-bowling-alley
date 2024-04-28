<script lang="ts">
    import type { review } from "../types";

    export let review: review;
</script>

<li class="w-full text-sm text-left">
    <div class="w-full bg-primary-200 rounded-md p-8 relative flex flex-col">
        <div class="flex items-center space-x-4">
            <img src={review.icon} alt={review.name} class="h-10 aspect-square flex-none rounded-full object-cover" loading="lazy" decoding="async" />
            
            <div class="flex-auto leading-tight">
                <a href={review.url} class="text-base font-semibold">{review.name}</a>
                <p>{review.stars} stars</p>
            </div>
        </div>

        <p class="mt-4">{review.text}</p>
    </div>
</li>

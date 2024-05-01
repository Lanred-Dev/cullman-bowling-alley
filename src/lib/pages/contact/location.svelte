<script lang="ts">
    import "maplibre-gl/dist/maplibre-gl.css";
    import { PUBLIC_MAPTILER_KEY } from "$env/static/public";
    import { Map, NavigationControl, Marker } from "maplibre-gl";
    import { onMount } from "svelte";

    const COORDS: [number, number] = [-86.8674, 34.167];

    let map: Map;
    let mapContainer: HTMLElement;

    onMount(() => {
        (async function () {
            while (mapContainer === undefined) {
                await new Promise((resolve) => setTimeout(resolve, 100));
            }

            map = new Map({
                container: mapContainer,
                style: `https://api.maptiler.com/maps/hybrid/style.json?key=${PUBLIC_MAPTILER_KEY}`,
                center: COORDS,
                zoom: 15,
            });

            map.addControl(new NavigationControl(), "top-right");
            new Marker({ color: "#4FD500" }).setLngLat(COORDS).addTo(map);
        })();

        return () => {
            if (!map) return;

            map.remove();
        };
    });
</script>

<div class="relative aspect-square max-h-[450px] w-full overflow-hidden rounded-md">
    <div class="h-full w-full" bind:this={mapContainer} />
</div>

<script lang="ts">
    import "maplibre-gl/dist/maplibre-gl.css";
    import { PUBLIC_MAPTILER_KEY } from "$env/static/public";
    import { Map, NavigationControl, Marker } from "maplibre-gl";
    import { onMount } from "svelte";

    const COORDS: [number, number] = [34.1670637, -86.8698413];

    let map: Map;
    let mapContainer: HTMLElement;

    onMount(() => {
        map = new Map({
            container: mapContainer,
            style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${PUBLIC_MAPTILER_KEY}`,
            center: COORDS,
            zoom: 15,
        });

        map.addControl(new NavigationControl(), "top-right");
        new Marker({ color: "#FF0000" }).setLngLat(COORDS).addTo(map);

        return () => {
            if (!map) return;

            map.remove();
        };
    });
</script>

<div class="relative h-32 w-full overflow-hidden rounded-md">
    <div class="h-full w-full" bind:this={mapContainer} />
</div>

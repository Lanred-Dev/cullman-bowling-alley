<script lang="ts">
    import Hero from "$lib/components/infoPage/hero.svelte";

    import Parties from "$lib/pages/landing/parties.svelte";
    import Leagues from "$lib/pages/landing/leagues.svelte";
    import Reviews from "$lib/pages/landing/reviews.svelte";
</script>

<Hero
    title="Fun For Everyone<br />Young or Old"
    description="The Cullman Bowling Center offers upgraded bowling lanes with TV monitors, complemented by a full-scale restaurant, arcade area, and family-friendly activities such as Birthday Parties, Leagues, and Glow Bowling on weekends."
    actions={[
        {
            text: "Contact Us",
            type: "primary",
            url: "/contact",
        },
        {
            text: "Our Hours",
            type: "secondary",
            url: "/hours-and-rates",
        },
    ]}
/>

<Reviews />
<Parties />
<Leagues />

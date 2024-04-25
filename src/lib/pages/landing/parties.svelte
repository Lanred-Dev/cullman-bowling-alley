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
            url: "/",
        },
        {
            text: "Learn more",
            type: "secondary",
            url: "/",
        },
    ]}
/>

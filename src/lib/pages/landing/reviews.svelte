<script lang="ts">
    import Review from "./components/review.svelte";
    import type { review } from "./types";

    const REVIEWS: review[][] = [
        [
            {
                name: "Amy S.",
                icon: "https://lh3.googleusercontent.com/a-/ALV-UjVBcgLnA92pfwLXAL1i-F5-ufAxSixw8WCX4ZVtQNF3uIX7xsgq=w36-h36-p-rp-mo-ba3-br100",
                stars: 5,
                text: "So much fun!! Clean, accommodating and wonderful customer service! Absolutely the cleanest and most comfortable bowling shoes I've ever used!",
                url: "https://maps.app.goo.gl/vTTafKLTJuKkvzEN6",
            },
            {
                name: "Miranda Roberts",
                icon: "https://lh3.googleusercontent.com/a-/ALV-UjUvAOrxBHREaIO4VACQBhtcqqOZJfvVPcNVDM7sr7FUPF_HLwOE=w36-h36-p-rp-mo-ba3-br100",
                stars: 5,
                text: "So awesome! Looks great now, had my son's Birthday Party with no hassle, decorated loke crazy lol, and the honesty so that I didn't have to pay as much!",
                url: "https://maps.app.goo.gl/h7HVhneWAvjhwNo27",
            },
            {
                name: `Josh "Hairless Wonder" A`,
                icon: "https://lh3.googleusercontent.com/a-/ALV-UjU_6ai5kuvi5QbCF_3bDN5ynBe5oqXjv3Npc7dMeJd6BW9D1hoq=w36-h36-p-rp-mo-ba4-br100",
                stars: 5,
                text: "Price was good. Place wasn't bad at all. Food and drink prices are not bad either.",
                url: "https://maps.app.goo.gl/5Fpc983kLvAodEgW6",
            },
            {
                name: "Jared King",
                icon: "https://lh3.googleusercontent.com/a/ACg8ocIets-HAKWdoSe65q3BbO0RDrZsK9Ufd602LBDoqBoCdD6ixg=w36-h36-p-rp-mo-br100",
                stars: 5,
                text: "We brought the family here to play on a rainy day. We had a blast! The staff was very friendly and super quick to help us when we needed it. The facility is clean and family-friendly",
                url: "https://maps.app.goo.gl/WfYwhqSGreNNEk3b7",
            },
            {
                name: "Cara Berman",
                icon: "https://lh3.googleusercontent.com/a-/ALV-UjV_j0I3j6mAYz2hLNpgxlUN9rQAN1QRFw6E3aSdcwpwivgWh5s=w36-h36-p-rp-mo-br100",
                stars: 5,
                text: "We never have any problems!",
                url: "https://maps.app.goo.gl/LPzDgtRm1DCqRPZJ7",
            },
        ],
        [
            {
                name: "Bridgette Bishop",
                icon: "https://lh3.googleusercontent.com/a-/ALV-UjV2o3Npfx9psTtkpo7ydmbPAccAFjRtfZUxVhZHj30ffWGG6yD6rQ=w36-h36-p-rp-mo-ba3-br100",
                stars: 5,
                text: "Great place to take the family and have a fun time bowling! Also a great place for parties!",
                url: "https://maps.app.goo.gl/rMarCKpj68VHg2Ai9",
            },
            {
                name: "mandy barber",
                icon: "https://lh3.googleusercontent.com/a-/ALV-UjWtTB73hTQXa9SAV8Cgz-cmW9NTYRp7G81qtGyWyN9wRyDm3VjLSQ=w36-h36-p-rp-mo-ba5-br100",
                stars: 5,
                text: "Very nice place to go kid friendly staff was very nice we had a blast!! 💜 …",
                url: "https://maps.app.goo.gl/uYbggnbARmBv5CpE7",
            },
            {
                name: `Keith Brewer`,
                icon: "https://lh3.googleusercontent.com/a-/ALV-UjUDPBJCVOvMb8qwxV_6ZV3fWVDaTpMdyU5JU2eAbM9NNWXCf_NMEA=w36-h36-p-rp-mo-ba4-br100",
                stars: 5,
                text: "Great time with my oldest son and 2 of my 6 grandchildren.  Can't go wrong with bowling and family time.",
                url: "https://maps.app.goo.gl/HgyF1qsh13U1U16d8",
            },
            {
                name: "Sean Mattox",
                icon: "https://lh3.googleusercontent.com/a/ACg8ocLprc_ScCBCCKkDXrDhVvsu1smAr-cqkiyKAGrb9dV_1TmhsQ=w36-h36-p-rp-mo-ba4-br100",
                stars: 5,
                text: "Good clean fun and while you are there go check out the tavern great food and great people",
                url: "https://maps.app.goo.gl/9gQUsnWG74JQrQi77",
            },
            {
                name: "Jessica Pettus",
                icon: "https://lh3.googleusercontent.com/a-/ALV-UjXe20lPAiX_MOzC6BA-4fKRNXxQlC6cYbco25CBVgqZQMXz0em7=w36-h36-p-rp-mo-br100",
                stars: 5,
                text: "Awesome place! Love the food and the bowling is great! Super fun environment! My daughter had her birthday here and the parents had fun! Top notch!",
                url: "https://maps.app.goo.gl/yFaY7k5yYezaRAWC7",
            },
        ],
        [
            {
                name: "Justin Barnes",
                icon: "https://lh3.googleusercontent.com/a/ACg8ocIiCQzaq9w233eF6fB1_pqYo5aelsOn_-UiFkgDAdUUbq1w2Q=w36-h36-p-rp-mo-br100",
                stars: 5,
                text: "Great atmosphere with a good staff that are very knowledgeable and just down to earth.The Pro shop is next level and I would recommend this place for anyone to come have fun.",
                url: "https://maps.app.goo.gl/tg5GeCC44KLNNyfp8",
            },
            {
                name: "Andrew Reid",
                icon: "https://lh3.googleusercontent.com/a-/ALV-UjUVuXtbBGqzTWp4vOsxRP6uYdsvZ5Du3ljaqCHf2dtL7jMttH6H=w36-h36-p-rp-mo-ba3-br100",
                stars: 5,
                text: "I always like to come here and bowl with some friends love the atmosphere and food here",
                url: "https://maps.app.goo.gl/vsCQPukwZ8RFx7Vt9",
            },
            {
                name: `Michael Keevert`,
                icon: "https://lh3.googleusercontent.com/a/ACg8ocJ9Ux_eiZc6k7MxbM-Cu02oqh2YXyIjbM_xoya6ptdsTSkE=w36-h36-p-rp-mo-br100",
                stars: 5,
                text: "Went there on a date. Had a great time. Very family oriented. We had almost as much fun watching the kids as we did bowling.",
                url: "https://maps.app.goo.gl/S1vgLTj6xDiaFA5Z8",
            },
            {
                name: "Jared King",
                icon: "https://lh3.googleusercontent.com/a/ACg8ocIets-HAKWdoSe65q3BbO0RDrZsK9Ufd602LBDoqBoCdD6ixg=w36-h36-p-rp-mo-br100",
                stars: 5,
                text: "The bowling alley is great! The atmosphere is fantastic with great food! My family and I go there every once a while. The lanes are oiled great, and have a great bowling ball store. The new pub is good. A fantastic place for family night!",
                url: "https://maps.app.goo.gl/WfYwhqSGreNNEk3b7",
            },
            {
                name: "Tyler Wafookie",
                icon: "https://lh3.googleusercontent.com/a-/ALV-UjWAwrV8yUHFhreLlIPWPR0RPe_UxvTMX-NF9NOKwZDdgrQwH8XJQg=w36-h36-p-rp-mo-ba3-br100",
                stars: 5,
                text: "Had a great time and the food was great. They had plenty of games and prizes for tickets also had a great friendly staff. I will be back and definitely recommend going.",
                url: "https://maps.app.goo.gl/wCoExdmWhqMqnSva7",
            },
        ],
    ];
</script>

<span id="reviews" class="relative" />

<div class="section relative mb-[25vh] flex h-fit min-h-screen w-full flex-col items-center justify-center gap-10 px-5 sm:px-10 md:mb-0 lg:h-screen lg:px-0" id="section-reviews">
    <div class="flex w-full flex-col items-center justify-center text-center">
        <h1 class="text-4xl font-bold md:text-5xl">700+ Reviews, 4.3 Overall Rating</h1>
        <p class="mt-5 w-full px-5 text-lg sm:px-10 md:text-xl lg:w-fit lg:max-w-3xl lg:px-0">Discover what others are saying about us with over 700 reviews and a 4.3 overall rating. Dive into the feedback from our community and see why they love bowling with us!</p>
    </div>

    <div class="relative mt-10 max-h-[70vh] w-full overflow-hidden">
        <div class="grid w-full grid-cols-1 gap-6 overflow-hidden px-4 sm:grid-cols-2 sm:px-[5%] md:px-[10%] lg:grid-cols-3 lg:px-[16%]">
            {#each Array(3) as _value, index}
                <ul class="space-y-6 {index == 1 ? 'hidden sm:block' : index === 2 ? 'hidden lg:block' : ''}">
                    {#each REVIEWS[index] as review}
                        <Review {review} />
                    {/each}
                </ul>
            {/each}
        </div>

        <div class="absolute bottom-0 z-[1] h-[30%] w-full bg-gradient-to-b from-[#fafafa00] to-[#fafafa]">
            <a class="secondary absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center gap-0.5" href="https://www.google.com/maps/place/Cullman+Bowling+Center/@34.1670637,-86.8698413,17z/data=!4m8!3m7!1s0x8889cb05e017bacf:0x7e545bbfc78b72f5!8m2!3d34.1670637!4d-86.8672664!9m1!1b1!16s%2Fg%2F1tjpr855?entry=ttu">
                See all reviews

                <svg xmlns="http://www.w3.org/2000/svg" fill="#212121" viewBox="0 0 24 24" stroke-width="1" stroke="#212121" class="aspect-square h-[1.15rem] pt-0.5">
                    <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                </svg>
            </a>
        </div>
    </div>
</div>

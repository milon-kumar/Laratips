<template>
    <InnerPageHero image-url="public/images/image-4.jpg" title="All Articals"/>

    <div class="container mx-auto sm:py-12 px-4 sm:px-0">
        <Articals layout="grid"/>
    </div>
</template>

<script>
    import InnerPageHero from "@/components/layout/InnerPageHero.vue";
    import Articals from "@/components/layout/Articals.vue";
    export default {
        components: {
            InnerPageHero,
            Articals,
        },
    }
</script>
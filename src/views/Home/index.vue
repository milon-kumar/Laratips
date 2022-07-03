<template>
  <Hero/>
    <div class=" container mx-auto py-8 sm:py-20 px-4 sm:px-0">
       <ArticalsVue/>
    </div>
</template>

<script>
import Hero from "@/components/layout/Hero.vue"
import ArticalsVue from "@/components/layout/Articals.vue"
export default {
    components:{
        Hero,
        ArticalsVue
    }
}
</script>

<style>

</style>
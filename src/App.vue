
<template>
  <div class="">
    <NavbarVue/>
    <router-view/>
    <FooterVue/>
  </div>
</template>

<script>
import NavbarVue from "./components/layout/Navbar.vue";
import FooterVue from "./components/layout/Footer.vue";
export default {
  components: {
    NavbarVue,
    FooterVue,
  },
};
</script>
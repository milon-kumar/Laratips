<template>
  <nav
    id="navbar"
    class="
      py-4
      px-4
      sm:py-6
      bg-white
      shadow
      sm:bg-transparent sm:shadow-none
      fixed
      w-full
      z-10
    "
  >
    <div
      class="
        container
        mx-auto
        flex flex-col
        sm:flex-row
        items-center
        justify-between
      "
    >
      <div class="w-full flex flex-row items-center justify-between">
        <router-link to="/">
           <div class="text-3xl font-bold">
            <span class="sm:text-white">Lara</span>
            <span class="text-primary">Tips</span>
          </div>
        </router-link>
       
        <div>
          <button class="hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <button class="hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        class="
          mt-4
          sm:mt-0
          w-full
          sm:space-x-4 sm:text-white sm:text-right
          block
        "
      >
        <NavbarLinkVue to="/" label="Home" />
        <NavbarLinkVue to="/about" label="About" />
        <NavbarLinkVue to="/artical" label="Artical" />
        <NavbarLinkVue to="/contract" label="Contract" />
      </div>
    </div>
  </nav>
</template>
 
<script>
import NavbarLinkVue from "./NavbarLink.vue"
export default {
  props: {},
  components: {
    NavbarLinkVue,
  },
  setup() {
  },

  
};
   
</script>

<style>
</style>
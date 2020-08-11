<template>
  <section class="bg-atoom-dk">
    <div class="flex flex-col lg:flex-row">
      <div
        class="order-2 flex flex-wrap justify-center mx-auto my-6 text-white lg:w-1/3 lg:flex-col lg:order-1"
      >
        <div class="flex items-center mx-4 my-2">
          <fa-icon class="mx-4 text-xl" :icon="['fab', 'whatsapp']" />
          <p>55 8735 5234</p>
        </div>
        <div class="flex items-center mx-4 my-2">
          <fa-icon class="mx-4 text-xl" :icon="['fas', 'envelope']" />
          <p>atoomik.dd@hotmail.com</p>
        </div>
        <div class="flex items-center mx-4 my-2">
          <fa-icon class="mx-4 text-xl" :icon="['fas', 'map-marker-smile']" />
          <p>Miguel Hidalgo, CDMX</p>
        </div>
      </div>
      <div
        class="order-3 flex flex-col text-center my-6 mx-auto text-white lg:order-2 lg:w-1/3 lg:self-center"
      >
        <img
          class="h-16 mx-auto"
          src="../assets/images/svg-icons/atoomik-logo.svg"
          alt="logo brand"
        />
        <p>2020 atoomik Consultoria Web</p>
        <p>Todos los derechos reservados</p>
      </div>
      <div
        class="order-1 flex flex-wrap justify-center my-6 mx-auto text-white lg:w-1/3 lg:order-3 lg:flex-col lg:text-right"
      >
        <nuxt-link class="mx-8 my-2" to="/about-me">
          <p>About me</p>
        </nuxt-link>
        <nuxt-link class="mx-8 my-2" to="/servicios">
          <p>Servicios</p>
        </nuxt-link>
        <nuxt-link class="mx-8 my-2" to="/estrategía">
          <p>Estrategía</p>
        </nuxt-link>
        <nuxt-link class="mx-8 my-2" to="/">
          <p>Trabajemos juntos</p>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style></style>

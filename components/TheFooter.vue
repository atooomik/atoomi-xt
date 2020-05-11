<template>
  <section class=" bg-atoom-dk">
    <div class="flex flex-col lg:flex-row">
      <div class="order-2 mx-auto my-6 text-white lg:w-1/3 lg:order-1">
        <span class="flex mx-auto">
          <fa-icon class="mx-4" :icon="['fas', 'user-astronaut']" />
          <p>55 8735 5234</p>
        </span>
        <span class="flex">
          <fa-icon class="mx-4" :icon="['fas', 'user-astronaut']" />
          <p>atoomik.dd@hotmail.com</p>
        </span>
        <span class="flex">
          <fa-icon class="mx-4" :icon="['fas', 'user-astronaut']" />
          <p>Miguel Hidalgo, CDMX</p>
        </span>
      </div>
      <div class="order-3 lg:order-2 mx-auto text-white lg:w-1/3">
        <span class="flex flex-col text-center">
          <img
            class="h-16"
            src="../assets/images/svg-icons/atoomik-logo.svg"
            alt="logo brand"
          />
          <p>2020 atoomik Consultoria Web</p>
          <p>Todos los derechos reservados</p>
        </span>
      </div>
      <div class="order-1 lg:order-3 mx-auto text-white lg:w-1/3">
        <span class="flex lg:flex-col text-center">
          <p>Elemnto 1</p>
          <p>Elemnto 2</p>
          <p>Elemnto 3</p>
          <p>Elemnto 4</p>
        </span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheFooter"
};
</script>

<style></style>

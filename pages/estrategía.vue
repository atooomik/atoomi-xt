<template>
  <section class="bg-atoom-bl">
    <div class="w-full">
      <div
        class="flex flex-col justify-between min-h-adjust lg:flex-row lg:items-center"
      >
        <div class="w-full my-8 overflow-hidden lg:w-1/2">
          <div class="entrance px-8 text-center lg:text-right text-white">
            <p class="slogan text-4xl lg:text-xxl">
              Estrategia
            </p>
            <p class="text-lg">
              O sobre como vamos a crear un proyecto ganador.
            </p>
          </div>
          <span class="flex justify-center">
            <fa-icon class="down-arrow" :icon="['fad', 'angle-double-down']" />
          </span>
        </div>
        <div class="flex p-8 bg-white min-h-partial lg:w-1/2 lg:min-h-adjust">
          <img
            class="max-w-xl w-full mx-auto"
            src="../assets/images/svg-draws/product-plan.svg"
            alt="services asset"
          />
        </div>
      </div>
      <!--Page content-->
      <div class="w-full p-8 bg-white">
        <div class="contain">
          <div>
            <p>
              ¿Mis servicios? Desarrollar páginas web, sin embargo el verdadero
              valor de un desarrollo que queda en mis manos, son los pequeños
              detalles que pueden convertirlo en una de las mejores inversiones
              que realices, que tengan lo necesario para satisfacer tus
              necesidades actuales, pero sin que esto signifique que tu sitio no
              pueda crecer contigo en el futuro y que puedas contar con él en
              todo momento.
            </p>
            <br />
            <p>
              Aquí puedo explicarte más específicamente de aquello que le da
              valor a mis proyectos.
            </p>
          </div>

          <div class="flex">
            <button
              class="mx-auto my-8 px-4 py-2 text-2xl text-atoom-gp border-4 border-atoom-gp rounded-lg transition-all duration-300 hover:text-white hover:bg-atoom-gp"
            >
              Comencemos
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Estrategia"
};
</script>

<style></style>

<template>
  <section class="bg-atoom-bl">
    <div class="contain">
      <div
        class="flex flex-col justify-around min-h-adjust lg:flex-row lg:items-center"
      >
        <div class="my-8 lg:w-1/2">
          <img
            class="max-w-xl w-full mx-auto"
            src="../assets/images/svg-draws/planning.svg"
            alt="services asset"
          />
        </div>
        <div class="w-full my-8 overflow-hidden lg:w-1/2">
          <span class="entrance text-right">
            <p class="slogan text-4xl lg:text-xxl">
              Estrategia
            </p>
            <p class="text-lg">
              O sobre como vamos a crear un proyecto ganador.
            </p>
          </span>
          <span class="flex justify-center">
            <fa-icon class="down-arrow" :icon="['fad', 'angle-double-down']" />
          </span>
        </div>
      </div>
      <div>
        <p>
          ¿Mis servicios? Desarrollar páginas web, sin embargo el verdadero
          valor de un desarrollo que queda en mis manos, son los pequeños
          detalles que pueden convertirlo en una de las mejores inversiones que
          realices, que tengan lo necesario para satisfacer tus necesidades
          actuales, pero sin que esto signifique que tu sitio no pueda crecer
          contigo en el futuro y que puedas contar con él en todo momento.
        </p>
        <br />
        <p>
          Aquí puedo explicarte más específicamente de aquello que le da valor a
          mis proyectos.
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
  </section>
</template>

<script>
export default {
  name: "Estrategia"
};
</script>

<style></style>

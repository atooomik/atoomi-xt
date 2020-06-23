<template>
  <section class="bg-atoom-bl">
    <div class="w-full">
      <div class="flex flex-col justify-between min-h-adjust lg:flex-row-reverse lg:items-center">
        <div class="w-full my-8 overflow-hidden lg:w-1/2">
          <div class="entrance px-8 text-center lg:text-left text-white">
            <p class="slogan text-4xl lg:text-xxl">Estrategia</p>
            <p class="text-lg">O sobre como vamos a crear un proyecto ganador.</p>
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
      <div class="w-full py-8 bg-white">
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
            <p class="slogan mt-8 mb-16º text-3xl text-center">¿Cual es el proceso?</p>
          </div>
          <div class="relative flex flex-col lg:flex-row lg:min-h-partial">
            <div class="lg:w-1/2 flex flex-col justify-center py-4 px-8">
              <div class="relative flex items-center mx-auto mb-6 rounded-lg bg-white">
                <p
                  class="absolute top-w-50 left-w-50 w-12 h-12 flex justify-center items-center mx-auto text-2xl text-white font-bold bg-atoom-bl rounded-full lg:w-16 lg:h-16 lg:mx-0"
                >1</p>
                <p class="pt-4 pb-2 px-6 text-atoom-bl text-3xl font-bold">Meeting</p>
              </div>
              <div class="p-4 rounded-lg">
                <p>
                  Aquí puedo explicarte más específicamente de aquello que le da
                  valor a mis proyectos. Aquí puedo explicarte más
                  específicamente de aquello que le da valor a mis proyectos.
                </p>
              </div>
            </div>
            <div class="lg:w-1/2 py-4 px-8 self-center">
              <img src="../assets/images/svg-draws/meeting.svg" alt="people on a meeting" />
            </div>
          </div>
          <div class="relative flex flex-col lg:flex-row-reverse lg:min-h-partial">
            <div class="lg:w-1/2 flex flex-col justify-center py-4 px-8">
              <div class="relative flex items-center mx-auto mb-6 rounded-lg bg-white">
                <p
                  class="absolute top-w-50 left-w-50 w-12 h-12 flex justify-center items-center mx-auto text-2xl text-white font-bold bg-atoom-ylw rounded-full lg:w-16 lg:h-16 lg:mx-0"
                >2</p>
                <p class="pt-4 pb-2 px-6 text-atoom-ylw text-3xl font-bold">Propuesta</p>
              </div>
              <div class="p-4 rounded-lg">
                <p>
                  Aquí puedo explicarte más específicamente de aquello que le da
                  valor a mis proyectos. Aquí puedo explicarte más
                  específicamente de aquello que le da valor a mis proyectos.
                </p>
              </div>
            </div>
            <div class="lg:w-1/2 py-4 px-8">
              <img src="../assets/images/svg-draws/making-a-deal.svg" alt="people closing deal" />
            </div>
          </div>
          <div class="flex flex-col my-8 lg:flex-row lg:min-h-partial">
            <div class="lg:w-1/2 flex flex-col justify-center py-4 px-8">
              <div class="relative flex items-center mx-auto mb-6 rounded-lg bg-white">
                <p
                  class="absolute top-w-50 left-w-50 w-12 h-12 flex justify-center items-center mx-auto text-2xl text-white font-bold bg-atoom-bl rounded-full lg:w-16 lg:h-16 lg:mx-0"
                >3</p>
                <p class="pt-4 pb-2 px-6 text-atoom-bl text-3xl font-bold">Diseño</p>
              </div>
              <div class="p-4 rounded-lg">
                <p>
                  Aquí puedo explicarte más específicamente de aquello que le da
                  valor a mis proyectos. Aquí puedo explicarte más
                  específicamente de aquello que le da valor a mis proyectos.
                </p>
              </div>
            </div>
            <div class="lg:w-1/2 py-4 px-8">
              <img src="../assets/images/svg-draws/prototyping.svg" alt="people on a meeting" />
            </div>
          </div>
          <div class="flex flex-col my-8 lg:flex-row-reverse lg:min-h-partial">
            <div class="lg:w-1/2 flex flex-col justify-center py-4 px-8">
              <div class="relative flex items-center mx-auto mb-6 rounded-lg bg-white">
                <p
                  class="absolute top-w-50 left-w-50 w-12 h-12 flex justify-center items-center mx-auto text-2xl text-white font-bold bg-atoom-ylw rounded-full lg:w-16 lg:h-16 lg:mx-0"
                >4</p>
                <p class="pt-4 pb-2 px-6 text-atoom-ylw text-3xl font-bold">Desarrollo y testing</p>
              </div>
              <div class="p-4 rounded-lg">
                <p>
                  Aquí puedo explicarte más específicamente de aquello que le da
                  valor a mis proyectos. Aquí puedo explicarte más
                  específicamente de aquello que le da valor a mis proyectos.
                </p>
              </div>
            </div>
            <div class="lg:w-1/2 py-4 px-8">
              <img src="../assets/images/svg-draws/programming.svg" alt="people closing deal" />
            </div>
          </div>
          <div class="flex flex-col my-8 lg:flex-row lg:min-h-partial">
            <div class="lg:w-1/2 flex flex-col justify-center py-4 px-8">
              <div class="relative flex items-center mx-auto mb-6 rounded-lg bg-white">
                <p
                  class="absolute top-w-50 left-w-50 w-12 h-12 flex justify-center items-center mx-auto text-2xl text-white font-bold bg-atoom-bl rounded-full lg:w-16 lg:h-16 lg:mx-0"
                >5</p>
                <p class="pt-4 pb-2 px-6 text-atoom-bl text-3xl font-bold">Launch</p>
              </div>
              <div class="p-4 rounded-lg">
                <p>
                  Aquí puedo explicarte más específicamente de aquello que le da
                  valor a mis proyectos. Aquí puedo explicarte más
                  específicamente de aquello que le da valor a mis proyectos.
                </p>
              </div>
            </div>
            <div class="lg:w-1/2 py-4 px-8">
              <img src="../assets/images/svg-draws/done.svg" alt="people on a meeting" />
            </div>
          </div>
          <div class="flex">
            <button
              class="mx-auto my-8 px-4 py-2 text-2xl text-atoom-gp border-4 border-atoom-gp rounded-lg transition-all duration-300 hover:text-white hover:bg-atoom-gp"
            >Comencemos</button>
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

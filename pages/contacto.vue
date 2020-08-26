<template>
  <section class="bl-sln-grad">
    <div>
      <div class="py-24">
        <p class="pt-8 text-4xl text-atoom-semiGray lg:text-6xl text-center">
          ¡Hagamos equipo!
        </p>
        <p class="text-lg text-atoom-semiGray text-center  lg:text-3xl">
          Y llevemos tu proyecto al siguiente nivel.
        </p>
        <div
          class="max-w-xs flex flex-col mx-auto mt-8 p-4 bg-atoom-semiGray rounded-lg md:max-w-md lg:flex-row lg:max-w-2xl"
        >
          <div class="w-48 mx-auto lg:w-64 lg:flex lg:items-center">
            <img src="../assets/images/svg-draws/email-me.svg" alt />
          </div>
          <div>
            <form
              class="px-8"
              action="/gracias"
              name="contacto"
              data-netlify="true"
            >
              <label class="block mb-4">
                <span class="text-gray-700">Nombre:</span>
                <input
                  type="name"
                  class="form-input mt-1 block w-full"
                  placeholder="Cosme Fulanito"
                  required
                />
              </label>
              <label class="block mb-4">
                <span class="text-gray-700">Teléfono:</span>
                <input
                  type="phone"
                  class="form-input mt-1 block w-full"
                  placeholder="55 1234 5678"
                  required
                />
              </label>
              <label class="block mb-4">
                <span class="text-gray-700">Correo electrónico:</span>
                <input
                  type="email"
                  class="form-input mt-1 block w-full"
                  placeholder="cosme@example.com"
                  required
                />
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox" required />
                <span class="ml-2"
                  >Acepto el
                  <a href="/aviso-de-privacidad">Aviso de privacidad</a>
                </span>
              </label>
              <div class="flex">
                <button
                  class="mx-auto my-4 p-2 text-white bg-atoom-gp rounded-lg"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>

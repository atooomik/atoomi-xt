<template>
  <section>
    <div class="py-24">
      <p class="pt-8 text-4xl text-white lg:text-6xl text-center">
        ¡Hagamos equipo!
      </p>
      <p class="text-lg text-white text-center lg:text-3xl">
        Y llevemos tu proyecto al siguiente nivel.
      </p>
      <div
        class="max-w-xs flex flex-col mx-auto mt-8 p-4 bg-atoom-semiGray rounded-lg md:max-w-md lg:flex-row lg:max-w-2xl"
      >
        <div class="w-48 mx-auto lg:w-64 lg:flex lg:items-center">
          <img src="~/assets/images/svg-draws/email-me.svg" alt />
        </div>
        <div>
          <form
            class="px-8"
            name="contact-form"
            method="POST"
            action="/gracias"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <div class="mb-4 block w-full">
              <label for="lead-name" class="block text-white">Nombre:</label>
              <input
                type="text"
                name="lead-name"
                id="lead-name"
                class="form-input mt-1 block w-full"
                placeholder="Cosme Fulanito"
                required
              />
            </div>
            <div class="mb-4 block w-full">
              <label for="lead-phone" class="block text-white">
                Télefono:
              </label>
              <input
                type="text"
                name="lead-phone"
                id="lead-phone"
                class="form-input mt-1 block w-full"
                placeholder="55 1234 5678"
                required
              />
            </div>
            <div class="mb-4 block w-full">
              <label for="lead-email" class="block mb-4 text-white">
                Correo electrónico:
              </label>
              <input
                type="email"
                name="lead-email"
                id="lead-email"
                class="form-input mt-1 block w-full"
                placeholder="cosme@example.com"
                required
              />
            </div>
            <div class="mb-2 block w-full">
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox" required />
                <span class="ml-2 text-white"
                  >Acepto el
                  <a href="/aviso-de-privacidad">Aviso de privacidad</a>
                </span>
              </label>
            </div>
            <div class="flex">
              <button
                type="submit"
                class="mx-auto my-4 px-4 py-2 text-white rounded-lg bg-atoom-salmn hover:shadow-slmn-left transition-all duration-500 ease-out"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      titleChunk: "Contacto"
    };
  },
  transition: "slide-fade"
};
</script>

<style></style>

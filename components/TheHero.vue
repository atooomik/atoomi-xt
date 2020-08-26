<template>
  <section class="w-full">
    <div class="contain lg:h-screen">
      <div class="opacity-entrance lg:h-4/5">
        <div class="flex flex-col justify-center items-center w-full h-full">
          <img
            class="w-40 mt-40 mb-8 md:mt-48 md:mb-16 lg:my-8"
            src="../assets/images/svg-icons/atoomik-logo.svg"
            alt="brand logo"
          />
          <p class="text-5xl text-white">atoomik</p>
          <p class="text-3xl text-white text-center leading-tight">
            Consultoria web independiente
          </p>
        </div>
      </div>
      <div
        class="w-full flex justify-between mt-16 mb-8 md:mt-20 md:mb-12 lg:h-1/5 lg:items-center lg:my-0"
      >
        <figure class="w-40 text-center opacity-icon-entrance--home">
          <img
            class="h-12 w-12 md:h-20 md:w-20 m-auto"
            src="../assets/images/svg-icons/webDevelopment.svg"
            alt="web development icon"
          />
          <figcaption>
            <p class="md:text-2xl text-white font-normal">Desarrollo</p>
          </figcaption>
        </figure>
        <figure class="w-40 text-center opacity-icon-entrance--home">
          <img
            class="h-12 w-12 md:h-20 md:w-20 m-auto"
            src="../assets/images/svg-icons/webDesign.svg"
            alt="web design icon"
          />
          <figcaption>
            <p class="md:text-2xl text-white font-normal">Diseño</p>
          </figcaption>
        </figure>
        <figure class="w-40 text-center opacity-icon-entrance--home">
          <img
            class="h-12 w-12 md:h-20 md:w-20 m-auto"
            src="../assets/images/svg-icons/userXperience.svg"
            alt=" user experience icon"
          />
          <figcaption>
            <p class="md:text-2xl text-white font-normal">UX & UI</p>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheHero"
};
</script>

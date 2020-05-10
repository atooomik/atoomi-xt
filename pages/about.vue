<template>
  <section class="bg-atoom-gp">
    <div class="relative overflow-hidden w-full h-64">
      <img
        class="absolute w-full h-full object-cover"
        src="../assets/images/back.jpg"
        alt=""
      />
    </div>
    <div
      class="contain flex flex-col items-start min-h-adjust max-w-4xl lg:flex-row"
    >
      <div class="relative -mt-16 lg:h-full lg:w-1/4">
        <img
          class="border-white border-b-4 border-r-4"
          src="../assets/images/lateral1.jpg"
          alt="profile picture"
        />
        <div class="w-full flex my-6 text-2xl text-white">
          <fa-icon class="mx-4" :icon="['fad', 'cat-space']" />
          <fa-icon class="mx-4" :icon="['fad', 'cat-space']" />
          <fa-icon class="mx-4" :icon="['fad', 'cat-space']" />
          <fa-icon class="mx-4" :icon="['fad', 'cat-space']" />
        </div>
      </div>
      <div class="lg:w-3/4 text-white text-left lg:mt-20 lg:pl-20 pl-4 pr-10">
        <p class="slogan text-6xl">About me</p>
        <p class="text-lg lg:mt-24">
          Isacc Núñez, apasionado de las tecnologias y el diseño web, egresado
          de BEDU Tech donde inicie mi formación como desarrollador web.
        </p>
        <br />
        <p class="text-lg">
          Actualmente trabajo en dinamo Agencia de comunicación y diseño como
          Frontend Developer.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.circulo {
  border-radius: 50%;
}
</style>

<template>
  <section class="bg-black">
    <div class="relative overflow-hidden w-full h-64">
      <img
        class="absolute w-full h-full object-cover"
        src="../assets/images/back.jpg"
        alt="persona de espaldas"
      />
    </div>
    <div class="contain flex flex-col items-start min-h-adjust lg:flex-row">
      <div class="hidden lg:block lg:-mt-16 lg:h-full lg:w-1/4">
        <div class="relative overflow-hidden h-128">
          <img
            class="object-cover border-atoom-ylw border-r-4"
            src="../assets/images/lateral1.jpg"
            alt="profile picture"
          />
        </div>
        <div class="w-full flex flex-col items-center my-6 text-3xl text-white">
          <fa-icon class="my-4" :icon="['fad', 'cat-space']" />
          <fa-icon class="my-4" :icon="['fas', 'game-console-handheld']" />
          <fa-icon class="my-4" :icon="['fad', 'mountain']" />
          <fa-icon class="my-4" :icon="['fad', 'cat-space']" />
        </div>
      </div>
      <div class="w-full lg:w-3/4 text-white text-center lg:text-left lg:mt-20 lg:pl-20">
        <p class="text-xxl font-thin text-black -mx-8 bg-atoom-ylw lg:pl-4 lg:mx-0">About me</p>
        <p class="mt-8 px-8 lg:mt-24 lg:pl-16">
          Isacc Núñez, apasionado de las tecnologias y el diseño web, egresado
          de BEDU Tech donde inicie mi formación como desarrollador web.
        </p>
        <br />
        <p class="px-8 lg:pl-16">
          Antes del desarrollo, tuve la oportunidad de trabajar en atención a
          clientes, lo que me permite entender desde una perspectiva más cercana
          las necesidades como usuarios / clientes, y esto es algo que siempre
          tengo en cuenta en cada proyecto en el que me involucro.
        </p>
        <br />
        <p class="px-8 lg:pl-16">
          Actualmente trabajo en dinamo Agencia de comunicación y diseño como
          Frontend Developer.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

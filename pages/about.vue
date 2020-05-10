<template>
  <section class="bg-atoom-gp">
    <div
      class="contain flex flex-col items-start min-h-adjust max-w-4xl lg:flex-row"
    >
      <div class="mx-auto self-center lg:w-1/4">
        <div class="mx-auto bg-atoom-ylw left-t"></div>
        <img
          class="mx-auto circulo"
          src="../assets/images/profile.jpg"
          alt="profile picture"
        />
        <div class="mx-auto bg-atoom-ylw right-t"></div>
      </div>
      <div class="lg:w-3/4 text-white text-left lg:mt-20 lg:pl-20 pl-4 pr-10">
        <p class="slogan text-6xl lg:mt-12">About me</p>
        <p class="text-2xl lg:mt-12">
          Isacc Núñez, apasionado de las tecnologias y el diseño web, egresado
          de BEDU Tech donde inicie mi formación como desarrollador web.
        </p>
        <br />
        <p class="text-2xl">
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
  width: 250px;
  height: 250px;
  clip-path: circle(50% at 50% 50%);
  overflow: hidden;
}

.left-t {
  height: 200px;
  width: 250px;
  clip-path: polygon(100% 50%, 0 20%, 0 80%);
}
.right-t {
  height: 200px;
  width: 250px;
  clip-path: polygon(100% 80%, 100% 20%, 0 50%);
}
</style>

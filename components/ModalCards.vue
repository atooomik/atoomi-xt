<template>
  <div>
    <div class="modal-card" @click="showModal()">
      <img :src="imgSrc" alt="" />
      <p v-text="proyectTitle" class="text-white px-4 py-2"></p>
    </div>
    <!--Modal con detalles del proyecto-->
    <transition name="traslate">
      <div v-if="openOverlay">
        <div
          class="fixed top-0 right-0 bottom-0 left-0 flex items-center w-full h-screen p-4 bg-atoom-dkOverlay"
        >
          <div
            class="relative max-w-4xl mx-auto lg:mt-16 rounded-lg cursor-default"
          >
            <button
              class="absolute z-10 right-0 bottom-0 left-0 mx-auto -mb-4 px-1 pt-1 bg-white rounded-full"
              @click="showModal()"
            >
              <fa-icon
                class=" text-black text-2xl"
                :icon="['fad', 'times-circle']"
              />
            </button>
            <div
              class="w-full h-80 rounded-lg lg:h-84 bg-white overflow-y-scroll"
            >
              <div class="w-full">
                <slot name="carousel"></slot>
              </div>
              <div class="w-full p-4 ">
                <div class="mb-4">
                  <p class="font-normal">Nombre del proyecto:</p>
                  <p v-text="proyectTitle"></p>
                </div>
                <div class="mb-4">
                  <p class="font-normal">
                    Participación:
                  </p>
                  <p v-text="proyectTasks"></p>
                </div>
                <div class="mb-4">
                  <p class="font-normal">
                    Retos:
                  </p>
                  <p v-text="proyectChallenges"></p>
                </div>
                <div class="mb-4">
                  <p class="font-normal">
                    Principales tecnologias utilizadas en el proyecto:
                  </p>
                  <div
                    class="grid grid-cols-4 justify-items-center text-3xl text-atoom-semiGray"
                  >
                    <slot name="tecnologies"></slot>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ModalCards",
  props: {
    imgSrc: {
      type: String,
      default: ""
    },
    proyectTitle: {
      type: String,
      default: ""
    },
    proyectTasks: {
      type: String,
      default: ""
    },
    proyectChallenges: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    openOverlay: false
  }),
  methods: {
    showModal() {
      this.openOverlay = !this.openOverlay;
      console.log(this.openModal);
    }
  }
};
</script>

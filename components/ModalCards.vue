<template>
  <div>
    <div
      class="w-68 rounded-lg overflow-hidden bg-atoom-semiGray"
      @click="showModal()"
    >
      <img :src="imgSrc" alt="" />
      <p v-text="proyectTitle" class="text-white"></p>
    </div>
    <!--Modal con detalles del proyecto-->
    <transition name="traslate">
      <div v-if="openOverlay">
        <div
          class="w-full h-screen bg-atoom-dkOverlay fixed top-0 right-0 bottom-0 left-0"
        >
          <div class="relative max-w-4xl mx-auto mt-24 rounded-lg">
            <button
              class="absolute z-10 right-0 bottom-0 left-0 mx-auto -mb-4 px-1 pt-1 bg-white rounded-full"
              @click="showModal()"
            >
              <fa-icon
                class=" text-black text-2xl"
                :icon="['fad', 'times-circle']"
              />
            </button>
            <div class="w-full h-84 rounded-lg bg-white overflow-y-scroll">
              <div class="w-full">
                <slot name="carousel"></slot>
              </div>
              <div class="w-full p-4">
                <div>
                  <p>Nombre del proyecto:</p>
                  <p
                    v-text="proyectTitle"
                    class="text-3xl font-thin text-black"
                  ></p>
                </div>
                <div>
                  <p>Responsabilidades en el proyecto:</p>
                  <p v-text="proyectTasks"></p>
                </div>
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

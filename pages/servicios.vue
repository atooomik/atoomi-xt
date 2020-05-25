<template>
  <section>
    <div class="contain">
      <div class="flex min-h-partial items-center">
        <div class="w-1/2">
          <p class="slogan text-6xl border-b-4 border-atoom-dk">
            Servicios
          </p>
        </div>
        <div class="w-1/2">
          <img
            src="../assets/images/svg-draws/researching.svg"
            alt="services asset"
          />
        </div>
      </div>
      <div>
        <p>Un desarrollador puede hacer muchas cosas por ti,</p>
        <p>
          Abajo, puedes saber más a detalle los servicios en los que me
          especializo
        </p>
      </div>
      <div class="my-6 flex justify-around">
        <template v-for="(service, i) in allServices">
          <div :key="i" class="flex">
            <services
              :imgSrc="service.image"
              :title="service.name"
              @showText="clickedItem(i)"
            />
          </div>
        </template>
      </div>
      <div class="mx-auto">
        <div v-if="showSelectedItem" class="init-wrapper">
          <p v-text="showSelectedItem.desc" class="init-el"></p>
          <img
            :src="showSelectedItem.image"
            class="init-el h-64"
            alt="selected Item Asset"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Services from "../components/HoverCards.vue";
import proyecto from "../assets/images/svg-draws/portfolio.svg";
import experiencia from "../assets/images/svg-draws/user-flow.svg";
import mantenimiento from "../assets/images/svg-draws/experience-design.svg";
export default {
  name: "Servicios",
  data: () => ({
    selectedItem: null,
    showWrapper: false,
    allServices: [
      {
        image: proyecto,
        name: "Desarrollo web",
        desc:
          "Lorem ipsum dolor 1 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        i: 0
      },
      {
        image: experiencia,
        name: "User Experience",
        desc:
          "Lorem ipsum dolor 2 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        i: 1
      },
      {
        image: mantenimiento,
        name: "Mantenimiento",
        desc:
          "Lorem ipsum dolor 3 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        i: 2
      }
    ]
  }),
  components: {
    Services
  },
  computed: {
    showSelectedItem() {
      if (this.selectedItem === null) return null;
      return this.allServices[this.selectedItem] || null;
    }
  },
  methods: {
    clickedItem(index) {
      this.selectedItem = index;
      this.showWrapper = true;
      console.log(this.selectedItem, this.showWrapper);
    }
  }
};
</script>

<style lang="scss">
@keyframes growWrapper {
  from {
    max-height: 0;
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  to {
    max-height: 600px;
    opacity: 1;
  }
}
.init-wrapper {
  background: theme("backgroundColor.atoom.ylw");
  padding: theme("padding.8");
  opacity: 0;
  animation: growWrapper 800ms ease forwards;
}

@keyframes showElements {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
.init-el {
  opacity: 0;
  animation: showElements 500ms ease forwards;
  animation-delay: 1s;
}
</style>

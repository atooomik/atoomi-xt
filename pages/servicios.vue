<template>
  <section>
    <div class="contain overflow-hidden">
      <div class="flex min-h-partial items-center">
        <div class="w-1/2">
          <p class="entrance slogan text-6xl border-b-4 border-atoom-dk">
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
      <div class="mx-auto my-6">
        <div v-if="showSelectedItem" class="init-wrapper">
          <div class="init-el w-1/2 mx-auto bg-atoom-dk">
            <p
              v-text="showSelectedItem.name"
              class="text-5xl text-atoom-ylw text-center"
            ></p>
          </div>
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

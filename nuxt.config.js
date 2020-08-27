/*
 ** Headers of the page
 */
const isProd = process.env.NODE_ENV === "production";

const head = {
  meta: [
    {
      hid: "keywords",
      name: "keywords",
      content:
        "Desarrollo Web,Diseño Web,diseño de sitios web,desarrollo independiente,desarrollador independiente,ux, diseño responsivo, diseñador web"
    },
    {
      hid: "description",
      name: "description",
      content:
        "Desarrollador web independiente, orientado a la creación de sitios web visualmente atractivos, funcionales y que provean una gran experiencia de usuario."
    },
    {
      hid: "og:title",
      property: "og:title",
      content: "atoomik Consultoría web independiente"
    },
    {
      hid: "og:url",
      property: "og:url",
      content: "https://www.atoomikdev.com/"
    },
    {
      hid: "og:description",
      property: "og:description",
      content:
        "Desarrollador web independiente, orientado a la creación de sitios web visualmente atractivos, funcionales y que provean una gran experiencia de usuario."
    },
    {
      hid: "og:image:url",
      property: "og:image:url",
      content: "https://www.atoomikdev.com/files/images/og-image.png"
    },
    {
      hid: "og:image:type",
      property: "og:image:type",
      content: "image/png"
    },
    {
      hid: "og:image:width",
      property: "og:image:width",
      content: "1500"
    },
    {
      hid: "og:image:height",
      property: "og:image:height",
      content: "785"
    },
    {
      hid: "og:image:alt",
      property: "og:image:alt",
      content: "Portada de prueba del sitio web."
    }
  ],
  link: []
};

/*
 ** Global CSS
 */

let css = [
  "~assets/styles/base.scss",
  "~assets/styles/utilities.scss",
  "~assets/styles/components.scss"
];

/*
 ** Plugins to load before mounting the App
 */

let modules = ["@nuxtjs/tailwindcss"];

const nuxtConfig = {
  mode: "universal",
  head,
  css,
  loading: {
    color: "3B8070"
  },
  plugins: ["~/plugins/font-awesome.js"],
  watch: ["./tailwind.config.js"],
  build: {
    transpile: ["vue-carousel"],
    parallel: !isProd,
    cache: !isProd,
    extractCSS: isProd,
    extend(config) {}
  },
  modules,
  styleResources: {
    scss: ["~/assets/styles/_variables.scss"]
  },
  purgeCSS: {
    enabled: false
  }
};

export default nuxtConfig;

/*
 ** Headers of the page
 */
const isProd = process.env.NODE_ENV === "production";

const head = {
  title: process.env.npm_package_name || "",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    {
      hid: "description",
      name: "description",
      content: process.env.npm_package_description || ""
    }
  ],
  link: []
};

/*
 ** Global CSS
 */

let css = [
  "~assets/styles/base.scss",
  "~assets/styles/components.scss",
  "~assets/styles/utilities.scss",
  "~assets/styles/custom-utilities.scss"
];

/*
 ** Plugins to load before mounting the App
 */
const postCSSConfig = {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    cssnano: {
      preset: "default",
      discardComments: {
        removeAll: true
      },
      zindex: 100
    }
  }
};

let modules = ["@nuxtjs/svg-sprite"];

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
    postcss: postCSSConfig,
    parallel: !isProd,
    cache: !isProd,
    extractCSS: isProd,
    extend(config) {}
  },
  modules,
  styleResources: {
    scss: ["~/assets/styles/_variables.scss"]
  },
  svgSprite: {
    input: "~/assets/sprite/svg",
    output: "~/assets/sprite/gen"
  }
  /*purgeCSS: {
    mode: "webpack",
    whitelist: ["svg-inline--fa"],
    whitelistPatterns: [
      /[\w|-]+-(enter|leave|move)-?(active|to)?/,
      /^fa-/,
      /-fa$/
    ],
    whitelistPatternsChildren: []
  }*/
};

export default nuxtConfig;

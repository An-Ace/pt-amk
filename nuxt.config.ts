// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  ssr: false,
  modules: [
    "nuxtjs-naive-ui",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/google-fonts",
    "@nuxtjs/device"
  ],
  css: [
    "~/assets/scss/main.scss",
  ],
  components: [
		{
			path: "~/components",
			pathPrefix: false
		},
	],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      'Nunito+Sans': {
        wght: '200..900',
        ital: '200..700',
      },
      'Playfair+Display': true,
    },
  }
})

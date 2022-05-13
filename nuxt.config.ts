import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
	buildModules: ['nuxt-windicss', '@pinia/nuxt'],
	runtimeConfig: {
		public: {
			POSTCODE: process.env.POSTCODE,
			NAME: process.env.NAME,
			PASSWORD: process.env.PASSWORD,
		},
	},
});

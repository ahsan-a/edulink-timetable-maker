import { PiniaHistory } from 'pinia-plugin-history';

export default defineNuxtPlugin((nuxtApp) => nuxtApp.$pinia.use(PiniaHistory));

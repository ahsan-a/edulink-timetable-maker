import { PiniaUndo } from 'pinia-undo';
export default defineNuxtPlugin((nuxtApp) => nuxtApp.$pinia.use(PiniaUndo));

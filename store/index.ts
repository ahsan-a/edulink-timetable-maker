import { defineStore } from 'pinia';
export const useTestStore = defineStore('test', {
	state: () => ({ foo: 0 }),
});

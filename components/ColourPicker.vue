<template>
	<div>
		<button
			class="w-5 h-5 rounded-sm outline-1 outline-offset-1 outline outline-base-content hover:outline-2"
			@click="toggle = !toggle"
			:style="[!custom ? { 'background-color': `hsl(var(--${colour}))` } : { 'background-color': colour }]"
		></button>
		<div v-if="toggle" class="w-44 h-50 bg-base-300 p-4 rounded-lg fixed">
			<h1 class="font-bold text-sm mb-2">Theme Colours</h1>
			<div class="flex flex-row flex flex-wrap">
				<button
					v-for="code in Object.keys(themeCodesKey)"
					class="w-5 rounded-sm h-5 m-0.5 outline-0.25 outline outline-white"
					:style="{ 'background-color': `hsl(var(--${code}))` }"
					@click="$emit('setColour', code, false)"
				></button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { themeCodes, themeCodesKey } from '~/exports/themes';
const props = defineProps<{ colour: string; custom: boolean }>();

const toggle = ref(false);
</script>

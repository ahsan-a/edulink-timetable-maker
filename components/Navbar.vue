<template>
	<div class="navbar" :class="`bg-base-${bg}`">
		<div class="flex-1">
			<NuxtLink to="/" class="btn btn-ghost normal-case text-xl font-bold" v-if="W > 600">
				<span class="inline text-primary">Edulink&nbsp;</span>
				<span class="inline">Timetable Maker</span>
			</NuxtLink>
			<a class="btn btn-ghost normal-case text-xl font-bold" v-else>
				<span class="inline text-primary">E</span>
				<span class="inline">TM</span>
			</a>
		</div>
		<ul class="menu menu-horizontal p-0 font-medium">
			<li><NuxtLink to="/app">Open App</NuxtLink></li>
			<select class="select select-bordered mx-3 py-1 w-33" v-model="currentTheme" @change="setTheme(($event.target as any).value)">
				<option v-for="theme in themes">{{ theme }}</option>
			</select>
		</ul>
		<div class="flex-none">
			<a href="https://github.com/ahsan-a/edulink-timetable-maker" target="_blank" class="btn btn-square btn-ghost text-base-content">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="inline-block w-8 h-8 fill-current">
					<path
						d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
					/>
				</svg>
			</a>
		</div>
	</div>
</template>

<script setup lang="ts">
import { themes } from '~/exports/themes';
import { setTheme } from '~/composables/theme';
const currentTheme = useCurrentTheme();

defineProps({
	bg: {
		default: 100,
		type: Number,
	},
});

const W = ref(0);
onMounted(() => {
	W.value = window.innerWidth;
	window.addEventListener('resize', () => {
		W.value = window.innerWidth;
	});
});
</script>

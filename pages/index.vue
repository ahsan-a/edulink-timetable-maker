<template>
	<div :data-theme="currentTheme" class="flex min-h-screen flex-col">
		<Navbar class="flex-grow-0 flex-shrink basis-auto" :bg="100" />
		<div class="hero bg-base-100 flex-grow flex-shrink basis-auto">
			<div class="hero-content flex-col lg:flex-row-reverse">
				<div class="text-center lg:text-left lg:ml-10 lg:w-590px">
					<p class="text-5xl font-bold">
						<span class="inline">
							A
							<v-typical wrapper="h1" :loop="Infinity" class="text-5xl text-primary inline" :steps="steps"></v-typical>
							timetable in 5
						</span>
						minutes.
					</p>
					<p class="pt-6 text-base-content"
						>Level up your timetable with Ahsan's new, fast and simple automated tool, working directly with the Edulink API.
					</p>
					<p class="pt-2 text-base-content text-warning" v-if="mobileCheck()">Please be aware that this site is not intended for mobile.</p>
				</div>
				<div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
					<div class="card-body">
						<NuxtLink to="/app" class="btn btn-primary hover:bg-primary-focus">get started</NuxtLink>
						<select
							class="select select-bordered w-full max-w-xs"
							v-model="currentTheme"
							@change="setTheme(($event.target as any).value)"
						>
							<option v-for="theme in themes">{{ theme }}</option>
						</select>
						<span>
							<button class="link link-primary text-xs font-semibold float-left inline" @click="incTheme">Next theme</button>
							<button class="link link-primary text-xs font-semibold float-right inline" @click="setTheme('dracula')"
								>Reset theme</button
							>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import VTypical from 'vue-typical';
import { themes } from '~/exports/themes';
import { setTheme } from '~~/composables/theme';
import { mobileCheck } from '~/composables/mobileCheck';

let currentTheme = useCurrentTheme();
onMounted(() => {
	setTheme();
});

const steps = ['next-level', 2000, 'beautiful', 2000, 'functional', 2000, 'printable', 2000, 'simple', 2000, 'minimalist', 2000, 'colourful', 2000];

let i = ref(themes.indexOf(currentTheme.value) || 22);
function incTheme() {
	i.value = (themes.indexOf(currentTheme.value) + 1) % themes.length;
	setTheme(themes[i.value]);
}
</script>

<style>
html,
body {
	height: 100%;
}
</style>

<template>
	<div :data-theme="currentTheme" class="flex min-h-screen flex-col">
		<Navbar class="flex-grow-0 flex-shrink basis-auto" :bg="100" />
		<div class="flex-grow flex-shrink basis-auto hero bg-base-100">
			<!-- School Postcode -->
			<AppLogin v-if="appState === AppState.Login" />
			<AppTimetable v-if="appState === AppState.WeekChoosing" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { AppState } from '~/exports';
let currentTheme = useCurrentTheme();
onMounted(() => setTheme());
useHead({
	meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1' }],
});

const appState = useState<AppState>('appState', () => AppState.Login);
</script>

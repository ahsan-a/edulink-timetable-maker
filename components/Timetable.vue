<template>
	<div>
		<table class="table w-full my-2 table-auto">
			<thead>
				<tr>
					<th
						v-if="mods.$state.periodNumber"
						class="bg-base-200"
						:style="{ 'background-color': `hsl(var(--${mods.$state.titleHighlight}))` }"
					></th>

					<th
						class="bg-base-100"
						:style="[
							['t', 'tl'].includes(mods.$state.titleHighlightPos)
								? !mods.$state.titleHighlightCustom
									? {
											'background-color': `hsl(var(--${mods.$state.titleHighlight}))`,
									  }
									: { 'background-color': mods.$state.titleHighlight }
								: {},
						]"
						v-if="mods.$state.dayPosition === 'left' && mods.$state.periodNumber"
						v-for="(_, i) in week.days[0].periods.length"
						>{{ i + 1 }}</th
					>
					<th v-if="mods.$state.dayPosition === 'top'" v-for="day in week.days">{{ day.name }}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-if="mods.$state.dayPosition === 'left'" v-for="day in week.days">
					<!-- i'm sorry -->
					<th
						class="bg-base-100 h-10 w-20"
						:style="[
							['l', 'tl'].includes(mods.$state.titleHighlightPos)
								? !mods.$state.titleHighlightCustom
									? {
											'background-color': `hsl(var(--${mods.$state.titleHighlight}))`,
									  }
									: { 'background-color': mods.$state.titleHighlight }
								: {},
						]"
						>{{ day.name }}</th
					>
					<td v-for="lesson in day.lessons" class="text-sm h-10 w-20">{{ lesson.teaching_group.subject }}</td>
				</tr>
				<tr v-if="mods.$state.dayPosition === 'top'" v-for="i in week.days[0].periods.length">
					<th v-if="mods.$state.periodNumber">{{ i }}</th>
					<td v-for="j in week.days.length" class="text-sm">{{ week.days[j - 1].lessons[i - 1].teaching_group.subject }}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup lang="ts">
import { AppState } from '~/exports';
import { Ref } from 'vue';
import { useTimetable, useModifications } from '~/store/timetable';

const appState: Ref<AppState> = useState('appState');
const Timetable = useTimetable();
const mods = useModifications();

const props = defineProps<{ week: typeof Timetable.$state[0] }>();
</script>

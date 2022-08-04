<template>
	<div class="hero-content flex-col">
		<h1 class="text-7xl font-bold">Step Three.</h1>
		<p class="text-xl font-medium">Make global edits to your final timetable.</p>
		<button class="link link-primary ml-0" @click="appState = AppState.Week">&lt; Go back</button>
		<div class="flex flex-row mt-2">
			<div class="overflow-x-auto">
				<table class="table w-full mb-3" v-for="week in Timetable.$state">
					<!-- head -->
					<thead>
						<tr>
							<th></th>
							<th v-for="day in week.days">{{ day.name }}</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="i in week.days[0].periods.length">
							<th>{{ i }}</th>
							<td v-for="j in week.days.length" class="text-sm">{{ week.days[j - 1].lessons[i - 1].teaching_group.subject }}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="ml-6 card w-145 bg-base-300 shadow-xl">
				<div class="card-body">
					<h1 class="card-title text-2xl">General Edits</h1>
					<div class="form-control w-full max-w-xs">
						<label class="label">
							<span class="label-text">Day Position</span>
						</label>
						<select class="select select-bordered">
							<option>Top</option>
							<option>Left</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { AppState } from '~/exports';
import { Ref } from 'vue';
import { useTimetable } from '~/store/timetable';
const appState: Ref<AppState> = useState('appState');
const Timetable = useTimetable();
</script>

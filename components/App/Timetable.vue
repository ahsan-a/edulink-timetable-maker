<template>
	<div class="hero-content flex-col">
		<div class="text-center min-w-max">
			<h1 class="text-7xl font-bold">Step 2.</h1>
			<p class="pt-4 text-xl">Customise your weeks.</p>
		</div>
		<div class="card flex-shrink-0 w-full max-w-full shadow-2xl bg-base-200">
			<div class="card-body" v-if="timetableStatus === 'week'">
				<button class="link link-primary ml-0" @click="appState = AppState.Login">&lt; Go back</button>
				<div class="form-control">
					<label class="label">
						<span class="label-text font-semibold">Select a date</span>
					</label>
					<input type="date" placeholder="Select a date" v-model="date" class="input input-bordered" @change="getTimetable()" />
					<p class="text-xs italic mt-2"
						>Click the calendar icon to select. If all of your weeks don't appear here in holidays, select a date in the future. Ensure
						your date has all the days needed.</p
					>
				</div>
				<label class="label">
					<span class="label-text font-semibold mt-3">Select Weeks: </span>
				</label>
				<div class="form-control" v-for="week in timetable.weeks">
					<label class="label cursor-pointer">
						<span class="label-text">{{ week.name }}</span>
						<input type="checkbox" v-model="checked[week.name]" />
					</label>
				</div>
				<div class="form-control mt-6">
					<p class="mb-2 text-xs font-medium text-error">{{ errormsg }}</p>
					<button class="btn btn-primary" @click="continueToFilter">Continue</button>
				</div>
			</div>

			<div class="card-body" v-if="timetableStatus === 'filter'">
				<button class="link link-primary ml-0" @click="timetableStatus = 'week'">&lt; Go back</button>
				<p class="text-sm font-medium text-center text-warning mt-2"
					>Please be aware that this is not the final timetable. Customisation will come later. Deselect the boxes next to unwanted rows.</p
				>
				<div class="overflow-x-auto">
					<table class="table w-full mb-4" v-for="week in selectedWeeks">
						<thead>
							<tr>
								<th></th>
								<th v-for="day in week.days">{{ day.original_name }}</th>
							</tr>
						</thead>
						<tbody>
							<!-- get amount of lessons in all into array and find max value -->
							<tr v-for="i in week.days[0].periods.length">
								<th><input type="checkbox" v-model="rowsToContinue[i - 1]" /></th>
								<th v-for="j in week.days.length" class="text-sm">{{ week.days[j - 1].lessons[i - 1].teaching_group.subject }}</th>
							</tr>
						</tbody></table
					>
				</div>
				<button class="btn btn-primary" @click="goGlobalEdit">Continue</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { AppState } from '~/exports';
import { Ref } from 'vue';
import { URL } from 'url';

const appState = useState('appState');

const timetableStatus: Ref<'week' | 'filter'> = ref('week');

const Edulink = useEdulink();

const date = ref(new Date().toISOString().split('T')[0]);
const timetable = ref((await Edulink.Edulink_Raw.Timetable(date.value)).result);

let checked = ref(Object.fromEntries(timetable.value.weeks.map((x) => [x.name, false])));

async function getTimetable() {
	let apiTimetable = (await Edulink.Edulink_Raw.Timetable(date.value)).result;
	checked.value = Object.fromEntries(apiTimetable.weeks.map((x) => [x.name, false]));
	timetable.value = apiTimetable;
}

const selectedWeeks: Ref<typeof timetable.value.weeks> = ref([]);
const rowsToContinue = ref([]);

const errormsg = ref('');

function continueToFilter() {
	const errormsg = ref('');
	if (!Object.values(checked.value).find((x) => x)) return (errormsg.value = 'You must tick at least 1 item.');
	errormsg.value = '';

	selectedWeeks.value = [];
	for (const i in checked.value) {
		if (checked.value[i]) selectedWeeks.value.push(timetable.value.weeks.find((x) => x.name === i));
	}
	timetableStatus.value = 'filter';

	rowsToContinue.value = selectedWeeks.value[0].days[0].periods.map((x) => true);
}

const editingWeeks = useState<typeof selectedWeeks.value>('editingWeeks');
function goGlobalEdit() {
	// get all rows where false continue
	let deleteRows = rowsToContinue.value.map((x, i) => (x ? null : i)).filter((x) => x !== null);

	editingWeeks.value = JSON.parse(JSON.stringify(selectedWeeks.value));

	for (let i of deleteRows) {
		for (let j = 0; j < editingWeeks.value.length; j++) {
			for (let k = 0; k < editingWeeks.value[j].days.length; k++) {
				// periods and lessons
				editingWeeks.value[j].days[k].periods.splice(i, 1);
				editingWeeks.value[j].days[k].lessons.splice(i, 1);
			}
		}
	}

	console.log(selectedWeeks.value[0].days[0].lessons, editingWeeks.value[0].days[0].lessons);
}
</script>

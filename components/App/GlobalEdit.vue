<template>
	<div class="flex-grow flex-shrink basis-auto hero bg-base-100">
		<div class="flex-col">
			<h1 class="text-7xl font-bold text-center">Step Three.</h1>
			<p class="text-xl font-medium text-center mt-3">Make global edits to your final timetable.</p>
			<button class="link link-primary ml-0" @click="appState = AppState.Week">&lt; Go back</button>
			<div class="flex flex-col xl:flex-row-reverse mt-2">
				<div>
					<div class="xl:ml-6 card w-full mb-7 xl:w-145 bg-base-200 shadow-xl">
						<div class="card-body">
							<h1 class="card-title text-xl font-bold">Temporary Display Settings</h1>

							<div class="form-control">
								<label class="label cursor-pointer">
									<span class="label-text">Timetable Border</span>
									<input type="checkbox" v-model="displaySettings.background" />
								</label>
							</div>

							<div class="form-control">
								<label class="label cursor-pointer">
									<span class="label-text">Timetable Border Colour</span>
									<input type="color" :disabled="!displaySettings.background" v-model="displaySettings.backgroundColour" />
								</label>
							</div>

							<h1 class="card-title text-xl font-bold mt-3">General Edits</h1>

							<!-- Display period number -->
							<div class="form-control">
								<label class="label cursor-pointer">
									<span class="label-text">Display Period Number</span>
									<input type="checkbox" v-model="mods.$state.periodNumber" />
								</label>
							</div>

							<!-- Day Position -->
							<div class="form-control w-full max-w-xs">
								<label class="label">
									<span class="label-text">Day Position</span>
								</label>
								<select class="select select-bordered" v-model="mods.$state.dayPosition">
									<option value="left">Left</option>
									<option value="top">Top</option>
								</select>
							</div>

							<!-- Day Position -->
							<div class="form-control w-full max-w-xs">
								<label class="label">
									<span class="label-text">Title Highlighting</span>
								</label>
								<select class="select select-bordered" v-model="mods.$state.titleHighlightPos">
									<option value="tl">Top + Left</option>
									<option value="t">Top</option>
									<option value="l">Left</option>
								</select>
							</div>
							<div class="form-control w-full max-w-xs flex flex-row mt-2">
								<ColourPicker
									:colour="mods.$state.titleHighlight"
									:custom="mods.$state.titleHighlightCustom"
									@setColour="
										(colour, custom) => {
											mods.$state.titleHighlight = colour;
											mods.$state.titleHighlightCustom = custom;
										}
									"
								/>
								<span class="ml-2 text-sm">Title Highlight Colour</span>
							</div>
						</div>
					</div>
				</div>
				<div
					class="overflow-x-auto px-2 rounded-lg"
					:style="{ backgroundColor: displaySettings.background ? displaySettings.backgroundColour : 'transparent' }"
				>
					<Timetable v-for="week in TimetableStore.$state" :week="week" />
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { AppState } from '~/exports';
import { Ref, reactive } from 'vue';
import { useTimetable, useModifications } from '~/store/timetable';
import ColourPicker from '~/components/ColourPicker.vue';

const appState: Ref<AppState> = useState('appState');
const TimetableStore = useTimetable();
const mods = useModifications();

const displaySettings = reactive({
	background: true,
	backgroundColour: '#ffffff',
});
</script>

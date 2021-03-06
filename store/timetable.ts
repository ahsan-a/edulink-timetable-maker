import { defineStore } from 'pinia';
import { useEdulink } from '~/composables/states';
const Edulink = useEdulink();

import { Edulink_Timetable_Day } from 'edulink-api/build/Raw_Edulink_Response_Types/Edulink_Timetable';

const useTimetable = defineStore('Timetable', {
	state: (): { name: string; days: Edulink_Timetable_Day[] }[] => ({}),
});

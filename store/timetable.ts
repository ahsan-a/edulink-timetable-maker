import { defineStore } from 'pinia';
import { useEdulink } from '~/composables/states';
import { themeCodes } from '~/exports/themes';

const Edulink = useEdulink();

import { Edulink_Timetable_Day } from 'edulink-api/build/Raw_Edulink_Response_Types/Edulink_Timetable';

export const useTimetable = defineStore('Timetable', {
	//@ts-ignore
	state: (): { name: string; days: Edulink_Timetable_Day[] }[] => ({}),
});

export const useModifications = defineStore('Modifications', {
	state: (): {
		periodNumber: boolean;
		dayPosition: 'left' | 'top';
		titleHighlightPos: 'tl' | 't' | 'l';
		titleHighlightCustom: boolean;
		titleHighlight: themeCodes | string;
	} => ({
		periodNumber: true,
		dayPosition: 'left',
		titleHighlightPos: 'tl',
		titleHighlightCustom: false,
		titleHighlight: 'b2',
	}),
});

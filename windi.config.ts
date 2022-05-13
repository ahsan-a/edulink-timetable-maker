import { defineConfig, transform } from 'windicss/helpers';

export default defineConfig({
	plugins: [transform('daisyui')],
	daisyui: {
		themes: [
			'light',
			'dark',
			{
				nordDark: {
					primary: '#88C0D0' /* Primary color */,
					'primary-focus': '#8FBCBB' /* Primary color - focused */,
					'primary-content': '#D8DEE9' /* Foreground content color to use on primary color */,

					secondary: '#81A1C1' /* Secondary color */,
					'secondary-focus': '#5E81AC' /* Secondary color - focused */,
					'secondary-content': '#D8DEE9' /* Foreground content color to use on secondary color */,

					accent: '#434C5E' /* Accent color */,
					'accent-focus': '#4C566A' /* Accent color - focused */,
					'accent-content': '#B48EAD' /* Foreground content color to use on accent color */,

					neutral: '#2E3440' /* Neutral color */,
					'neutral-focus': '#3B4252' /* Neutral color - focused */,
					'neutral-content': '#D8DEE9' /* Foreground content color to use on neutral color */,

					'base-400': '#2E3440' /* Base color of page, used for blank backgrounds */,
					'base-300': '#3B4252' /* Base color, a little darker */,
					'base-200': '#434C5E' /* Base color, even more darker */,
					'base-100': '#4C566A',
					'base-content': '#ECEFF4' /* Foreground content color to use on base color */,

					info: '#EBCB8B' /* Info */,
					success: '#A3BE8C' /* Success */,
					warning: '#D08770' /* Warning */,
					error: '#BF616A' /* Error */,
				},
				nordLight: {
					primary: '#8FBCBB' /* Primary color */,
					'primary-focus': '#88C0D0' /* Primary color - focused */,
					'primary-content': '#D8DEE9' /* Foreground content color to use on primary color */,

					secondary: '#81A1C1' /* Secondary color */,
					'secondary-focus': '#5E81AC' /* Secondary color - focused */,
					'secondary-content': '#D8DEE9' /* Foreground content color to use on secondary color */,

					accent: '#434C5E' /* Accent color */,
					'accent-focus': '#4C566A' /* Accent color - focused */,
					'accent-content': '#B48EAD' /* Foreground content color to use on accent color */,

					neutral: '#2E3440' /* Neutral color */,
					'neutral-focus': '#3B4252' /* Neutral color - focused */,
					'neutral-content': '#D8DEE9' /* Foreground content color to use on neutral color */,

					'base-100': '#ECEFF4' /* Base color of page, used for blank backgrounds */,
					'base-200': '#E5E9F0' /* Base color, a little darker */,
					'base-300': '#D8DEE9' /* Base color, even more darker */,
					'base-content': '#2E3440' /* Foreground content color to use on base color */,

					info: '#EBCB8B' /* Info */,
					success: '#A3BE8C' /* Success */,
					warning: '#D08770' /* Warning */,
					error: '#BF616A' /* Error */,
				},
			},
			'cupcake',
			'bumblebee',
			'emerald',
			'corporate',
			'synthwave',
			'retro',
			'cyberpunk',
			'valentine',
			'halloween',
			'garden',
			'forest',
			'aqua',
			'lofi',
			'pastel',
			'fantasy',
			'wireframe',
			'black',
			'luxury',
			'dracula',
			'cmyk',
			'autumn',
			'business',
			'acid',
			'lemonade',
			'night',
			'coffee',
			'winter',
		],
	},
});

<template>
	<div class="hero-content flex-col">
		<h1 class="text-7xl font-bold">Step One.</h1>
		<p class="text-xl font-medium">Enter your edulink login details.</p>
		<div class="card flex-shrink-0 w-full w-22rem shadow-2xl bg-base-200">
			<form class="card-body" @submit.prevent="login">
				<p class="text-xs text-error font-medium" v-if="errorMsg">
					<span class="font-extrabold">ERROR: </span>
					{{ errorMsg }}
				</p>
				<div class="form-control">
					<label class="label">
						<span class="label-text font-medium">School Postcode</span>
					</label>
					<input
						type="text"
						name="postcode"
						placeholder="School Postcode"
						class="input input-bordered bg-base-200"
						v-model="form.postcode"
						autocomplete="postal-code"
						required
					/>
				</div>
				<div class="form-control">
					<label class="label">
						<span class="label-text font-medium">Username</span>
					</label>
					<input
						type="text"
						name="username"
						placeholder="Username"
						class="input input-bordered bg-base-200"
						autocomplete="username"
						v-model="form.username"
						required
					/>
				</div>
				<div class="form-control">
					<label class="label">
						<span class="label-text font-medium">Password</span>
					</label>
					<input
						type="password"
						placeholder="Password"
						class="input input-bordered bg-base-200"
						autocomplete="current-password"
						v-model="form.password"
						required
					/>
				</div>
				<div class="form-control mt-6">
					<button class="btn btn-primary" type="submit">Login</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup lang="ts">
import { AppState } from '~/exports';

const form = reactive({
	postcode: '',
	username: '',
	password: '',
});

const errorMsg = ref('');

const Edulink = useEdulink();

const appState = useState('appState');

async function login() {
	// is actually used
	const errormsg = ref('');
	if (!form.password || !form.postcode || !form.username) return;

	try {
		await Edulink.Authenticate({
			school_code: form.postcode,
			username: form.username,
			password: form.password,
		});
	} catch (e) {
		return (errorMsg.value = e.message);
	}

	errorMsg.value = '';
	appState.value = AppState.WeekChoosing;
}
</script>

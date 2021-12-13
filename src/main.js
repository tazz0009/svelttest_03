import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'tazz0009',
    navItems: ["Current Polls", "Add New Poll"]
	}
});

export default app;
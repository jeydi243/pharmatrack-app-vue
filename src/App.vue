<template>
	<transition name="slide-fade">
		<router-view default />
	</transition>
</template>

<script>
	export default {
		name: "app",
		data() {
			return {

			};
		},
		created() {

		},
		computed: {

		},
		methods: {

		}
	}
</script>

<style scoped>
	.slide-fade-enter-active {
		transition: all .3s ease;
	}

	.slide-fade-leave-active {
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}

	.slide-fade-enter,
	.slide-fade-leave-to

	/* .slide-fade-leave-active below version 2.1.8 */
		{
		transform: translateX(10px);
		opacity: 0;
	}
</style>
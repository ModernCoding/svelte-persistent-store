<script>
	import { userName } from './stores'
</script>


<main>

	<h1>{ $userName }</h1>
	<h2>{ $userName }</h2>
	<h3>{ $userName }</h3>
	<h4>{ $userName }</h4>
	<h5>{ $userName }</h5>
	<h6>{ $userName }</h6>

	<input type="text" bind:value={ $userName }>

</main>


<style>

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1, h2, h3, h4, h5, h6 {
		color: #ff3e00;
		text-transform: uppercase;
		font-weight: 100;
	}


	h6 { font-size: 5px }
	h5 { font-size: 8px }
	h4 { font-size: 13px }
	h3 { font-size: 21px }
	h2 { font-size: 34px }
	h1 { font-size: 55px }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

</style>
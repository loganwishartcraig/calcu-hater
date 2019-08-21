<script>

	// import { mathExpressionStore } from './stores';
	import MathInput from './components/MathInput/MathInput.svelte';
	// import MathTexRenderer from './components/MathTexRenderer/MathTexRenderer.svelte';
	import MathInputTexRender from './components/MathInputTexRender/MathInputTexRender.svelte';
	import MathButtonPanel from './components/MathButtonPanel/MathButtonPanel.svelte';
	import VariableList from './components/VariableList/VariableList.svelte';
	import VariableAddForm from './components/VariableAddForm/VariableAddForm.svelte';
	import InsultDisplay from './components/InsultDisplay/InsultDisplay.svelte';
	import SolutionDisplay from './components/SolutionDisplay/SolutionDisplay.svelte';

</script>


<main class="app-container">

	<div class="history-container">
		[[HISTORY]]
	</div>

	<div class="solution-container">
		<InsultDisplay />
		<SolutionDisplay />
	</div>

	<div class="variable-container">
		<heading>Define Variable</heading>
		<VariableAddForm />
		<heading>Variables:</heading>
		<VariableList />
	</div>

	<div class="input-container">
		<div class="flex flex-col h-full">
			<div class="mb-2 text-center">
				<MathInputTexRender className="text-5xl" let:error>
					{#if error}
						<span class="text-5xl text-red-500">Whoa bud. {error}</span>
					{:else}
						<i class="text-5xl">Well?</i>
					{/if}
				</MathInputTexRender>
			</div>
			<div class="mb-2">
				<MathInput />
			</div>
			<MathButtonPanel className="flex-grow" />
		</div>
	</div>

</main>

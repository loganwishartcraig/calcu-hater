<script>

	import MathInput from './components/MathInput/MathInput.svelte';
	import MathInputTexRender from './components/MathInputTexRender/MathInputTexRender.svelte';
	import MathButtonPanel from './components/MathButtonPanel/MathButtonPanel.svelte';
	import VariableList from './components/VariableList/VariableList.svelte';
	import VariableAddForm from './components/VariableAddForm/VariableAddForm.svelte';
	import InsultDisplay from './components/InsultDisplay/InsultDisplay.svelte';
	import SolutionDisplay from './components/SolutionDisplay/SolutionDisplay.svelte';
	import HistoryList from './components/HistoryList/HistoryList.svelte';

</script>


<main class="app-container">

	<div class="history-container">
		<HistoryList />
	</div>

	<div class="solution-container flex items-center justify-center text-5xl text-center">
		<div>
			<InsultDisplay />
			<div>
			<SolutionDisplay classList="text-blue-500">
				<span slot="pre">Ans: </span>
			</SolutionDisplay>
			</div>
		</div>
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
				<MathInputTexRender className="text-3xl" let:error>
					<div slot="error"><span class="text-red-500">Whoa bud. {error}</span></div>
					<div slot="waiting" class="text-3xl"><i>Well...?</i></div>
				</MathInputTexRender>
			</div>
			<div class="mb-2">
				<MathInput />
			</div>
			<MathButtonPanel className="flex-grow" />
		</div>
	</div>

</main>

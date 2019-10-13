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


<main class="h-screen flex">

	<div class="flex flex-col justify-center w-2/3">

		<div class="flex flex-col items-center justify-center text-5xl text-center h-64">
			<InsultDisplay />
			<div>
				<SolutionDisplay classList="text-blue-500">
					<span slot="pre">Ans: </span>
				</SolutionDisplay>
			</div>
		</div>

		<div class="flex-1">
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

	</div>

	<div class="flex flex-col justify-center w-1/3 px-2">

		<div class="h-64">
			<h3 class="font-bold text-center p-1 border-b border-gray-400">History</h3>
			<HistoryList />
		</div>

		<div class="flex-1">
			<h3 class="font-bold text-center p-1 border-b border-gray-400">Variables</h3>
			<VariableAddForm />
			<VariableList />
		</div>

	</div>

</main>

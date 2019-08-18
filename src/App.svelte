<script>

	import MathInput from './components/MathInput/MathInput.svelte';
	import MathParser from './components/MathParser/MathParser.svelte';
	import MathTexRenderer from './components/MathTexRenderer/MathTexRenderer.svelte';
	import MathButtonPanel from './components/MathButtonPanel/MathButtonPanel.svelte';
	import VariableList from './components/VariableList/VariableList.svelte';
	import VariableAddForm from './components/VariableAddForm/VariableAddForm.svelte';

	const handleSolveClick = () => {
		console.warn('solving!');
	}

</script>

<p>Test</p>

<MathParser let:tex let:solve >

	<div>
		<MathTexRenderer {tex} />
	</div>

	<MathInput />

	<p>Define Variable</p>

	<VariableAddForm />

	<p>Variables:</p>
	<VariableList />

	<div>
		<MathButtonPanel />
	</div>

	<button on:click={solve} type="button">Solve</button>

</MathParser>

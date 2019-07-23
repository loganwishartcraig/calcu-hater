<script>

	import MathInput from './components/MathInput/MathInput.svelte';
	import MathParser from './components/MathParser/MathParser.svelte';
	import MathTexRenderer from './components/MathTexRenderer/MathTexRenderer.svelte';
	import VariableList from './components/VariableList/VariableList.svelte';
	import VariableAddForm from './components/VariableAddForm/VariableAddForm.svelte';

	let inputVal = '';
	let variables = [];

	const handleAddVariable = ({detail: {name}}) => {
		console.log('evt: handleAddVariable', {name})
		variables = [...variables, {name, value: ''}];
	};

</script>

<p>Test</p>

<MathInput bind:value={inputVal} />
<MathParser bind:value={inputVal} let:parsed >

	<div>
		<MathTexRenderer {parsed} />
	</div>

</MathParser>

<p>Define Variable</p>
<VariableAddForm on:submit={handleAddVariable} />

<p>Variables:</p>
<VariableList {variables} />

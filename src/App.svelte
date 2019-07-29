<script>

	import MathInput from './components/MathInput/MathInput.svelte';
	import MathParser from './components/MathParser/MathParser.svelte';
	import MathTexRenderer from './components/MathTexRenderer/MathTexRenderer.svelte';
	import VariableList from './components/VariableList/VariableList.svelte';
	import VariableAddForm from './components/VariableAddForm/VariableAddForm.svelte';

	let inputVal = '';
	// let variables = [];

	// const handleAddVariable = ({detail: {name}}) => {
	// 	console.log('evt: handleAddVariable', {name})
	// 	variables = [...variables, {name, value: ''}];
	// };

	// const handleChangeVariable = ({detail: {index, value}}) => {
	// 	console.log('evt: handleChangeVariable', {index, value})
	// 	variables = [
	// 		...variables.slice(0, index),
	// 		{...variables[index], value},
	// 		...variables.slice(index + 1)
	// 	];
	// };

	const handleSolveClick = () => {
		console.warn('solving!');
	}

</script>

<p>Test</p>

<MathParser bind:value={inputVal} let:tex let:scope let:solve let:setVariable >

	<div>
		<MathTexRenderer {tex} />
	</div>

	<MathInput bind:value={inputVal} />

	<p>Define Variable</p>
	<VariableAddForm on:submit={({detail}) => {setVariable(detail)}} />

	<p>Variables:</p>
	<VariableList variables={scope} on:change={({detail}) => {setVariable(detail)}} />

	<button on:click={solve} type="button">Solve</button>


</MathParser>
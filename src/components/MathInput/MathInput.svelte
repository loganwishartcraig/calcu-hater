<script>

	import {mathInputStore} from '../../stores';

	function handleKeyUp(evt) {
		mathInputStore.setValue(evt.target.value, evt.target.selectionStart, evt.target.selectionEnd);
	}

	function handleMouseUp({target: {selectionStart, selectionEnd}}) {
		mathInputStore.setSelection(selectionStart, selectionEnd);
	}

</script>

<input type="text" value={$mathInputStore.value} on:keyup={handleKeyUp} on:mouseup={handleMouseUp} class="border-gray-400 p-2 w-full">

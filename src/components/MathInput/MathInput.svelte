<script>

	import {mathInputStore} from '../../stores';

	function handleKeyUp(evt) {
		mathInputStore.setValue(evt.target.value, evt.target.selectionStart, evt.target.selectionEnd);
	}

	function handleMouseUp({target: {selectionStart, selectionEnd}}) {
		mathInputStore.setSelection(selectionStart, selectionEnd);
	}

</script>

<input type="text" value={$mathInputStore.value} on:keyup={handleKeyUp} on:mouseup={handleMouseUp}>
<div>Start: {$mathInputStore.selectionRangeStart}</div>
<div>End: {$mathInputStore.selectionRangeEnd}</div>


function Stack() {
	let startNode = null;

	function push(value) {
		
		const node = { value, next: null };
		
		if (startNode === null) {
			startNode = node;
		} else {
			
			node.next = startNode;
			
			startNode = node;
		}
	}

	function pop() {
		
		if (startNode === null) {
			return undefined;
		} else {
			
			const value = startNode.value;
			
			startNode = startNode.next;
			
			return value;
		}
	}

	return {
		push,
		pop
	}
}
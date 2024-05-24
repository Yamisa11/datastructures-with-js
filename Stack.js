
function Stack() {
	let head = null;

	function push(value) {
	  const newNode = Node(value, null);
	  if (!head) {
		head = newNode;
	  } else {
		newNode.setNextNode(head);
		head = newNode;
	  }
	}
  
	function pop() {
	  if (!head) {
		return null;
	  }
	  let value = head.getValue();
	  head = head.getNextNode();
	  return value;
	}
  
	return {
	  push,
	  pop,
	};
  }
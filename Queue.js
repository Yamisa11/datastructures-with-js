function Queue() {
	let head = null;
	let tail = null;
	
	function enqueue(value) {
	  const newNode = Node(value, null);
	  if (!head) {
		head = newNode;
		tail = head;
	  } else {
		tail.setNextNode(newNode);
		tail = newNode;
	  }
	}
	
	function dequeue() {
	  if (!head) {
		return null;
	  }
	  let nodeValue = head.getValue();
	  let currentNode = head;
	  head = currentNode.getNextNode();
	  return nodeValue;
	}
  
	return {
	  enqueue,
	  dequeue,
	};
  }
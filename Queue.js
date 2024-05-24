function Queue() {
   const queue = [];

   function enqueue(value) {
	   queue.push(value);
   }

   function dequeue() {
	   if (queue.length === 0) {
		   
		   return undefined;
	   }
	   
	   return queue.shift();
   }

   return {
	   enqueue,
	   dequeue
   };
}
module.exports = Queue;
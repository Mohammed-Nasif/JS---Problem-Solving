/*
-- Brainstorming --

    Have 1-indexed Array [numbers] of length n;
    Have numbers of queries (q). [2D Array]
    Each Query => [startIdx i, endIdx r, number x]

    Find => Sum of numbers between indexes i and r (both included)
    if zero occured in range add x instead of it.
*/

// 1st Method: Brute force Solution [Nested Loop]

function findSum(numbers, queries) {
	const sum = new Array(queries.length).fill(0);

	for (let i = 0; i < queries.length; i++) {
		// let j = queries[i][0] - 1 Cause numbers 1-index not 0
		for (let j = queries[i][0] - 1; j < queries[i][1]; j++) {
			if (numbers[j] === 0) {
				sum[i] += queries[i][2];
			} else {
				sum[i] += numbers[j];
			}
		}
	}

	return sum;
}

console.log('1st Test: ' + findSum([5, 10, 10], [[1, 2, 5]])); // 15
console.log('2nd Test: ' + findSum([-5, 0],[[2, 2, 20],[1, 2, 10]])); // 20 , 5
console.log('3rd Test: ' + findSum([-1, -1, 1, -4, 3, -3, -4], [[1, 4, 2]])); // -5
console.log('4th Test: ' + findSum([1000000000], [[1, 1, 100]])); // 1000000000
console.log('5th Test: ' + findSum([-1000000000], [[1, 1, 100]])); // -1000000000



// 2nd Method: The Optimized Solution Single Loop

function findSum(numbers, queries) {
	const sums = [];
	const subArraySum = [];
	const zerosArr = [];
	let zerosCount = 0;
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] === 0) {
			zerosCount++;
			zerosArr[i] = zerosCount;
		} else {
			zerosArr[i] = zerosCount;
		}
		subArraySum[i] = numbers[i] + (subArraySum[i - 1] || 0);
	}
	for (let q of queries) {
		const i = q[0] - 1;
		const r = q[1] - 1;
		const x = q[2];
		let finalSum = subArraySum[r] - (subArraySum[i - 1] || 0) + (zerosArr[r] - (zerosArr[i - 1] || 0)) * x;
		sums.push(finalSum);
	}
	return sums;
}

console.log('1st Test: ' + findSum([5, 10, 10], [[1, 2, 5]])); // 15
console.log('2nd Test: ' + findSum([-5, 0],[[2, 2, 20],[1, 2, 10]])); // 20 , 5
console.log('3rd Test: ' + findSum([-1, -1, 1, -4, 3, -3, -4], [[1, 4, 2]])); // -5
console.log('4th Test: ' + findSum([1000000000], [[1, 1, 100]])); // 1000000000
console.log('5th Test: ' + findSum([-1000000000], [[1, 1, 100]])); // -1000000000

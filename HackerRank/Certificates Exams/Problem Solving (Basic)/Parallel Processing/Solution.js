/*
-- Brainstorming -- 
    Have Certain Number of cores
    Have Files and Lines Included

    1st Case: File Executed on One Core => Time = File's Code Lines Number.

    2nd Case: if Code Lines can be divided by cores => parallel Execute
        Time => Code Lines Number / Cores Number
    Limitation of how many files executed in parallel
*/

function minTime(files, numsCores, limit) {
	const parallelExec = [];
	const normalExec = [];

	files.forEach((file) => {
		if (file % numsCores === 0) {
			parallelExec.push(file);
		} else {
			normalExec.push(file);
		}
	});

	parallelExec.sort((b, a) => a - b); // Sorting Files Length from Big to small

	const normalSum = normalExec.length !== 0 && normalExec.reduce((acc, curr) => acc + curr);

	const parallelSum = parallelExec.reduce((acc, curr, currIdx) => {
		return currIdx < limit ? acc + curr / numsCores : acc + curr;
	}, 0);

	return normalSum + parallelSum;
}

// Tests


console.log("1st Test:" + minTime([5, 3, 1], 5, 5)) // 5
console.log("2nd Test:" + minTime([3, 1, 5], 1, 5)) // 9
console.log("3rd Test:" + minTime([130291875, 474356040, 1, 8], 5, 3)) // 120929592
console.log("4th Test:" + minTime([247319702, 7, 6], 7, 9)) // 35331393
console.log("5th Test:" + minTime([577998282, 2, 4], 3, 1)) // 192666100

// console.log("6th Test:" + minTime(sixthTest, 355985749, 723215882)) // 236795653013
// 7th and 8th will Be Tested Like 6th
/*
How To Test The Massive Test Cases Like 6 - 7 - 8 Case
Take The Input and Save It it String => s = `input`;
s = `...`
const sixthTest = s.split("\n").map((n)=> Number(n)); => The Files Array use it Then
*/

console.log("9th Test:" + minTime([1], 1, 1)) // 1 
export function getRangeOfCurrents(nums) {
    let sortedNums = sortNumsInAscending(nums);
    let cnt = 1;
    let rangeOfCurrents = [];
    let lowestNum = sortedNums[0];
    let highestNum = sortedNums[0];
    if (nums.length === 0) {
        return "No range of values detected";
    }
    for (let i = 0; i < sortedNums.length; i++) {
        if (isNumsConsecutive(sortedNums[i], sortedNums[i + 1])) {
            highestNum = sortedNums[i + 1];
            cnt++;
        } else {
            let range = `{${lowestNum}-${highestNum}:${cnt}}`
            rangeOfCurrents.push(range);
            lowestNum = sortedNums[i + 1];
            highestNum = sortedNums[i + 1];
            cnt = 1;
        }
    }
    return rangeOfCurrents;
}

function isNumsConsecutive(firstNum, nextNum) {
    return firstNum === nextNum || (nextNum - firstNum) === 1;
}

function sortNumsInAscending(nums) {
    return nums.sort((a, b) => { return a - b });
}

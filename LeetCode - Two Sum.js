//Question --------------------
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//PREP Notes ------------
//2 for loops | 1 inside of another
//we get back numbers, in an array
//1st for loop will take the first number in the array, and inside of that loop, we will check the numbers beside said number to add eachother up and check if it equals the target. and if not, keep iterating through the 1st loop until we hit the target.
//nums.length


var twoSum = function(nums, target) {
    let output = []
    for(let i=0; i<nums.length;i++){
        for(let j=i+1; j<nums.length; j++){
            if (nums[i] + nums[j] === target){
                output.push(i,j)
            }
        }
    }
    return output
};

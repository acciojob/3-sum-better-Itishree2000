function threeSum(arr, target) {
// write your code here
  arr.sort((a, b) => a - b);
  
  let closestSum = Infinity; // Initialize with a large value
  let minDiff = Infinity; // Initialize with a large value
  
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    
    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];
      const currentDiff = Math.abs(currentSum - target);
      
      if (currentDiff < minDiff) {
        // Update the closest sum and minimum difference
        closestSum = currentSum;
        minDiff = currentDiff;
      }
      
      if (currentSum < target) {
        // If the current sum is less than the target, move the left pointer to the right
        left++;
      } else {
        // If the current sum is greater than or equal to the target, move the right pointer to the left
        right--;
      }
    }
  }
  
  return closestSum;
}

module.exports = threeSum;

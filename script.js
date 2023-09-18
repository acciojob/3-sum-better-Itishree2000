function threeSum(arr, target) {
// write your code here
  //sort the array
  arr.sort((a,b) =>a-b);
  let closestSum=infinity;//initialise the largest value
  let minDiff=infinity;   //initialise the largest value
  let arr.length=n;
  for(let i=0;i<n-2;i++)
	  {
		let left=i+1;
		let right=n-1;
		while(left<right)
			{
				const currentSum=arr[i]+arr[left]+arr[right];
				const currentDiff=math.abs(currrentSum-target);
				if(currentDiff<currentSum)
				{
					closestSum=currentSum;
					minDiff=currentDiff;
				}
				if(currentSum<target)
				{
					left++;
				}
				else
				{
					right--;
				}
			}
	  }
	return closestSum;
}

module.exports = threeSum;


function divideArray(nums){
    let oddNum = [];
    let evenNum = [];
   
    for(var i=0 ; i < nums.length ; i++){
      
        if (nums[i]%2 == 0){
            evenNum.push(nums[i]);
         
        }
        else{
            oddNum.push(nums[i]);
        }
    }
    
    let even_array = (evenNum.length == 0) ? "None" : evenNum.sort() ;
    let odd_array = (oddNum.length == 0) ? "None" : oddNum.sort() ;

    console.log("Even no - "+even_array);
    console.log("Odd no - "+odd_array);
}

nums = [4, 2, 8];

divideArray(nums);
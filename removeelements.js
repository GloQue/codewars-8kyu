/* Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...] */

function removeEveryOther(arr){
    //your code here
    let keptElements = arr.filter((element, index) => {
      if(index % 2 === 0){
        return element
      }
    })
    
    return keptElements
  }
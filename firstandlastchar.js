// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.



function removeChar(str){
    //You got this!
     let convertedString = str.split('')
     convertedString.pop()
     convertedString.shift()
     
     let convertedBackToString = convertedString.join('')
     return convertedBackToString
   };
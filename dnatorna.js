/*Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

Create a function which translates a given DNA string into RNA. */



function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    let newDna = dna.replaceAll('T', 'U')
    return newDna
  }











//   LOST WITHOUT A MAP
/*Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6] */

  function maps(x){
    let doubleIntegers = x.map(double => double + double)
    return doubleIntegers
  }












  //   QUARTER OF THE YEAR

/* Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.*/


const quarterOf = (month) => {
    // Your code here
    switch (month){
      case 1: 
        return 1
        break;
      case 2: 
        return 1
        break;
      case 3: 
        return 1
        break;
      case 4: 
        return 2
        break;
      case 5: 
        return 2
        break;
      case 6: 
        return 2
        break;
      case 7: 
        return 3
        break;
      case 8: 
        return 3
        break;
      case 9: 
        return 3
        break;
      case 10: 
        return 4
        break;
      case 11: 
        return 4
        break;
      case 12: 
        return 4
        break;
      
  }
    }

    //OR USING TERNARY OPERATOR

    const quarterMonth = (month) => {
        return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4
      }
      
      

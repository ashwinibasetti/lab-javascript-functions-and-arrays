// Progression #1: Greatest of the two numbers
function greatestOfTwoNumbers(a,b){
if(a>b)
return a;
else if (a<b)
return b;
else
return b;
}
// Progression #2: The lengthy word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];
function findScaryWord(words) {
  if(words.length==0){
    return null;
  }
    return words.sort(function(a, b) {return b.length - a.length})[0];
  }
  


// Progression #3: Net Price
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
function netPrice(numbers){
    var total=0;
    for(var i in numbers) { 
        total += numbers[i];
    }
    return total;
}


// Progression #4: Calculate the average
const mixedArr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function add(mixedArr){
  if(mixedArr.length==0){
  return 0;
  }
  
else{
  
  function sum(mixedArr){
    var z=0;
    for(var i=0;i<mixedArr.length;i++){
      if(typeof(mixedArr[i])=='number'){
        z=z+mixedArr[i];
      }
      else if(typeof(mixedArr[i])=='string'){
        z=z+mixedArr[i].length;
      }
      else if(typeof(mixedArr[i])=='boolean'){
        z=z+mixedArr[i];
      }
      else{
        throw Error("Unsupported data type sir or ma'am");
      }
    }
    return(z);
  }
  return Number(sum(mixedArr));
}
}

// Progression 4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];
function midPointOfLevels(numbersAvg){
  if(numbersAvg.length==0){
    return null;
  }
   const total = numbersAvg.reduce((acc, c) => acc + c);
    const average=total/numbersAvg.length;
  return average;
}
  

// Progression 4.2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];
function averageWordLength(wordsArr){
  if(wordsArr.length==0){
    return null;
  }                 
avg = wordsArr.join('').length / wordsArr.length
return avg ;    
}
const Arr = [63, 122, 'audi', 61, true, 'volvo', '20', 'lamborghini', 38, 156];
function avg(Arr){
  if(Arr.length==0){
    return null;
  }
}

// Progression #5: Unique arrays
const wordsUnique = [
  'bread',
  'jam',
  'milk',
  'egg',
  'flour',
  'oil',
  'rice',
  'coffee powder',
  'sugar',
  'salt',
  'egg',
  'flour'
];
function uniqueArray(wordsUnique){
if(wordsUnique.length==0){
  return null;
}
 let unique = [...new Set(wordsUnique)];
 return unique;
}

// Progression #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];
function searchElement(wordsFind,matter){
  if(wordsFind.length==0){
  return null;
  }
  wordsFind.indexOf("matter");
  return true;
}
// Progression #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
  var a='matter'
  function howManyTimesElementRepeated(wordsCount,a){
    if(wordsCount.length==0){
      return(0);
    }
    else{
      var i=0;
      var count=0;
      for(i=0;i<wordsCount.length;i++){
        if(wordsCount[i]==a){
          count++;
        }
      }
      return(count);
    }
  }
      
// Progression #8: Bonus

const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45]
];
function maximumProduct(){
  
}
const findLongestWord = function(string) {
    let long = string.split(' ');
    console.log(long);
    let total = 0;
    let word = null;

    for(let i = 0; i < long.length; i += 1){
        if(total < long[i].length){
            total = long[i].length;
            word =long[i];
        }
    }
    return word;
  };
  
  
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
//   console.log(findLongestWord('Google do a roll')); // 'Google'
  
//   console.log(findLongestWord('May the force be with you')); // 'force'
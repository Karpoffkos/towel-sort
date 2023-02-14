
// You should implement your task here.

module.exports = function towelSort (matrix) {
 // console.log(matrix, 5)
 let arr = [];
 console.log(arguments.length, 7);
 if(!arguments.length ){ 
    return [];
  }  
  else {
    
    if(matrix.length !== 0){
      for (let i = 1 ; i <= matrix.length; i++){
        let pos = i-1;
        if(i%2 == 0){
          matrix[pos].reverse().forEach(j => arr.push(j));
        } else {
          matrix[pos].forEach(j => arr.push(j));
        }
      }
    // console.log(arr, 16)
      
    }
    console.log(arr, 26)
    return arr;
  } 
}

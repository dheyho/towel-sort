

// You should implement your task here.

module.exports = function towelSort(matrix) {

  if(!matrix || matrix.length===0){
  return [];
  }
  for (var i = 1; i <= matrix.length-1;) {
  
  matrix[i].reverse();
  i+=2;
  
  }
  
  let massnew = matrix.join().split(",");
  for (let i = 0; i<massnew.length; i++){
  massnew[i] = +massnew[i];
  }
  return massnew;
  }
// Pascal’s Triangle
/* Pascal’s triangle is a triangle whose element value is
  the summation of its top two (left and right) values:

          1          
        1  1        
      1  2  1      
    1  3  3  2    
  1  4  6  4  1  
1  5  10  10  5  1
*/
function pascalTriangle(row, col) {
  if (col == 0) {
    return 1;
  } else if (row == 0) {
    return 0;
  } else {
    return pascalTriangle(row - 1, col) + pascalTriangle(row - 1, col - 1);
  }
}
console.log(pascalTriangle(5, 2)); // 10 (counting from 0)

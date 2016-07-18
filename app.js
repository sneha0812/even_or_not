function even_recursion(number){  
  if(number === 0 ){  
    return true;  
  }  
  if(number ===  1){
    return false;
  }
  else   
  {  
    number = number % 2;  
    return even_recursion(number);  
  }  
}  
console.log(even_recursion(989));

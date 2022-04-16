function func(par1, par2) {
  let result = par1 * par2;
  result += par1 - par2;
  result += par1 / par2;
  result += par1 % par2;
  return result;
}

console.log(func(2, 3));
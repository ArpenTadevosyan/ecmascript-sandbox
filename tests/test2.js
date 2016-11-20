const f1=function(a=5,b=2 ){
  return a+b;
};
console.log(f1(5,4));
const g= f1.bind(null,10);
console.log(g());

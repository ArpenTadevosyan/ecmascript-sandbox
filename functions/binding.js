const obj={
  name:'Ando'
};

const funk = function(lest_name){
  console.log(`My name is: ${this.name}`+" "+ lest_name );
  };
  
const g=funk.bind(obj,'Azizyan');
g();


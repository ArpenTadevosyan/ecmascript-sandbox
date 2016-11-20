const obj={
name : 'Hasmik',
age : 13,
get_name : function(){
  console.log(this.name);

},

get_age : function(){
console.log(this.age);
}
};
obj.get_age.call({age : 50});
obj.get_name.call({name : 'Vaxo'});

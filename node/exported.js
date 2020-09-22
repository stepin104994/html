var Person=require('./function');

var person=new Person('nisu','mysore');
person.printDetails();
person.greetMessage('nisu ');
console.log(person.mobile);

person.sendMessage=function(){
    console.log('bye bye');
}

person.sendMessage();
var person1=new Person('nithu','bangalore');
person1.printDetails();
person1.greetMessage('nithu ');
console.log(person1.mobile);
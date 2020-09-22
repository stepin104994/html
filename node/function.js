function Person(name,city) {
    this.name = name;
    this.city=city;
    this.printDetails=function(){
        console.log(this.name+"   "+this.city);
    }
    
  }
  
  Person.prototype.greetMessage=(message)=>{
    console.log(message+this.name);  

  }

  Person.prototype.mobile=9108174242;
  module.exports=Person;
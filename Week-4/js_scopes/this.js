class person {
  constructor(Name,Age,Gender,Nationality){
    this.Name = Name;
    this.Age = Age;
    this.Gender = Gender;
    this.Nationality = Nationality;
  }
     introduce()
     {
      var intro = "Name: "+this.Name+", Age: "+this.Age+", Gender: "+this.Gender+", Nationality :"+this.Nationality; 
      return intro;
    }
}

const person1 = new person("mandar",27,"m","india");
const person2 = new person("kari",24,"f","Pakistan");
const person3 = new person("Kajal",27,"f","bangladesh");

console.log(person1.introduce());
console.log(person2.introduce());
console.log(person3.introduce());

class Student extends person{
  constructor(Name,Age,Gender,Nationality,subject){
    super(Name,Age,Gender,Nationality);
    this.subject = subject;
  }

  study(){
    return this.subject;
  }
}

const stud = new Student("Vaibhav", 27, "m", "indian" ,"physics");
console.log("student intro :"+stud.introduce());
console.log("student subject :"+stud.study());



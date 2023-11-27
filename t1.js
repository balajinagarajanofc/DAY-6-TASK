class movie {
    constructor(title, studio, rating ) {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }

getmovie(){
    return `title: ${this.title}, studio: ${this.studio}, rating : ${this.rating}`;
}
};
var Movie1 = new movie("Casino Royale", "Eon Productions", "PG-13");
console.log(Movie1.getmovie());

//--------------------------task 2--------------------------

class Circle {
  constructor(radius = 1.0, color = "red") {
    this._radius = radius;
    this._color = color;
  }

  // Get & Set
  get radius() {
    return this._radius;
  }

  set radius(radius) {
    this._radius = radius;
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
  }
  
  // (radius:double)
  radius(){
      return `Circle - Radius: ${this._radius}`
  }

  // toString 
  toString() {
    return `Circle - Radius: ${this._radius}, Color: ${this._color}`;
  }
  
}

const myCircle = new Circle();
console.log(myCircle.radius());  
console.log(myCircle.toString()); 

// ------------------------------------------ task 3 ----------------------------------------

class Person {
  constructor(Name, Age, Gender, address, Status, ContactNum, Mail, Birthday)
  {
  this.Name = Name;
  this.Age = Age;
  this.Gender = Gender;
  this.address = address;
  this.Status = Status;
  this.ContactNum = ContactNum;
  this.Mail = Mail;
  this.Birthday = Birthday;
  }

      getDetails() {
      return `Name: ${this.Name}, Age: ${this.Age}, Gender: ${this.Gender}\nAddress: ${this.address} Status: ${this.Status}, \nContact: ${this.ContactNum}, Mail: ${this.Mail},}\n Birthday: ${this.Birthday}`;
    }
  
}
var person1 = new Person("bala", "27", "Male","Chennai","Single","9841056789", "balajinagarajanofc@gmail.com","Sep")
console.log(person1.getDetails())

//------------------------------------- task 4 ---------------------------------------------------------

class Uberprice {
  constructor(Basicfare, Distance, Timing){
      this.Basicfare = Basicfare;
      this.Distance = Distance;
      this.Timing = Timing
  }

  get Fare()
      {
          var kmr  =12;
          var Distance = this.Distance * kmr;
          var Timing = this.Timing * 0.5;

          var Fare = this.Basicfare+Distance+Timing;
              return Fare;
      }
  }

var Uberprice1 = new Uberprice(2,10,15)
console.log('Uberprice is '+Uberprice1.Fare)
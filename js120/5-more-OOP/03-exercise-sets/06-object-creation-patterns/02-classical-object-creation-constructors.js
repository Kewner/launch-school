// Implement the following diagram using the pseudo-classical approach.
// Subclasses should inherit all of the superclass's methods. Reuse the
// constructors of the superclass when implementing a subclass.

function Person(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

Person.prototype.fullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

Person.prototype.communicate = function() {
  console.log('Communicating');
}

Person.prototype.eat = function() {
  console.log('Eating');
}

Person.prototype.sleep = function() {
  console.log('Sleeping');
}

function Doctor(firstName, lastName, age, gender, specialization) {
  Person.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
}

// this method will leave Doctor.prototype.constructor intact:
Object.setPrototypeOf(Doctor.prototype, Person.prototype);

// while this method would require setting it later:
// Doctor.prototype = Object.create(Person.prototype);

Doctor.prototype.diagnose = function() {
  console.log('Diagnosing');
}

function Professor(firstName, lastName, age, gender, subject) {
  Person.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}

Object.setPrototypeOf(Professor.prototype, Person.prototype);

Professor.prototype.teach = function() {
  console.log('Teaching');
}

function Student(firstName, lastName, age, gender, degree) {
  Person.call(this, firstName, lastName, age, gender)
  this.degree = degree;
}

Object.setPrototypeOf(Student.prototype, Person.prototype);

Student.prototype.study = function() {
  console.log('Studying');
}

// 1. Student.call is called with the new GraduateStudent instance as `this`.
// 2. Because the graduateDegree argument is not passed to the Student call,
//    Student sets this.degree to undefined.

function GraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
  Student.call(this, firstName, lastName, age, gender, degree);
  this.graduateDegree = graduateDegree;
}

Object.setPrototypeOf(GraduateStudent.prototype, Student.prototype);

GraduateStudent.prototype.research = function() {
  console.log('Researching');
}

// Test cases:
let person = new Person('foo', 'bar', 21, 'gender');
console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

let doctor = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctor instanceof Person);     // logs true
console.log(doctor instanceof Doctor);     // logs true
doctor.eat();                              // logs 'Eating'
doctor.communicate();                      // logs 'Communicating'
doctor.sleep();                            // logs 'Sleeping'
console.log(doctor.fullName());            // logs 'foo bar'
doctor.diagnose();                         // logs 'Diagnosing'

let graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'
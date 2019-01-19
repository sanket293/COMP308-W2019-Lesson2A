module objects {
  export interface Greeter {
    saysHello(): void;
  }

  export abstract class Person implements Greeter {
    private _age: number;
    private _name: string;

    // public properties
    get Age(): number {
      return this._age;
    }

    set Age(newAge: number) {
      this._age = newAge;
    }

    get name(): string {
      return this._name;
    }
    set name(newName: string) {
      this._name = newName;
    }
    public saysHello(): void {
      console.log(`${this.name} says hello!`);
    }

    constructor(age: number, name: string) {
      this._age = age;
      this._name = name;
    }
  }

  export class Student extends objects.Person {
    // private variables
    private _studentId: string;

    // public prop
    get studentID(): string {
      return this._studentId;
    }

    set studentID(newStudentID: string) {
      this._studentId = newStudentID;
    }
    constructor(age: number, name: string, studentID: string) {
      super(age, name);
      this.studentID = studentID;
    }

    // private methods

    /// public methods
    public studies(): void {
      console.log(`${this.name} with student Id: ${this.studentID}`);
    }
  }
}
/**
 * // if you are using const declaration should be on same line
const person: objects.Person = new objects.Person(23, "Sanket");
person.saysHello();
*/

// IIFI --

(function() {
  function Start() {
    const student: objects.Student = new objects.Student(
      23,
      "Sanku",
      "C300991500"
    );
    student.saysHello();
    student.studies();
  }

  window.addEventListener("load", Start);
})();

module objects {
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

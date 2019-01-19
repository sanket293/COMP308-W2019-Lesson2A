module objects {
  export abstract class Person {
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
}

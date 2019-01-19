var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Person = /** @class */ (function () {
        function Person(age, name) {
            this._age = age;
            this._name = name;
        }
        Object.defineProperty(Person.prototype, "Age", {
            // public properties
            get: function () {
                return this._age;
            },
            set: function (newAge) {
                this._age = newAge;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Person.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (newName) {
                this._name = newName;
            },
            enumerable: true,
            configurable: true
        });
        Person.prototype.saysHello = function () {
            console.log(this.name + " says hello!");
        };
        return Person;
    }());
    objects.Person = Person;
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(age, name, studentID) {
            var _this = _super.call(this, age, name) || this;
            _this.studentID = studentID;
            return _this;
        }
        Object.defineProperty(Student.prototype, "studentID", {
            // public prop
            get: function () {
                return this._studentId;
            },
            set: function (newStudentID) {
                this._studentId = newStudentID;
            },
            enumerable: true,
            configurable: true
        });
        // private methods
        /// public methods
        Student.prototype.studies = function () {
            console.log(this.name + " with student Id: " + this.studentID);
        };
        return Student;
    }(objects.Person));
    objects.Student = Student;
})(objects || (objects = {}));
/**
 * // if you are using const declaration should be on same line
const person: objects.Person = new objects.Person(23, "Sanket");
person.saysHello();
*/
// IIFI --
(function () {
    function Start() {
        var student = new objects.Student(23, "Sanku", "C300991500");
        student.saysHello();
        student.studies();
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map
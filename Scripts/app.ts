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

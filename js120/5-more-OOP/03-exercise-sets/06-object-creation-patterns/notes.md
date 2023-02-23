## Exercises that exposed weak points
- 01-ancestors.js
  - Study the recursive solution: https://launchschool.com/exercises/7f3cd322
- 02-classical-object-creation-constructors.js
  - `Object.create(Person.prototype)` vs. `Object.setPrototypeOf()`
  - When creating a `GraduateStudent` instance, we pass both a `degree` and a `graduateDegree` to the `Student` call. What if we would want a graduate student to only have a graduate degree, for example? Should we use some logic inside the `Student` constructor to check if a `degree` argument is passed, to not set the property if it isn't?
- 03-circular-queue.js
  - Study user submitted solutions (Alexander Kiselev!!).
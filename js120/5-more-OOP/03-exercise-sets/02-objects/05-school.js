/* Create a school object. The school object uses the student object from the
previous exercise. It has methods that use and update information about the
student. Be sure to check out the previous exercise for the other arguments
that might be needed by the school object. Implement the following methods
for the school object:

- addStudent: Adds a student by creating a new student and adding the student
  to a collection of students. The method adds a constraint that the year can
  only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'.
  Returns a student object if year is valid otherwise it logs "Invalid Year".
- enrollStudent: Enrolls a student in a course.
- addGrade: Adds the grade of a student for a course.
- getReportCard: Logs the grades of a student for all courses. If the course
  has no grade, it uses "In progress" as the grade.
- courseReport: Logs the grades of all students for a given course name. Only
  student with grades are part of the course report.

To test your code, use the three student objects listed below. Using the three
student objects, produce the following values from the getReportCard and
courseReport methods respectively. */

function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${year} year student`);
    },

    addCourse(course) {
      this.courses.push(course);
    },

    listCourses() {
      return this.courses;
    },

    addNote(code, note) {
      let course = this.courses.filter(course => course.code === code)[0];

      if (course) {
        course.notes ? course.notes = course.notes + `; ${note}` :
                                      course.notes = note;        
      }
    },

    updateNote(code, note) {
      let course = this.courses.filter(course => course.code === code)[0];
      if (course) course.notes = note;
    },

    viewNotes() {
      for (const course of this.courses) {
        if (course.notes) console.log(`${course.name}: ${course.notes}`);
      }      
    }
  }
}

const school = {
  students: [],

  addStudent(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      const student = createStudent(name, year);
      this.students.push(student);
      return student;
    }
    
    console.log('Invalid Year');
  },

  enrollStudent(student, course) {
    student.addCourse(course);
  },

  addGrade(student, code, grade) {
    const course = student.courses.filter(course => {
      return course.code === code;
    })[0];

    if (!course) {
      console.log(`${student.name} is not enrolled in a course with code ${code}.`);
      return;
    }

    course.grade = grade;
  },

  getReportCard(student) {
    student.listCourses().forEach(course => {
      let grade;
      course.grade ? grade = course.grade : grade = 'In progress';
      console.log(`${course.name}: ${grade}`);
    });
  },

  courseReport(courseName) {
    const gradeArr = [];
    let gradeStr = `=${courseName} Grades=\n`;

    this.students.forEach(student => {
      const course = student.courses.filter(course => {
        return course.name === courseName;
      })[0];

      if (course && course.grade) {
        gradeStr += `${student.name}: ${course.grade}\n`;
        gradeArr.push(course.grade);
      }
    });

    this.displayReport(gradeArr, gradeStr);
  },

  displayReport(gradeArr, gradeStr) {
    if (gradeArr.length > 0) {
      const average = (gradeArr.reduce((a, b) => a + b)) / gradeArr.length;
      console.log(`${gradeStr}---\nCourse Average: ${average}`);      
    }
  }
}

const foo = school.addStudent('foo', '3rd');
school.enrollStudent(foo, { name: 'Math', code: 101 });
school.addGrade(foo, 101, 95);
school.enrollStudent(foo, { name: 'Advanced Math', code: 102 });
school.addGrade(foo, 102, 90);
school.enrollStudent(foo, { name: 'Physics', code: 202, });

const bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, { name: 'Math', code: 101 });
school.addGrade(bar, 101, 91);

const qux = school.addStudent('qux', '2nd');
school.enrollStudent(qux, { name: 'Math', code: 101 });
school.addGrade(qux, 101, 93);
school.enrollStudent(qux, { name: 'Advanced Math', code: 102 });
school.addGrade(qux, 102, 90);

// Invalid calls
// =============
school.addStudent('kwak', '6th');
// 'Invalid Year'
school.addGrade(foo, 150, 60);
// foo is not enrolled in a course with code 150.

school.getReportCard(foo);
// // Math: 95
// // Advanced Math: 90
// // Physics: In progress

school.courseReport('Math');
// // =Math Grades=
// // foo: 95
// // bar: 91
// // qux: 93
// // ---
// // Course Average: 93

school.courseReport('Advanced Math');
// =Advanced Math Grades=
// foo: 90
// qux: 90
// ---
// Course Average: 90

school.courseReport('Physics');
// undefined
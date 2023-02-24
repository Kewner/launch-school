// Create a school object. The school object uses the same kind of student
// object as the previous exercise. It has methods that use and update
// information about the student. Be sure to check out the previous exercise
// for the other arguments that might be needed by the school object.
// Implement the following methods for the school object:

// addStudent: Adds a student by creating a new student and adding the student to a collection of students. The method adds a constraint that the year can only be any of the following values: '1st', '2nd', '3rd', '4th', or '5th'. Returns a student object if year is valid otherwise it logs "Invalid Year".
// enrollStudent: Enrolls a student in a course.
// addGrade: Adds the grade of a student for a course.
// getReportCard: Logs the grades of a student for all courses. If the course has no grade, it uses "In progress" as the grade.
// courseReport: Logs the grades of all students for a given course name. Only student with grades are part of the course report.

// To test your code, use the three student objects listed below. Using the
// three student objects, produce the following values from the
// getReportCard and courseReport methods respectively.

function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} student`);
    },

    addCourse(course) {
      this.courses.push(course);
    },

    listCourses() {
      return this.courses;
    },

    addNote(code, note) {
      const course = this.courses.filter(course => course.code === code)[0];

      if (course.hasOwnProperty('note')) {
        course.note += `; ${note}`;
      } else {
        course.note = note;
      }
    },

    updateNote(code, note) {
      const course = this.courses.filter(course => course.code === code)[0];
      if (course) course.note = note;
    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    }
  };
}

let school = {
  students: [],

  addStudent(name, year) {
    if (['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      this.students.push(createStudent(name, year));
      return this.students[this.students.length - 1];
    } else {
      console.log('Invalid Year');
    }
  },

  enrollStudent(student, courseName, courseCode) {
    student.addCourse({name: courseName, code: courseCode});
  },

  addGrade(student, courseName, grade) {
    const course = student.courses.filter(course => course.name === courseName)[0];

    if (course) {
      course.grade = grade;
    } else {
      console.log('No such course!');
    }
  },

  getReportCard(student) {
    student.courses.forEach(course => {
      if (course.grade) {
        console.log(`${course.name}: ${course.grade}`);
      } else {
        console.log(`${course.name}: In progress`);
      }
    });
  },

  courseReport(courseName) {
    console.log(`=${courseName} Grades=`);
    const allGrades = [];

    this.students.forEach(student => {
      let course = student.courses.find(course => {
        return course.name === courseName;
      });

      if (course && course.grade) {
        console.log(`${student.name}: ${course.grade}`);
        allGrades.push(course.grade);
      }
    });

    const gradesTotal = allGrades.reduce((acc, cur) => acc + cur, 0);
    const average = Math.round((gradesTotal / allGrades.length));

    console.log('---');
    console.log(`Course Average: ${average}`);
  }
};

let foo = school.addStudent('foo', '3rd');
school.enrollStudent(foo, 'Math', 101);
school.enrollStudent(foo, 'Advanced Math', 102);
school.enrollStudent(foo, 'Physics', 202);
school.addGrade(foo, 'Math', 95);
school.addGrade(foo, 'Advanced Math', 90);

school.getReportCard(foo);
// Math: 95
// Advanced Math: 90
// Physics: In progress

let bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, 'Math', 101);
school.addGrade(bar, 'Math', 91);

school.courseReport('Math');
// =Math Grades=
// foo: 95
// bar: 91
// ---
// Course Average: 93

# Exercise 3.1

Update the "Courses and Scores" exercise to use a database, stored in the `transcript.sqlite` file.

Manage a list of objects and related DB tables that include information about the exams:
 
 - Course Code
 - Course name
 - CFU
 - Attained score (number between 18 and 30)
 - Date

The list of Exam objects, named ExamList, will have the following methods, operating on the DB, which return Promises:

 - `add(exam)` // pass a fully-constructed Exam object
 - `getAll()` // returns _(a Promise that resolves to)_ an ExamList with all the Exams
 - `find(courseCode)` // returns _(a Promise that resolves to)_ the matching Exam
 - `afterDate(date)` // returns _(a Promise that resolves to)_ an ExamList with the subset of Exams after the given date
 - `getWorst(num)` // returns _(a Promise that resolves to)_ an ExamList with the num Exams with the lowest score

# Exercise 2.1: Courses and scores, together
_Goal: simple data structure as Array of Objects_

Using JavaScript objects, merge the two previous exercises, and manage a list of objects that will include information about the exams.

Each exam will contain:

- Course Code
- Course name
- CFU
- Attained score (number between 18 and 30, plus a Boolean for the honors)
- Date

Define a constructor function `Exam` to create a new object.

Define a constructor function `ExamList`, with the following methods: 

- `add(exam)` // pass a fully-constructed `Exam` object
- `find(course_code)` // returns the matching Exam
- `afterDate(date)` // returns an ExamList with the subset of Exams after the given date
- `listByDate()` // returns an array of Exams, sorted by increasing date
- `listByScore()` // idem, by decreasing score
- `average()` // return the average value (weighted by CFUs)

# Exercise 2.2: Functional programming
_Goal: simple usage of functional methods over arrays_

Implement the methods of `ExamList` using functional programming methods.
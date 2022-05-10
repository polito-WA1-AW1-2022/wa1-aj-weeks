- retrieve the list of all exams
    (with full details? with a subset of details?) (filtered? complete?)

GET /api/v1/exams
Request body: empty
Response body: array of Exam objects, in JSON

- retrieve the details of a single exam, given its code

- add a completely new exam (new unique code)

POST /api/v1/exams
Request Body: JSON of a new exam
Response Body: none (or error code)
 
- update the information about an exam, given its code (all information may be changed)

- delete information about one specific exam, given the code

DELETE /api/v1/exams/:examCode
Request body: empty
Response body: empty (or error description)
const dayjs = require('dayjs');

/**
 * Constructor function for new Exam objects
 * @param {string} code course code (e.g., '01ABC')
 * @param {string} name course name
 * @param {number} cfu number of credits (e.g. 6)
 * @param {number} score score attained at the exam
 * @param {string} date date of the exam, in a format parseable by dayjs()
 */
function Exam(code, name, cfu, score, date) {
    this.code = code;
    this.name = name;
    this.cfu = cfu;
    this.score = score;
    this.date = dayjs(date);
}


/**
 * Create a new empty transcript object (a list of Exam objects)
 */
function ExamList() {
    this.examList = [];

    /**
     * Add a new exam to the list
     * @param {Exam} exam the exam to be added
     */
    this.add = (exam) => {
        this.examList.push(exam);
    };

    this.find = (code) => {
        const result = this.examList.filter((exam) => exam.code === code);
        return result.length ? result[0] : undefined;
    };

    this.print = () => {
        this.examList.forEach((exam, i) => {
            console.log(`${i + 1}) ${exam.name} - ${exam.score}`);
        });
    };

    this.average = () => this.examList.map((exam) => exam.score)
        .reduce((partial, current) => partial + current, 0) / this.examList.length;
}

exports.Exam = Exam;
exports.ExamList = ExamList;
// module.exports = { Exam, ExamList };

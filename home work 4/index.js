// task 1

// Create the student object
student = {
    name: "Mehreen",
    age: 25,
    grades: {
      math: 99,
      science: 89,
      computer: 92,
    },
    subject: "Computer Science"
  };
  console.log("Using for-in loop:");
for (let grade in student) {
  console.log(student[grade]);
}

//task 2
// DOM
console.log("Using Dom:");
let element = document.getElementById("student_list");
element.innerHTML = "Amber, Mariam, Awais, Mehreen ";
// console.log(element.innerHTML)
let students = ["Amber, Mariam, Awais, Mehreen "];
// for in loop
for (let i in students) {
  console.log(students[i]);
    }

//task 3

let Marks = [26, 50, 58, 71, 45];

Marks.map(function mk(marks, multiplication, division, minus, plus ) {
    console.log("start marks:");
    console.log(marks);
    console.log("Using multiplication:");
     console.log(marks*10);
     console.log("Using division:");
     console.log(marks/10);
     console.log("Using minus:");
     console.log(marks-10);
     console.log("Using plus:");
     console.log(marks+10);
   
});

//task 4
let Payments = [16, 3, 80, 58, 14, 371, 245];
filteredpayments = Payments.filter(function higherpayment(payment) {
  if (payment > 15) {
    return payment;
  }
});

console.log(filteredpayments);

//task 5

// let marks = [85, 92, 78, 88, 95];

// // Array of corresponding subjects
// let subjects = ["Math", "Science", "English", "History", "Art"];

// // Using a for loop to iterate through the arrays and console log them
// for (let i = 0; i < marks.length; i++) {
//     console.log("Subject: " + subjects[i] + ", Marks: " + marks[i]);
//   }
let subjectMarksList = {
    marks: [85, 92, 78, 88, 95],
    subjects: ["Math", "Science", "English", "History", "Art"]
};

console.log("Using for-in loop:");
for (let key in subjectMarksList.subjects) {
    let index = parseInt(key); // Convert key to integer
    console.log(subjectMarksList.subjects[index] + ": " + subjectMarksList.marks[index]);
}


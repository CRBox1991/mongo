const mongoose =require('mongoose')

mongoose.connect('mongodb+srv://dharianfenix:fenix1991@mongoatlas.kcg5bad.mongodb.net/codenotch',
                {useNewUrlParser: false, useUnifiedTopology: false});

const TeachersSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    groups: [String]
});

const SubjectsSchema = new mongoose.Schema({
    title: String,
    teacher: [TeachersSchema]
});

const MarksSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    subject: [SubjectsSchema]
});

const StudentsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    marks: [MarksSchema]
});

const Teachers = mongoose.model('Teachers', TeachersSchema);
const Subjects = mongoose.model('Subjects', SubjectsSchema);
const Marks = mongoose.model('Marks', MarksSchema);
const Students = mongoose.model('Students', StudentsSchema);

// let teacher1 = new Teachers({
//     firstName: "Jose",
//     lastName: "Perez",
//     groups: ["grupo 1", "grupo 3"]
// });

// let teacher2 = new Teachers({
//     firstName: "Menchu",
//     lastName: "Lopez",
//     groups: ["grupo 2", "grupo 3"]
// });

// let teacher3 = new Teachers({
//     firstName: "Estefania",
//     lastName: "Garcia",
//     groups: ["grupo 1", "grupo 2"]
// });

// let subject1 = new Subjects({
//     title: "Fundamentos",
//     teacher: [teacher1]
// });

// let subject2 = new Subjects({
//     title: "Desarrollo Web",
//     teacher: [teacher2]
// });

// let subject3 = new Subjects({
//     title: "Mongo",
//     teacher: [teacher3]
// });

// let mark1 = new Marks({
//     date: "2024-01-01",
//     mark: 3,
//     subject: [subject1]
// });

// let mark2 = new Marks({
//     date: "2024-06-06",
//     mark: 7,
//     subject: [subject2]
// });

// let mark3 = new Marks({
//     date: "2023-05-06",
//     mark: 6,
//     subject: [subject3]
// });

// let student1 = new Students({
//     firstName: "Alicia",
//     lastName: "Perez",
//     marks: [mark1, mark2, mark3]
// })


// teacher1.save()
//     .then((res)=>{
//         console.log(res);
//         return teacher2.save()
//     })
//     .then((res)=>{
//         console.log(res);
//         return teacher3.save()
//     })
//     .then((res)=>{
//         console.log(res);
//         return subject1.save()
//     })
//     .then((res)=>{
//         console.log(res);
//         return subject2.save()
//     })
//     .then((res)=>{
//         console.log(res);
//         return subject3.save()
//     })
//     .then((res)=>{
//         console.log(res);
//         return mark1.save()
//     })        
//     .then((res) =>{
//         console.log(res);
//         return mark2.save()
//     })
//     .then((res) =>{
//         console.log(res);
//         return mark3.save()
//     })
//     .then((res) =>{
//         console.log(res);
//         return student1.save()
//     })
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err) =>{
//             console.log(err);
//     })


Students.find({ firstName: "Cristian" })
    .then(function (students) {
        students.forEach(student => {
            student.marks.forEach(mark => {
                console.log(mark.mark);
            });
        });
    })
    .catch(function () {
        console.log("error");
    });

Students.find({firstName: "Cristian"})
    .then(function (students) {
        students.forEach(student => {
            student.marks.forEach(mark => {
                mark.subject.forEach(subject => {
                    console.log(subject.title);
                });
            });
        });
    })
    .catch(function (error) {
        console.log("Error:", error);
    });

Students.find({firstName: "Cristian"})
    .then(function(students)
    {
        students.forEach(student => {
            student.marks.forEach(mark => {
                mark.subject.forEach(subject =>{
                    subject.teacher.forEach(teacher => {
                        console.log(teacher.firstName + " " + teacher.lastName);
                    })
                })
            })
        })

    })

    // EXTRA // EXTRA // EXTRA

Students.find({firstName: "Cristian"})
    .then(function(students)
    {
        students.forEach(student => {
            student.marks.forEach(mark => {
                mark.subject.forEach(subject =>{
                    subject.teacher.forEach(teacher => {
                        console.log(`Alumno: ${student.firstName}: Subject: ${subject.title}, Nota: ${mark.mark}, Profesor: ${teacher.firstName} ${teacher.lastName}`);
                    })
                })
            })
        })

    })




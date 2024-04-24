const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://dharianfenix:fenix1991@mongoatlas.kcg5bad.mongodb.net/codenotch',
                {useNewUrlParser: false, useUnifiedTopology: false});


const TeachersSchema = new mongoose.Schema({
    teacherName: String,
    teacherLastName: String
})
const MarksSchema = new mongoose.Schema({
    date: Date,
    mark: Number,
    studentName: String,
    studentLastName: String,
    group_name: String,
    subject: String,
    teachers: [TeachersSchema]
})

const Teachers = mongoose.model('Teachers', TeachersSchema);
const Marks = mongoose.model('Marks', MarksSchema);

// let teacher1 = new Teachers({
//     teacherName: "Jose",
//     teacherLastName: "Perez",    
// });

// let teacher2 = new Teachers({
//     teacherName: "Menchu",
//     teacherLastName: "Lopez",    
// });

// let teacher3 = new Teachers({
//     teacherName: "Estefania",
//     teacherLastName: "Garcia",    
// });

// let mark1 = new Marks({
//     date: "2024-01-01",
//     mark: 7,
//     studentName: "Javier",
//     studentLastName: "Redondo",
//     group_name: "Grupo 1",
//     subject: "Desarrollo Web",
//     teachers: [teacher1, teacher3]
// });

// let mark2 = new Marks({
//     date: "2024-06-01",
//     mark: 9,
//     studentName: "Javier",
//     studentLastName: "Redondo",
//     group_name: "Grupo 2",
//     subject: "Mongo",
//     teachers: [teacher2, teacher3]
// });

// let mark3 = new Marks({
//     date: "2024-03-01",
//     mark: 6,
//     studentName: "Javier",
//     studentLastName: "Redondo",
//     group_name: "Grupo 3",
//     subject: "Fundamentos",
//     teachers: [teacher1, teacher2]
// });

// let mark4 = new Marks({
//     date: "2024-01-01",
//     mark: 9,
//     studentName: "Alvaro",
//     studentLastName: "Gomez",
//     group_name: "Grupo 1",
//     subject: "Desarrollo Web",
//     teachers: [teacher1, teacher3]
// });

// let mark5 = new Marks({
//     date: "2024-06-01",
//     mark: 8,
//     studentName: "Alvaro",
//     studentLastName: "Gomez",
//     group_name: "Grupo 2",
//     subject: "Mongo",
//     teachers: [teacher2, teacher3]
// });

// let mark6 = new Marks({
//     date: "2024-03-01",
//     mark: 4,
//     studentName: "Alvaro",
//     studentLastName: "Gomez",
//     group_name: "Grupo 3",
//     subject: "Fundamentos",
//     teachers: [teacher1, teacher2]
// });

// let mark7 = new Marks({
//     date: "2024-01-01",
//     mark: 5,
//     studentName: "Maria",
//     studentLastName: "Gomez",
//     group_name: "Grupo 1",
//     subject: "Desarrollo Web",
//     teachers: [teacher1, teacher3]
// });

// let mark8 = new Marks({
//     date: "2024-06-01",
//     mark: 6,
//     studentName: "Maria",
//     studentLastName: "Gomez",
//     group_name: "Grupo 2",
//     subject: "Mongo",
//     teachers: [teacher2, teacher3]
// });

// let mark9 = new Marks({
//     date: "2024-03-01",
//     mark: 9,
//     studentName: "Maria",
//     studentLastName: "Gomez",
//     group_name: "Grupo 3",
//     subject: "Fundamentos",
//     teachers: [teacher1, teacher2]
// });

// let mark10 = new Marks({
//     date: "2024-01-01",
//     mark: 4,
//     studentName: "Juan",
//     studentLastName: "Gomez",
//     group_name: "Grupo 1",
//     subject: "Desarrollo Web",
//     teachers: [teacher1, teacher3]
// });

// let mark11 = new Marks({
//     date: "2024-06-01",
//     mark: 2,
//     studentName: "Juan",
//     studentLastName: "Gomez",
//     group_name: "Grupo 1",
//     subject: "Mongo",
//     teachers: [teacher2, teacher3]
// });

// let mark12 = new Marks({
//     date: "2024-03-01",
//     mark: 6,
//     studentName: "Juan",
//     studentLastName: "Gomez",
//     group_name: "Grupo 2",
//     subject: "Fundamentos",
//     teachers: [teacher1, teacher2]
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
//         return mark1.save()
//     })
//     .then((res)=>{
//         console.log(res);
//         return mark2.save()
//     })
//     .then((res)=>{
//         console.log(res);
//         return mark3.save()
//     })
//     .then((res)=>{
//         console.log(res);
//         return mark4.save()
//     })
//     .then((res)=>{
//         console.log(res);
//         return mark5.save()
//     })
//     .then((res)=>{
//         console.log(res);
//         return mark6.save()
//     })
//     .then((res)=>{
//         console.log(res);
//         return mark7.save()
//     })
//     .then((res)=>{
//         console.log(res);
//         return mark8.save()
//     })
//     .then((res)=>{
//         console.log(res);
//         return mark9.save()
//     })
//     .then((res)=>{
//         console.log(res);
//         return mark10.save()
//     })
//     .then((res)=>{
//         console.log(res);
//         return mark11.save()
//     })
//     .then((res)=>{
//         console.log(res);
//         return mark12.save()
//     })
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });

//RETO 1 // RETO 1 // RETO 1

// Marks.aggregate([{$match:{subject: "Desarrollo Web"}},
//                  {$project: {subject:1, mark:1, studentName:1 }},
//                  {$group:{"_id": null, "nota media": {"$avg": "$mark"}}}])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });  

// Marks.aggregate([{$count:"Alumnos"}])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });

// Marks.aggregate([{$project:{studentName: 1, studentLastName:1, _id:0}},
//                  ])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });

// Marks.aggregate([{$unwind: "$teachers"},
//                  {$project:{_id:0, "teachers.teacherName":1, "teachers.teacherLastName":1}}                    
//                 ])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });

// Marks.aggregate([{$group: {_id:{"grupos": "$group_name" },
//                 "Cantidad": {"$sum": 1}}},                
//                 ])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });

// Marks.aggregate([{$group: {_id: {"asignatura": "$subject" }, "Media": {"$avg": "$mark"}}},
//                 {$match:{"Media":{ "$gt": 5}}},
//                 {$limit: 5},
//                 {$sort: {"Media": -1}}
//                 ])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });

// Marks.aggregate([{$unwind: "$teachers"},
//                  {$group: {_id:{"Asignatura": "$subject"},
//                  "Cantidad": {"$sum": 1}}}
//                 ])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });

// RETO 2 // RETO 2 // RETO 2

// Marks.aggregate([{$match: {"$or": [{"mark": {"$gt": 8, }}, {"date":{"$lt": "2024-01-01"}}]}},
//                  {$project:{_id: 0, studentName: 1, studentLastName: 1, mark: 1}}
//                 ])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });

// Marks.aggregate([{$match:{date:{$gte:  "2024-01-01"}}},
//                  {$project: {_id:0, mark:1, subject:1}},
//                  {$group: {_id: {"asignatura": "$subject" }, "Media": {"$avg": "$mark"}}}
//                 ])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });

// Marks.aggregate([{$match:{date:{$gte:  "2024-01-01"}}},
//                  {$project: {_id:0, mark:1, studentName:1}},
//                  {$group: {_id: {"asignatura": "$studentName" }, "Media": {"$avg": "$mark"}}}
//                 ])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });

// Marks.aggregate([{$unwind: "$teachers"},
//                  {$project:{_id:0, studentName:1, subject:1, "teachers.teacherName":1}},
//                  {$match:{"teachers.teacherName": "Jose"}},
//                  {$project:{_id:0, studentName:1, subject:1, "teachers.teacherName":1}},
//                  {$group:{_id: {"Student": "$studentName"}, "Total":{$sum:1}}}
//                 ])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((error)=>{
//         console.log(error);
//     });





    


const mongoose = require('mongoose')

const wordSchema =new mongoose.Schema({
  cn: {
    type: String,
    required: true,
  },
  eng: {
    type: String,
    required: true,
  },
  example: {
    type: String,
    minlength: 5,
  }
 })

const lessonSchema = new mongoose.Schema({
  lessonName: {
    type: String,
    required: true,
    minlength: 3,
  },
  words: [wordSchema] 
 })

const departmentSchema = new mongoose.Schema({
  department: {
    type: String,
    required: true,
    unique: true,
    minlength: 2,
  },
  lessons: [lessonSchema]
})


// const userSchema = new mongoose.Schema({
//   department: {
//     type: String,
//     required: true,
//     index: { unique: true },
//     minlength: 2,
//   },
//   lessons: {
//     lesson: {
//       lessonName: {
//         type: String,
//         required: true,
//         minlength: 3,
//       },
//       words: {
//         word: {
//           cn: {
//             type: String,
//             required: true,
//           },
//           eng: {
//             type: String,
//             required: true,
//           },
//           example: {
//               type: String,
//               minlength: 5,
//             }
//         }
//       }
//     }
//   }
// })

const Department = mongoose.model('Department', departmentSchema)

module.exports = Department
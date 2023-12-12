const { OK_STATUS } = require('../constants')
const Department = require('../models/lesson')

const addLesson = (req, res, next) => {
  const { department, lessonName, cn, eng, example} = req.body
  Department.findOne({department})
  .then((dep) => {
    if (!dep) {
      Department.create({
        department,
        lessons: [{ lessonName, words: [{ cn, eng, example}]}],
      })
      .then((newDep) => {
        res.status(OK_STATUS).send({ data: newDep })
      })
    } else {
      const lesson = dep.lessons.find((l) => l.lessonName === lessonName)
      if (lesson) {
        lesson.words.push({ cn, eng, example })
      } else {
        dep.lessons.push({ lessonName, words: [{ cn, eng, example }]})
      }
      dep.save()
        .then((updatedDep) => {
          res.status(OK_STATUS).send({data: updatedDep})
        })
    }
  })
  .catch((err) => {
    next(err)
  })

//   Lesson.findOne({ department })
//     .then((dep) => {
//       if (!dep) {
//         Lesson.create({
//             department,
//             lessons: {
//               lesson: {
//                 lessonName: lessonName,
//                 words: {
//                   word: {
//                     cn,
//                     eng,
//                     example,
//                   }
//                 }
//               }
//             }
//           })
//       } else {
//         console.log(dep.lessons)
//         const lessonToUpdate = dep.lessons.find(lesson => lesson.lessonName === lessonName)
//         if (lessonToUpdate) {
//           console.log('refresh')
//           lessonToUpdate.words.word.push({cn, eng, example})
//           dep.save()
//           .then((updatedDep) => {
//             res.status(200).send({ data: updatedDep})
//           })
//         } else {
//           dep.lessons.push({
//             lesson: {
//               lessonName,
//               words: {
//                 word: {
//                   cn, 
//                   eng,
//                   example,
//                 }
//               }
//             }
//           });
//           dep.save()
//             .then((updatedDep) => {
//               res.status(200).send({ data: updatedDep})
//             })
//         }
//       }
//     })
//     .catch((err) => console.log(err))

  
//   // .then((lesson) => {
//   //   res.status(200).send({ data: lesson})
//   // })
}

module.exports = {
  addLesson,
}
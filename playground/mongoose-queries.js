const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

var id = '587f43e1b21f0476dff112e41'

// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid')
// } else {
//   User.findById(id).then((todo) => {
//     console.log(todo)
//   })
// }

if(!ObjectID.isValid(id)) {
  console.log('ID not valid')
} else {
  User.findById(id).then((user) => {
    if(!user) {
      return console.log('ID not found')
    }
    console.log(user)
  })
}

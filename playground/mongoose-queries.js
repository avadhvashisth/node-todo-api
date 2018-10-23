const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '5bcf50b64bed9b0e547c5399';
//
// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }

// Todo.find({
//   _id: id,
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id,
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

var uid = '5bcb2e38688bd225d8f72578';

User.findById(uid).then((user) => {
  if (!user) {
    return console.log('User not found');
  }

  console.log('User By Id', user);
}).catch((e) => {
  console.log(e);
});

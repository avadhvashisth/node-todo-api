//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',
{ useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb');
  }

  console.log('connected to mongodb!!');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   test: 'Something to do',
  //   completed: false,
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert to do', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Avadh',
  //   age: 22,
  //   location: 'Ghaziabad',
  // }, (err, result) => {
  //   if (err) {
  //     console.log('Unable to insert record', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
  // });

  client.close();
});

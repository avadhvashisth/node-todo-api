//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',
{ useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to mongodb');
  }

  console.log('connected to mongodb!!');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5bc98316b534dd22ce37fd60'),
  // }, {
  //   $set: { completed: true },
  // }, {
  //   returnOrignal: false,
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5bc83f5ddb7c29155481f583'),
  }, {
    $set: { name: 'Avadh' },
    $inc: { age: 3 },
  }, {
    returnOrignal: false,
  }).then((result) => {
    console.log(result);
  });

  //client.close();
});

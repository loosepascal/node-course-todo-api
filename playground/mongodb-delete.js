// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('587e3d3ae05d793f03e7d047')}).then((result) => {
    console.log(result);
  })
  // db.close();
});

const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect ', err);
    }
    console.log('connect successfully');

    // db.collection('todos').find().toArray().then((docs) => {
    //     console.log('todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('unable to fetch ', err);
    // });
    db.collection('todos').find().count().then((docs) => {
        console.log('todos');
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('unable to fetch ', err);
    });
    //db.close();
});
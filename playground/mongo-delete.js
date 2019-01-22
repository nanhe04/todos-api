const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect ', err);
    }
    console.log('connect successfully');

    db.collection('todos').findOneAndDelete({
        name: "testing2"
    }).then((result) => {
        console.log(result);
    });
    //db.close();
});
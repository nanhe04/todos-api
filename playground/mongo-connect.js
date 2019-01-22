const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect ', err);
    }
    console.log('connect successfully');

    db.collection('User1').insertOne({
        name: 'nishant',
        age: '31',
        location: 'banglore'
    }, (err, doc) => {
        if (err) {
            return console.log('Unable to insert ', err);
        }
        console.log('insert doc successfuly ', JSON.stringify(doc.ops, undefined, 2));
    });

    db.close();
});
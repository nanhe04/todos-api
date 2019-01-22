const {
    MongoClient,
    ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect ', err);
    }
    console.log('connect successfully');

    db.collection('todos').findOneAndUpdate({
        _id: new ObjectID('5c0d08e8d6f9f20f15dfc314')
    }, {
        $set: {
            name: 'testing2'
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })
    //db.close();
});
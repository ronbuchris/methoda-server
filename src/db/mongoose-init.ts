import * as mongoose from 'mongoose';
mongoose.set('strictQuery', false);
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.8otc2.mongodb.net/methoda`, { retryWrites: true, w: 'majority' })

mongoose.connection.on('connected', function () {
    console.log('Mongoose conected')
});
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected')
});
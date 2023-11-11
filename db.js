const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB!');
    }catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

const userSchema = new  mongoose.Schema({
    firstname: { type:String, required:true },
    lastname: { type:String, required:true },
    username: {type:String, required:true, unique:true },
    email: { type:String, required:true, unique:true },
    password: { type:String, required:true },

});

const User = mongoose.model('User', userSchema);

module.exports = { connectDB, User};
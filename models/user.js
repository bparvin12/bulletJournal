const mongoose = require ('mongoose');
const bcrypt = require ('bcryptjs');
const Schema = mongoose.Schema;

// Schema
const userSchema = new Schema({ 
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
        // validate: [
        //     { validator: email.notEmpty, msg: 'Email cannot be empty' },
        //     { validator: email.isEmail, msg: 'Invalid email' }
        //   ]
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', async function(next){
    try{
        // generate salt
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(this.password, salt); 
        this.password = passwordHash;
        next();
        // console.log('salt', salt);
        // console.log('normal password', this.password);
        // console.log('hashed password', passwordHash);
    } catch(error) {
        next(error);
    }
});

userSchema.methods.isValidPassword = async function(newPassword) {
try {
    return await bcrypt.compare(newPassword, this.password)
} catch(error){
    throw new Error(error);
}
}

// Model
const User = mongoose.model('user', userSchema);

// Export Model
module.exports = User;
const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');


const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, {
    timestamps: true
});

UserSchema.methods.encrypPassword = async password =>{
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt)
};

// UserSchema.methods.matchPassword = password =>{
//     const salt = await bcrypt.genSalt(10);
//     return await bcrypt.hash(password, salt)
// };

module.exports = model('User', UserSchema);
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const validateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validateEmail, 'Please fill a valid email address']
  },
  password: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});


//Authenticate input against database docs
UserSchema.statics.authenticate = function(email, password, callback) {
  User.findOne({ email: email})
    .exec( (error, user) => {
      if (error) {
        return callback(error);
      } else if (!user) {
        var err = new Error("User not found");
        err.status = 401;
        return callback(err);
      }
      bcrypt.compare(password, user.password, (error, result) => {
        if (result === true) {
          return callback(null, user);
        } else {
          return callback();
        }
      })
    })
};

//Has password before saving
UserSchema.pre('save', function(next) {
  var user = this;
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});


const User = mongoose.model('User', UserSchema);
module.exports = User;

const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const saltRounds = 10;

const Schema = mongoose.Schema;

const User = new Schema(
    {
        name: {
          type: String,
          required: true
        },
        email: {
          type: String,
          required: true
        },
        password: {
            type: String,
            required: true
          },
        phone: {
          type: String,
          required: true
        },
        isConfirmed: {
          type: String,
          required: true
        },
        isApplied: {
          type: String,
          required: true
        }
    },
    {timestamps: true},
);

User.pre('save', function(next) {
  if (this.isNew || this.isModified('password')) {
    const document = this;
    bcrypt.hash(document.password, saltRounds,
      function(err, hashedPassword) {
      if (err) {
        next(err);
      }
      else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

User.methods.isCorrectPassword = function(password, callback){
  bcrypt.compare(password, this.password, function(err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
}

module.exports = mongoose.model('users', User);

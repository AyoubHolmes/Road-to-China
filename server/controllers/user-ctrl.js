const User = require('../models/user-model');
const jwt = require('jsonwebtoken');
const sendMail = require('./mail');
const fs = require('fs');

createUser = (req, res) => {
    const body = req.body

    if(!body) {
        return res.status(400).json({
            success: false,
            messgae: 'You must provide a body'
        })
    }

    const user = new User(body);
    if (!user)
        return res.status(400).json({success: false, message: err})
    console.log(user);
    user
        .save()
        .then(() => {
            sendMail(user.email).catch(console.error);
            res.status(201).json({
                success: true,
                id: user._id,
                message: 'user added successfully'
            })
        })
        .catch((err) => res.status(400).json({
            err,
            message: 'azer'
        }))
}

updateUser = async (req, res) => {
    const body = req.body

    if(!body) {
        return res.status(400).json({
            success: false,
            messgae: 'You must provide a body'
        });
    }
    console.log(req.params.id);
    User.findOne({ _id: req.params.id }, (err, user) => {
        if (err)
            return res.status(404).json({ err, message: 'user not found' });
        user.name = body.name;
        user.password = body.password;
        user.phone = body.phone;
        user.address = body.address;
        user
            .save()
            .then(() => res.status(200).json({
                success: true,
                id: user._id,
                message: 'User updated successfully'
            }))
            .catch((error) => res.status(404).json({
                error,
                message: 'User not updated'
            }))
    })
}

deleteUser = async (req, res) => {
    console.log(req.params.id);
    await User.findOneAndDelete({ _id: req.params.id }, (err, user) => {
        if(err)
            return res.status(400).json({ err});
        if(!user)
            return res.status(404).json({success: false, error: 'user not found'});
        return res.status(200).json({ success: true, user: user })
    }).catch(err => console.error(err));
}

getUserById = async (req, res) => {
    await User.findOne({ _id: req.params.id }, (err, user) => {
        if(err)
            return res.status(400).json({ err});
        if(!user)
            return res.status(404).json({success: false, error: 'user not found'});
        return res.status(200).json({ success: true, user: user })
    }).catch(err => console.error(err));
}

getUsers = async (req, res) => {
    await User.find({}, (err, users) => {
        if(err)
            return res.status(400).json({ err});
        if(!users)
            return res.status(404).json({success: false, error: 'users not found'});
        return res.status(200).json({ success: true, users: users })
    }).catch(err => console.error(err));
}
// ------------------------- authentification -------------------
const secret = 'newSecret';
authUser = async (req, res) => {
    const {email, password} = req.body;
    await User.findOne({ email: req.body.email }, function(err, user) {
        if (err) {
          console.error(err);
          res.status(500)
            .json({
            error: 'Internal error please try again'
          });
        } else if (!user) {
          res.status(401)
            .json({
              error: 'Incorrect email or password'
            });
        } else {
          user.isCorrectPassword(password, function(err, same) {
            if (err) {
              res.status(500)
                .json({
                  error: 'Internal error please try again'
              });
            }
            else if (!same) {
              res.status(401)
                .json({
                  error: 'Incorrect email or password'
              });
            }
            else {
                const payload = { email };
                const token = jwt.sign(payload, secret, {
                    expiresIn: '1h'
                });
                console.log("Here")
                res.cookie('token', token, { httpOnly: true })
                    .sendStatus(200);
                let data = JSON.stringify(user);
                console.log(data)
                fs.writeFileSync('user.json', data, err => {
                    if (err) console.log(err);
                    console.log('User saved!');
                });
            }
          });
        }
      });
}

withAuth = (req, res) => {
    const token = req.cookies.token;
    if (!token) {
      res.status(401).send('Unauthorized: No token provided');
    } else {
      jwt.verify(token, secret, function(err, decoded) {
        if (err) {
          res.status(401).send('Unauthorized: Invalid token');
        } else {
          req.email = decoded.email;        }
      });
    }
}

// ----------------------------------------------------

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUserById,
    getUsers,
    authUser,
    withAuth
};